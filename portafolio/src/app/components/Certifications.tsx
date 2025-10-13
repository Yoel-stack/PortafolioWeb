import Image from 'next/image'
import React from 'react'

import certificadoIA from '../img/certificadoIA.png'

export const Certifications = () => {
  return (
    <div>
      <div className="text-center">
        <nav className="pt-4">
          <h2 className="mt-2 mb-4 text-2xl tracking-wide font-semibold">
            Certificaciones
          </h2>
        </nav>
        <nav className="flex pb-9 items-center justify-center shadow-xl ">
          <Image
            className="rounded-sm"
            src={certificadoIA}
            alt="IA"
            width={250}
            height={0}
            priority
          />
        </nav>
      </div>
    </div>
  );
};
