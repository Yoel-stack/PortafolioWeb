export const About = () => {
  return (
    <section className="w-full flex items-center justify-center text-center py-10 px-4">
      <div className="max-w-5xl w-full backgroundTwo rounded-xl shadow-2xl p-10 text-white border border-white/5 backdrop-blur-xl">
        <h2 className="text-4xl font-bold tracking-wide mb-6 subTitles">
          Sobre mí
        </h2>

        <p className="bg-white/5 text-gray-300 border border-white/10 p-6 rounded-xl leading-relaxed text-lg">
          Soy un desarrollador web autodidacta con un año de experiencia
          creando aplicaciones y páginas web. Me apasiona resolver problemas y
          crear soluciones innovadoras utilizando JavaScript, mi lenguaje
          preferido.
          <br /><br />
          He trabajado con tecnologías como <strong>Next.js, Tailwind CSS, React, Node.js y Swiper</strong>, 
          desarrollando proyectos como un carrito de compras completo que sigo actualizando.
          <br /><br />
          Estoy siempre abierto a nuevos desafíos y oportunidades para seguir
          creciendo profesionalmente.
        </p>
      </div>
    </section>
  );
};


