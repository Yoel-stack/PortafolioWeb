import Image from "next/image";
import logo from "../img/logo.png";


export const Hero = () => {
  return (
    <section className="w-full flex items-center justify-center py-10 px-4">
      <div className="max-w-6xl w-full backgroundTwo rounded-xl shadow-2xl grid grid-cols-1 xl:grid-cols-2 p-10 gap-10 title border border-white/5 backdrop-blur-xl">
        
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-extrabold tracking-wide mb-4">
            yoel_stack<span className="puntoTitle">.</span>
          </h1>

          <h2 className="subTitles text-3xl font-semibold mb-6">
            Desarrollador Full Stack
          </h2>

          <p className="bg-white/5 text-gray-300 border border-white/10 p-4 rounded-xl mb-8 leading-relaxed">
            <strong>Hola!</strong> Soy <strong>Yoel Montelongo</strong>, tengo 23 años de edad y soy de Uruguay.
            Me encanta la programación y la tecnología, además de buscar soluciones
            a problemas que sean efectivas y que funcionen correctamente.
          </p>

          {/* AGREGAR BOTON DE DESCARGAR CURRICULUM */}
          {/* <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition">
              Hire Me
            </button>

            <button className="border border-blue-500 px-6 py-3 rounded-xl font-semibold hover:bg-blue-500/20 transition">
              Let’s Talk
            </button>
          </div> */}
        </div>

        <div className="flex items-center justify-center">
          <div className="relative">
            <Image
              className="rounded-full shadow-2xl border-4 border-blue-500/40"
              src={logo}
              alt="Foto de perfil"
              width={350}
              height={350}
              priority
            />
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full blur-3xl bg-blue-600/20 -z-10"></div>
          </div>
        </div>
        
      </div>
    </section>
  );
};