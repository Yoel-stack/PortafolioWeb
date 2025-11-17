import Image from "next/image";
import Link from "next/link";

import logoGithub from "./images/github.png";
import logoLinkedin from "./images/linkedin.png";
import logoGmail from "./images/gmail.png";

export const Navbar = () => {
  return (
    <section className="absolute w-screen bg-center">
      <div className="fixed left-0 right-0 z-50 top-0 flex py-3 justify-center">
          <nav className="flex justify-center items-center gap-2 bg-white/10 h-16 w-[200px] hover:bg-white/20 rounded-xl px-4 border border-white/20 backdrop-blur-xl backdrop-saturate-150">
          
          <p className="flex justify-center text-sm text-gray-400 items-center text-center">
            v1.2.0
          </p>

          <Link href="https://github.com/Yoel-stack">
            <Image
              className="cursor-pointer"
              src={logoGithub}
              alt="Github"
              width={37}
              height={40}
              priority
            />
          </Link>
          <Link href="https://www.linkedin.com/in/yoel-montelongo-54687b321/">
            <Image
              className="cursor-pointer"
              src={logoLinkedin}
              alt="Linkedin"
              width={37}
              height={40}
              priority
            />
          </Link>

          <Link href="mailto:yoelmontelongoo0@gmail.com">
            <Image
              className="cursor-pointer"
              src={logoGmail}
              alt="Gmail"
              width={37}
              height={40}
              priority
            />
          </Link>
        </nav>
      </div>
    </section>
  );
};
