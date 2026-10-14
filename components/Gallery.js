'use client';

import React, { useState } from 'react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      src: '/assets/IMG_5717.jpg',
      title: 'Precision Tablet Disassembly',
      alt: 'Precision tablet disassembly on repair workbench',
    },
    {
      src: '/assets/IMG_6004.jpg',
      title: 'Hardware Diagnostics',
      alt: 'Hardware diagnostics and logic board inspection',
    },
    {
      src: '/assets/IMG_6062.jpg',
      title: 'Structural B-7000 Adhesion',
      alt: 'Structural display adhesion clamping process',
    },
  ];

  return (
    <section className="py-10">
      <div className="w-full max-w-[960px] mx-auto px-5">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">
          📸 Workbench & Project Showcase
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2.5">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(item.src)}
              className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-48 object-cover bg-slate-900 block"
              />
              <div className="p-3">
                <p className="text-sky-400 text-sm font-bold m-0">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-slate-950/95 flex flex-col justify-center items-center p-5 cursor-zoom-out"
        >
          <img
            src={selectedImage}
            alt="Expanded view"
            className="max-w-full max-h-[85vh] rounded-lg object-contain"
          />
          <p className="text-sky-400 mt-5 text-base font-semibold">
            Tap anywhere to close
          </p>
        </div>
      )}
    </section>
  );
}