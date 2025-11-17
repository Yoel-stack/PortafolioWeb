import Image from "next/image";
import certificadoIA from "../img/certificadoIA.png";

export const Certifications = () => {
  return (
    <section className="w-full px-6 py-10">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* <h2 className="text-3xl font-semibold tracking-wide text-white mb-8">
          Certificaciones
        </h2> */}

        <div
          className="p-6 rounded-xl shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:scale-[1.02] transition-all duration-300">
          <Image
            src={certificadoIA}
            alt="Certificación IA"
            width={500}
            height={0}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
};
