import React from 'react';
import { Scissors } from 'lucide-react';

const BespokeIntroComponent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        
       
        <div className="text-center mb-12">
          <h1 className="text-xl md:text-6xl lg:text-7xl font-light tracking-[0.15em] text-gray-900 mb-8 leading-tight">

            THE WORLD OF  BESPOKE
          
          </h1>
          
          <div className="flex items-center justify-center mb-12">
            <div className="h-px bg-gray-300 w-24"></div>
            <p className="mx-6 text-lg md:text-xl font-light text-gray-700 tracking-wide">
              BEGINS <span className="font-normal">with an appointment.</span>
            </p>
            <div className="h-px bg-gray-300 w-24"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-sm md:text-base tracking-[0.1em] text-gray-600 leading-relaxed font-light">
            "WE INVITE YOU TO CREATE A TRULY PERSONAL ITEM OUR MASTER TAILORS HAVE BEEN CREATING BEAUTIFUL MOMENTS FOR MEN FOR DECADES.
          </p>
          
          <p className="text-sm md:text-base tracking-[0.1em] text-gray-600 leading-relaxed font-light">
            BUT AT <span className="font-medium text-gray-900 italic">MADE SUITS</span> IT IS MORE THAN A SERVICE, IT IS AN <span className="font-medium text-gray-900">EXPERIENCE</span>."
          </p>
          
          <div className="my-12">
            <p className="text-sm md:text-base tracking-[0.08em] text-gray-700 leading-relaxed font-light">
              IT'S ONE THAT STARTS WITH A MEETING, BETWEEN <span className="font-medium">YOU</span> AND <span className="font-medium">YOUR TAILOR</span>
            </p>
          </div>
          
          <p className="text-base md:text-lg tracking-[0.12em] text-gray-800 font-medium">
            WHICH A GARMENT IS BORN
          </p>
        </div>

        <div className="flex items-center justify-center my-16">
          <div className="h-px bg-gray-300 w-32 md:w-48"></div>
          <div className="mx-6 p-3 border border-gray-300 rounded-full bg-white shadow-sm">
            <Scissors className="w-5 h-5 text-gray-600" />
          </div>
          <div className="h-px bg-gray-300 w-32 md:w-48"></div>
        </div>

     
        <div className="text-center">
          <p className="text-lg md:text-xl font-light text-gray-800 leading-relaxed max-w-3xl mx-auto">
            At Made Suits, we offer two modes of tailoring services{' '}
            <span className="font-medium">Full Bespoke</span> vs{' '}
            <span className="font-medium">Bespoke to Measure</span>.
          </p>
        </div>
        <div className="mt-20 flex justify-center">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default BespokeIntroComponent;