import Image from "next/image";
import logo from "../img/logo.png";
import tel from "../img/tel.png";
import gmail from "../img/gmail.png";
import location from "../img/location.png";

export const Hero = () => {
  return (
    <div className="grid text-center shadow-xl rounded-xl
                    grid-cols-1            /* móvil: una columna */
                    sm:grid-cols-2         /* sm: una columna igual */
                    xl:grid-cols-2         /* xl en adelante: dos columnas */
                    gap-4 p-4 py-5">
      {/* Primera columna: visible en todos */}
        <nav className="flex flex-col px-3 py-5 justify-center">
        <h1 className="mb-4 mt-3 tracking-wider text-5xl py-4 text-left font-bold">
          yoel_stack
          <span className="puntoTitle">.</span>       
        </h1> 
        <h2 className="flex tracking-wider text-left text-2xl font-semibold mb-3">Desarrollador Full Stack</h2>
        <p className="text-left hover:bg-gray-600/18 text-gray-900 bg-gray-600/10 border-1 border-gray-400 p-4 rounded-lg">
          Hola mi nombre es Yoel Montelongo, tengo 23 años de edad, soy un estudiante 
          autodidacta de Uruguay.
          Me encanta la programacion y la tecnologia ademas de buscar soluciones a problemas que sean efectivas y que todo funcione de
          manera adecuada.   
        </p>
      </nav>

      {/* Segunda columna: tarjetas o contenido */}
      <div className="flex flex-col items-center justify-center mb-3">
        <div className="grid grid-cols-2 sm:grid-cols-2">
          <div className="">
            <Image
          className="rounded-full border-2 border-black"
          src={logo}
          alt="fotoperfil"
          width={150}
          height={200}
          priority
        />
          </div>
          <div className="flex flex-wrap">

          <nav className="p-3">
            <nav className="flex items-center justify-start py-2">
              <Image src={location} alt="location" width={26} height={20} />
              <p className="text-sm px-1">Uruguay</p>
            </nav>
            <nav className="flex items-center justify-start py-2">
              <Image src={gmail} alt="gmail" width={26} height={20} />
              <p className="text-sm px-1">ymontelongo0@</p>
            </nav>
            <nav className="flex items-center justify-start py-2">
              <Image src={tel} alt="tel" width={26} height={20} />
              <p className="text-sm px-1">091 872 346</p>
            </nav>
          </nav>
          </div>
        </div>
      </div>
    </div>  
  );
};