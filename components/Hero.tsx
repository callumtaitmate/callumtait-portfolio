import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
type Props = {};
function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hello", "From Southampton."],
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={
          "https://res.cloudinary.com/dj2fwrhvv/image/upload/v1681029590/to-sort/callum-tait-southampton_enmtyj.jpg"
        }
        alt="callum-tait-southampton"
      />
      <div className="z-20">
        <h2 className="text-sm text-center uppercase text-gray-500 pb-2 tracking-[15px]">
          Callum Tait
        </h2>
        <div>
        <h1 className="text-center text-3xl lg:text-6xl font-semibold px-10">
          <span className="mr-1">{text}</span>
          <Cursor cursorColor="#ccccc" cursorBlinking />
        </h1>
        </div>
        <div className="pt-5 text-center">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
