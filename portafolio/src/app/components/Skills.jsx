import Image from "next/image";

import logoHtml from "./tecnologiasImg/html.png";
import logoCss from "./tecnologiasImg/css.png";
import logoJavascript from "./tecnologiasImg/javascript.png";
import logoNextjs from "./tecnologiasImg/nextjs.png";
import logoReact2 from "./tecnologiasImg/react2.png";
import logoNodejs from "./tecnologiasImg/nodejs.png";
import logoTailwind from "./tecnologiasImg/tailwind.png";
import logoZustand from "./tecnologiasImg/zustand.jpeg";
import logoGit from "./tecnologiasImg/git.png";
import logoBoostrap from "./tecnologiasImg/bootstrap5.png";
import logoLinux from "./tecnologiasImg/linux.png";
import logoSwiper from "./tecnologiasImg/swiper.png";

export const Skills = () => {
  return (
    <section className="w-full flex items-center justify-center py-10 px-4">
      <div
        className="max-w-6xl w-full backgroundTwo rounded-xl shadow-2xl p-10 grid grid-cols-1 xl:grid-cols-2 gap-10 text-white border border-white/5 backdrop-blur-xl">
        <div>
          <h2 className="text-3xl font-semibold tracking-wide text-blue-400 mb-6 text-center">
            Habilidades y experiencia
          </h2>

          <div className="space-y-4">
            <p className="bg-white/5 border border-white/10 p-4 rounded-xl leading-relaxed text-gray-300">
              Estoy en constante evolución, procurando perfeccionar mis
              habilidades, explorar nuevas herramientas y expandir mis
              conocimientos. En cada proyecto cuido cada detalle para ofrecer una
              experiencia atractiva y eficiente.
            </p>

            <p className="bg-white/5 border border-white/10 p-4 rounded-xl leading-relaxed text-gray-300">
              Me gusta el trabajo colectivo y me considero una persona
              responsable.
            </p>

            <p className="bg-white/5 border border-white/10 p-4 rounded-xl leading-relaxed text-gray-300">
              Me motiva encontrar soluciones creativas y adaptadas a las
              necesidades del cliente.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold tracking-wide text-blue-400 mb-6 text-center">
            Mis Tecnologías
          </h2>

          <h3 className="text-center text-white/80 mb-2 tracking-wide">
            Frontend y Backend
          </h3>

          <div
            className="
            bg-white/5 border border-white/10
            p-4 rounded-2xl shadow-lg
            flex flex-wrap justify-center gap-6
            backdrop-blur-lg
          "
          >
            {[
              { img: logoHtml, label: "HTML" },
              { img: logoCss, label: "CSS" },
              { img: logoJavascript, label: "JavaScript" },
              { img: logoReact2, label: "React" },
              { img: logoNextjs, label: "Next.js" },
              { img: logoBoostrap, label: "Bootstrap" },
              { img: logoTailwind, label: "Tailwind" },
              { img: logoSwiper, label: "Swiper" },
              { img: logoNodejs, label: "Node.js" },
            ].map((tech, index) => (
              <div
                key={index}
                className="
                flex flex-col items-center
                hover:scale-110 transition-all duration-300
              "
              >
                <Image
                  src={tech.img}
                  alt={tech.label}
                  width={45}
                  height={45}
                  className="rounded-lg shadow"
                />
                <p className="mt-1 text-xs text-gray-300">{tech.label}</p>
              </div>
            ))}
          </div>

          <h3 className="text-center text-white/80 mt-6 mb-2 tracking-wide">
            Estado, gestión y herramientas
          </h3>

          <div
            className="
            bg-white/5 border border-white/10
            p-4 rounded-2xl shadow-lg
            flex flex-wrap justify-center gap-6
            backdrop-blur-lg
          "
          >
            {[
              { img: logoZustand, label: "Zustand" },
              { img: logoGit, label: "Git" },
              { img: logoLinux, label: "Linux" },
            ].map((tech, index) => (
              <div
                key={index}
                className="
                flex flex-col items-center
                hover:scale-110 transition-all duration-300
              "
              >
                <Image
                  src={tech.img}
                  alt={tech.label}
                  width={45}
                  height={45}
                  className="rounded-lg shadow"
                />
                <p className="mt-1 text-xs text-gray-300">{tech.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


