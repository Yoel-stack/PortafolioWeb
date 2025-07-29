import {  Hero, Footer, Projects, Skills, Navbar } from "./index/index";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

