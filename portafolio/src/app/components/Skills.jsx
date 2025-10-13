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
    <div>
      <div className="grid xl:grid-cols-2 sm:grid-cols shadow-xl rounded-xl mt-5">
        <div className="mx-3 p-4">
          <h2 className="flex justify-center text-2xl font-semibold mt-2 mb-4 tracking-wide">
            Habilidades y experiencia
          </h2>
          <p className="text-left hover:bg-gray-600/18 text-black bg-gray-600/10 border-1 border-gray-400 p-4 rounded-lg">
            Estoy en constante evolución, procuro perfeccionar mis habilidades, 
            explorar nuevas herramientas y expandir mis conocimientos. 
            En cada proyecto, cuido cada detalle para brindar al usuario una experiencia atractiva,
            cómoda y confortable.

          </p>
          <p className="text-left hover:bg-gray-600/18 text-black bg-gray-600/10 mt-3 border-1 border-gray-400 p-4 rounded-lg">
            Me gusta el trabajo colectivo y me considero una persona
            responsable.
          </p>
          <p className="text-left hover:bg-gray-600/18 text-black bg-gray-600/10 mt-3 border-1 border-gray-400 p-4 rounded-lg">
            Me motiva encontrar soluciones creativas a problemas y adaptarlas a la necesidad del cliente.
          </p>
        </div>

        <div className="m-3 px-4">
          <h2 className="text-2xl tracking-wider font-semibold text-center mt-2 mb-4">
            Mis Tecnologías
          </h2>
          <h3 className="text-center tracking-wider m-1">Frontend y backend</h3>
          <div className="flex flex-wrap hover:bg-gray-600/18 bg-gray-600/10 border-1 border-gray-400 justify-center w-[280px] mx-auto p-2 gap-2 rounded-lg">
            <li className="flex flex-col items-center">
              <Image
                className=" "
                src={logoHtml}
                alt="HTML"
                width={37}
                height={40}
                priority
              />
              <p className="mt-1 text-xs text-black">HTML</p>
            </li>
            <li className="flex flex-col items-center">
              <Image
                className=" "
                src={logoCss}
                alt="CSS"
                width={37}
                height={50}
                priority
              />
              <p className="mt-1 text-xs text-black">CSS</p>
            </li>
            <li className="flex flex-col items-center">
              <Image
                className="rounded shadow-sm"
                src={logoJavascript}
                alt="JavaScript"
                width={37}
                height={30}
                priority
              />
              <p className="mt-1 text-xs text-center text-black">
                JavaScript
              </p>
            </li>
            <li className="flex flex-col items-center">
              <Image
                className="rounded"
                src={logoReact2}
                alt="React"
                width={37}
                height={47}
                priority
              />
              <p className="mt-1 text-xs text-center text-black">React</p>
            </li>
            <li className="flex flex-col items-center">
              <Image
                className="rounded-full border-1 border-black"
                src={logoNextjs}
                alt="Nextjs"
                width={37}
                height={40}
                priority
              />
              <p className="mt-1 text-xs text-center text-black">Nextjs</p>
            </li>
            <li className="flex flex-col items-center">
              <Image
                className=" "
                src={logoBoostrap}
                alt="Bootstrap"
                width={37}
                height={40}
                priority
              />
              <p className="mt-1 text-xs text-center text-black">
                Bootstrap
              </p>
            </li>
            <li className="flex flex-col items-center">
              <Image
                className="rounded"
                src={logoTailwind}
                alt="Zustand"
                width={37}
                height={40}
                priority
              />
              <p className="mt-1 text-xs text-center text-black">Tailwind</p>
            </li>
            <li className="flex flex-col items-center">
              <Image
                className="rounded-full shadow-sm"
                src={logoSwiper}
                alt="Swiper"
                width={37}
                height={40}
                priority
              />
              <p className="mt-1 text-xs text-center text-black">Swiper</p>
            </li>
            <li className="flex flex-col items-center">
              <Image
                className="rounded shadow-sm"
                src={logoNodejs}
                alt="Nodejs"
                width={37}
                height={40}
                priority
              />
              <p className="mt-1 text-xs text-center text-black">Nodejs</p>
            </li>
          </div>

          <h3 className="text-center tracking-wider m-1 mt-3">
            Estado, gestión y herramientas
          </h3>
          <div className="flex flex-wrap hover:bg-gray-600/18 bg-gray-600/10 border-1 border-gray-400 justify-center w-[170px] mx-auto mb-3 p-2 gap-2 rounded-lg">
            <li className="flex flex-col items-center">
              <Image
                className="rounded shadow-sm"
                src={logoZustand}
                alt="Zustand"
                width={37}
                height={35}
                priority
              />
              <p className="mt-1 text-xs text-center text-black">Zustand</p>
            </li>
            <li className="flex flex-col items-center">
              <Image
                className="rounded-full shadow-sm"
                src={logoGit}
                alt="Git"
                width={37}
                height={40}
                priority
              />
              <p className="mt-1 text-xs text-center text-black">Git</p>
            </li>
            <li className="flex flex-col items-center">
              <Image
                className="rounded"
                src={logoLinux}
                alt="JavaScript"
                width={37}
                height={30}
                priority
              />
              <p className="mt-1 text-xs text-center text-black">Linux</p>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};
