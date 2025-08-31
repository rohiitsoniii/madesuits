import React from "react";

const BespokeTailoringComponent = () => {
  const panels = [
    {
      title: "FIND YOUR SUIT.",
      description: "THIS IS WHERE IT STARTS GETTING MADE.",
      buttonText: "FIND YOUR PERFECT SUIT",
      image:
        "./1.webp",
      gradient: "from-gray-800 via-gray-700 to-gray-900",
      flex: "flex-1",
    },
    {
      title: "BESPOKE",
      subtitle: "TAILORING",
      description: "HAVE YOU EVER TRIED IT?",
      description2: "BY OUR SHIRT MASTER",
      buttonText: "READY TO BESPOKE",
      image:
        "./2.webp",
      gradient: "from-blue-900 via-slate-800 to-gray-900",
      flex: "flex-[1.5]", 
    },
    {
      title: "SHIRTS",
      description: "MADE SHIRTS FOR YOUR DAILY NEEDS",
      buttonText: "EXPLORE COLLECTION",
      image:
        "./3.webp",
      gradient: "from-indigo-900 via-blue-800 to-slate-900",
      flex: "flex-1",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[600px]">
          {panels.map((panel, i) => (
            <div
              key={i}
              className={`relative group overflow-hidden  shadow-2xl ${panel.flex}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${panel.gradient}`}
              ></div>
              <img
                src={panel.image}
                alt={panel.title}
                className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:opacity-65 transition-opacity duration-700"
              />
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-8">
                <h2 className="text-3xl font-medium  text-white mb-2 tracking-wider">
                  {panel.title}
                </h2>
                {panel.subtitle && (
                  <h3 className="text-2xl font-light text-white mb-6 tracking-wider">
                    {panel.subtitle}
                  </h3>
                )}
                {panel.description && (
                  <p className="text-gray-200 text-[14px] mb-2 max-w-sm">
                    {panel.description}
                  </p>
                )}
                {panel.description2 && (
                  <p className="text-gray-300 text-[14px]  text-base mb-8 max-w-sm">
                    {panel.description2}
                  </p>
                )}
                <button className="group/btn border-2 border-white text-white px-8 py-3 text-sm tracking-widest font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 relative">
                  <span className="relative z-10 text-[14px] ">{panel.buttonText}</span>
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BespokeTailoringComponent;
