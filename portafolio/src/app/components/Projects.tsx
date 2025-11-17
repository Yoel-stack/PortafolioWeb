import Link from "next/link";
import { Slide } from "../index";

export const Projects = () => {
  return (
    <section className="w-full flex justify-center pt-10 px-6">
      <div className="max-w-6xl w-full backgroundTwo rounded-xl shadow-2xl p-10 border border-white/5 backdrop-blur-xl">
        <h2 className="text-3xl font-semibold tracking-wide mb-6 text-center subTitles">
          Mis Proyectos
        </h2>

        <p className="mx-auto max-w-2xl bg-white/5 border border-white/10 backdrop-blur-lg text-gray-300 p-4 rounded-xl shadow-lg text-center leading-relaxed">
          Aquí puedes ver una muestra de los proyectos reales en los que he
          trabajado.
        </p>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mt-10">
          <div className="flex flex-col items-center">
            <nav className="flex justify-center">
              <Slide />
            </nav>
            <nav>
              <Link href="https://globkiks.vercel.app/">
                <button className="mt-4 bg-blue-600 px-4 py-1 hover:bg-blue-700 rounded-md font-semibold transition cursor-pointer">
                  Click para ingresar
                </button>
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-6">
            {/* Tarjeta 1 */}
            <div className="bg-white/5 p-5 rounded-xl border border-white/10 backdrop-blur-xl shadow-lg hover:scale-[1.02] transition-all duration-300">
              <h3 className="pl-2 font-semibold text-lg subTitles">GlobKiks</h3>

              <ul className="mt-3 text-left text-sm list-disc pl-5 space-y-1 text-gray-300">
                <li>
                  <strong>SSR, SSG e ISR:</strong> Estrategias de renderizado
                  mixtas para optimizar SEO y velocidad.
                </li>
                <li>
                  <strong>Enrutado por archivos:</strong> Arquitectura
                  organizada y mantenible.
                </li>
                <li>
                  <strong>Rutas API:</strong> Backend integrado directamente
                  desde Next.js.
                </li>
                <li>
                  <strong>Base de datos Neon:</strong> PostgreSQL escalable y
                  serverless.
                </li>
                <li>
                  <strong>Prisma ORM:</strong> Tipado completo, migraciones y
                  consultas rápidas.
                </li>

                <li>
                  <strong>Stripe:</strong> Procesamiento de pagos seguro y
                  confiable.
                </li>

                <li>
                  <strong>Clerk Auth:</strong> Registro, login y protección de
                  rutas con autenticación moderna.
                </li>
              </ul>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-white/5 p-5 rounded-xl border border-white/10 backdrop-blur-xl shadow-lg hover:scale-[1.02] transition-all duration-300">
              <ul className="text-left text-sm list-disc pl-5 space-y-1 text-gray-300">
                <li>
                  <strong>Recarga instantánea:</strong> Cambios sin perder
                  estado.
                </li>
                <li>
                  <strong>TypeScript:</strong> Código más seguro y mantenible.
                </li>
                <li>
                  <strong>División automática:</strong> Carga solo lo esencial.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
  
