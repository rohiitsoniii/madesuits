import React from "react";
import { Scissors } from "lucide-react";

export default function MenswearService() {
  const images = [
    { id: 1, src: "./9.webp", alt: "Professional fitting session" },
    { id: 2, src: "./10.webp", alt: "Suit measurement process" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-6 px-3">
      <div className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.15em] text-gray-900 mb-12 leading-tight">
            A GARMENT BUILT AROUND YOU
          </h2>
          <p className="text-sm md:text-base tracking-[0.1em] text-gray-700 leading-relaxed font-light mb-8 max-w-3xl mx-auto">
            EACH BODY IS UNIQUE SO IS EACH GARMENT. IS NOT A LOOSE FIT IT'S NOT
            A TIGHT FIT,
          </p>
          <p className="text-base md:text-lg tracking-[0.12em] text-gray-900 font-medium">
            IT'S YOURS. YOURS, FOR LIFE.
          </p>
        </div>
      </div>

      <div className="max-w-4xl py-12 mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-12">
          {images.map((img) => (
            <div key={img.id} className="relative">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-96 sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover shadow-lg "
              />
            </div>
          ))}
        </div>

        <div className="text-center space-y-8 pt-12">
          <div className="space-y-6">
            <p className="text-gray-700 text-sm tracking-widest uppercase font-medium">
              We handpicked fabric brands that ensure quality.
            </p>
            <p className="text-gray-700 text-sm tracking-widest uppercase font-medium">
              Our made specialist are trained to provide professional advice
            </p>
            <p className="text-gray-700 text-sm tracking-widest uppercase font-medium">
              For the best type of fabric based on your
            </p>
          </div>

          <div className="space-y-4 py-8">
            {["lifestyle", "personality.", "budget."].map((word, index) => (
              <h2
                key={index}
                className="text-lg md:text-xl lg:text-2xl text-gray-900 leading-tight tracking-wide transition-all duration-500 group-hover:tracking-wider group-hover:text-gray-700"
                style={{
                  fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
                  fontWeight: 300,
                  fontStyle: "italic",
                }}
              >
                {word}
              </h2>
            ))}
          </div>

          <div className="space-y-4 pt-8">
            <button className="bg-[#0D0D0D] text-white px-8 py-3 text-sm tracking-widest uppercase font-medium hover:opacity-70 transition-colors">
              Pricing
            </button>

            <div className="pt-4">
              <button className="bg-[#0D0D0D] text-white px-8 py-3 text-sm tracking-widest uppercase font-medium hover:opacity-70 transition-colors">
                Make Appointment
              </button>
            </div>
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
    </div>
  );
}
