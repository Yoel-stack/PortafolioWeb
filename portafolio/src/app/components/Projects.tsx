import { Slide } from "../index";

export const Projects = () => {
  return (
    <div id="projects" className="mt-8">
      <div
        className="grid text-center
                grid-cols-1            /* móvil: una columna */
                sm:grid-cols-1         /* sm: una columna igual */
                xl:grid-cols-2         /* xl en adelante: dos columnas */
                gap-4"
      >
        {/* Primera columna: visible en todos */}
        <div>
          <h2 className="text-2xl tracking-wider font-semibold">
            Mis Proyectos
          </h2>
          <p className="mx-7 hover:bg-gray-600/18 text-black bg-gray-600/10 border border-gray-400 p-2 rounded-lg mt-4 tracking-wide">
            Aquí puedes ver algunas imágenes del proyecto en el que he
            trabajado
          </p>
          <Slide />
        </div>

        {/* Segunda columna: tarjetas o contenido */}
        <div className="flex flex-col justify-center items-center text-center my-2 shadow-xl rounded-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="mx-6 my-5">
              <p className="hover:bg-gray-600/18 text-black bg-gray-600/10 flex justify-center mb-1 items-center text-x text-center w-[115px] h-[20px] border-1 border-gray-400 p-1 rounded-lg tracking-wider">
                GlobKiks
              </p>
              <p className="hover:bg-gray-600/18 text-gray-300 uppercase bg-gray-600/10 flex justify-center items-center text-xs text-center w-[115px] h-[20px] border-1 border-gray-400 p-1 rounded-lg tracking-wider">
                Agosto-2025
              </p>
              <nav className="mt-1 hover:bg-gray-600/18 text-black bg-gray-600/10 border border-gray-400 p-4 rounded-lg tracking-wide">
                <ol className="text-left text-sm pl-4">
                  <li>
                    <strong>SSR, SSG e ISR:</strong> Implementé técnicas de
                    renderizado para mejorar la carga rápida del contenido y la
                    indexación en motores de búsqueda.
                  </li>
                  <li>
                    <strong>Enrutado basado en archivos:</strong> Utilicé el
                    sistema de enrutado basado en la estructura de archivos
                    facilitando la organización y navegación del proyecto.
                  </li>
                  <li>
                    <strong>Rutas API:</strong> Desarrollé y consumí APIs dentro
                    del proyecto, ampliando las funcionalidades y permitiendo
                    una interacción dinámica con el backend.
                  </li>
                </ol>
              </nav>
            </div>
            <div className="my-5 mt-auto mx-6">
              <nav className="hover:bg-gray-600/18 text-black bg-gray-600/10 border border-gray-400 p-4 rounded-lg tracking-wide">
                <ol className="text-left text-sm pl-4">
                  <li>
                    <strong>Recarga instantánea (Fast Refresh):</strong>{" "}
                    Implementé la recarga instantánea para ver los cambios en
                    tiempo real sin perder el estado de la aplicación.
                  </li>
                  <li>
                    <strong>Soporte para TypeScript:</strong> Integré TypeScript
                    para mejorar la calidad del código y la detección temprana
                    de errores.
                  </li>
                  <li>
                    <strong>División automática de código:</strong> Aproveché la
                    división automática de código para cargar solo los recursos
                    necesarios en cada página, mejorando el rendimiento.
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


