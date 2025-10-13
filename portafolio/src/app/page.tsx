import {  Hero, Footer, Projects, Skills, Navbar, About, Certifications } from "./index/index";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Certifications/>
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

