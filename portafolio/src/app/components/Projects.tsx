import { Slide } from "../index";

export const Projects = () => {
  return (
    <div id="projects" className="mt-8">
      <div className="grid text-center
                grid-cols-1            /* móvil: una columna */
                sm:grid-cols-1         /* sm: una columna igual */
                xl:grid-cols-2         /* xl en adelante: dos columnas */
                gap-4">
  {/* Primera columna: visible en todos */}
  <div>
    <h2 className="text-2xl tracking-wider font-semibold">
      Mis Proyectos
    </h2>
    <p className="mx-7 hover:bg-gray-600/18 text-gray-900 bg-gray-600/10 border border-gray-400 p-2 rounded-lg mt-4 tracking-wide">
      Aquí puedes ver algunas imágenes del proyecto en el que he trabajado.
    </p>
    <Slide />
  </div>

  {/* Segunda columna: tarjetas o contenido */}
  <div className="flex flex-col justify-center items-center text-center my-2 shadow-xl rounded-xl">
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div className="mx-6 my-5">
        <p className="hover:bg-gray-600/18 text-gray-700 bg-gray-600/10 flex justify-center mb-1 items-center text-x text-center w-[115px] h-[20px] border-1 border-gray-400 p-1 rounded-lg tracking-wider">ShoesImport</p>
        <p className="hover:bg-gray-600/18 text-gray-300 uppercase bg-gray-600/10 flex justify-center items-center text-xs text-center w-[115px] h-[20px] border-1 border-gray-400 p-1 rounded-lg tracking-wider">Agosto-2025</p>
        <p className="mt-1 hover:bg-gray-600/18 text-gray-900 bg-gray-600/10 border border-gray-400 p-4 rounded-lg tracking-wide">
          Desarrolle una aplicacion web desde cero, este proyecto me permitio
          mejorar mis conocimientos en
        </p>
      </div>
      <div className="my-5 mt-auto mx-6">
        <p className="hover:bg-gray-600/18 text-gray-900 bg-gray-600/10 border border-gray-400 p-4 rounded-lg tracking-wide">
          Pagina de venta de championes que tecnolocias use y para que me sirvieron, porque las use...
        </p>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

