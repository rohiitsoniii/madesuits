import React from 'react'
import {  Phone, Scissors } from 'lucide-react';

const BespokeServicesComponent = ({ 
  showConsultButton = true,
  sections = []
}) => {
  
  const defaultSections = [
    {
      id: 1,
      image: "./4.webp",
      title: "MAKE AN APPOINTMENT",
      description: "TIME IS MONEY WE UNDERSTAND SO WE OFFER OUTBOUND TAILORING AT THE COMFORT OF YOUR OFFICE | HOME",
      subtitle: "HOWEVER IF LIKE TO KNOW MORE",
      footer: "VISIT OUR SHOWROOM IF YOU WANT TO UNDERSTAND MORE.",
      buttonText: "CONSULT US"
    },
    {
      id: 2,
      image: "./5.webp",
      title: "DETAILED CONSULTATIONS | GET MEASURE UP",
      description: "OUR SPECIALIST WILL RUN YOU DOWN WITH A DETAILED CONSULTATION.",
      subtitle: "TAKE YOUR MEASUREMENTS PRECISELY TO ENSURE YOU GET A PERFECT FIT."
    },
    {
      id: 3,
      image: "./6.webp",
      title: "CHOOSE YOUR FABRICS & CUSTOMISE",
      description: "FULLY CUSTOMISABLE OPTIONS PROVIDED PERSONALLY BESPOKEN FOR FROM BUTTONS TO LININGS TO THE CONSTRUCTION OF THE GARMENTS."
    },
    {
      id: 4,
      image: "./7.webp",
      title: "SUIT CUTTING",
      description: "OUR MASTER TAILOR WILL CUT THE SUIT IN OUR SIGNATURE HOUSE CUT",
      subtitle: "PRECISION AND EXPERTISE IN EVERY CUT"
    },
    {
      id: 5,
      image: "./8.webp",
      title: "GET MADE",
      description: "OUR SPECIALIST WILL CREATE THE UNIQUE GARMENT THE WAY YOU WANT IT TOO.",
      timelines: [
        "IN 4 WEEKS TO 6 WEEKS (BESPOKE TO MEASURE)",
        "9- 12 WEEKS (BESPOKE)"
      ]
    }
  ];

  const activeSections = sections.length > 0 ? sections : defaultSections;

  return (
    <div className="min-h-screen bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* First Row (3 items) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {activeSections.slice(0, 3).map((section) => (
            <div key={section.id}>
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg mb-6 h-64 md:h-72 lg:h-80">
                <img 
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

          
              <div className="text-center space-y-4">
                <h3 className="text-base md:text-lg font-medium tracking-[0.1em] text-gray-900 leading-tight">
                  {section.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-light">
                  {section.description}
                </p>
                {section.subtitle && (
                  <p className="text-xs text-gray-700 font-medium mt-3">
                    {section.subtitle}
                  </p>
                )}
                {section.footer && (
                  <p className="text-xs text-gray-600 leading-relaxed mt-2">
                    {section.footer}
                  </p>
                )}
                {section.timelines && (
                  <div className="space-y-2 mt-4 p-4 bg-gray-50 rounded-lg">
                    {section.timelines.map((timeline, i) => (
                      <p key={i} className="text-xs text-gray-700 font-medium">
                        {timeline}
                      </p>
                    ))}
                  </div>
                )}
                {section.buttonText && showConsultButton && (
                  <button className="mt-6 border border-gray-900 text-gray-900 px-6 py-2 text-xs font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center space-x-2 mx-auto rounded">
                    <Phone className="w-3 h-3" />
                    <span>{section.buttonText}</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 justify-center max-w-3xl mx-auto mt-10">
          {activeSections.slice(3, 5).map((section) => (
            <div key={section.id}>
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg mb-6 h-64 md:h-72 lg:h-80">
                <img 
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

        
              <div className="text-center space-y-4">
                <h3 className="text-base md:text-lg font-medium tracking-[0.1em] text-gray-900 leading-tight">
                  {section.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-light">
                  {section.description}
                </p>
                {section.subtitle && (
                  <p className="text-xs text-gray-700 font-medium mt-3">
                    {section.subtitle}
                  </p>
                )}
                {section.timelines && (
                  <div className="space-y-2 mt-4 p-4 bg-gray-50 rounded-lg">
                    {section.timelines.map((timeline, i) => (
                      <p key={i} className="text-xs text-gray-700 font-medium">
                        {timeline}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center my-16">
          <div className="h-px bg-gray-300 w-32 md:w-48"></div>
          <div className="mx-6 p-3 border border-gray-300 rounded-full bg-white shadow-sm">
            <Scissors className="w-5 h-5 text-gray-600" />
          </div>
          <div className="h-px bg-gray-300 w-32 md:w-48"></div>
        </div>
      </div>
    </div>
  );
};

export default BespokeServicesComponent;
