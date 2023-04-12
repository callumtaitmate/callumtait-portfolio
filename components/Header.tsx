import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../typings";

type Props = {
  socials: Social[];
};
function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 flex item-start justify-between max-w-7xl mx-auto z-20 xl:items-center px-2">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.6,
        }}
      >
        <div>
          {socials.map((social) => (
            <SocialIcon
            key={social._id}
              url={social.url}
              fgColor="gray"
              bgColor="transparent"
            />
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <div className="flex flex-row items-center text-gray-300 cursor-pointer pr-2">
          <SocialIcon
            url="#contactme"
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400 font-bold">
            Get In Touch
          </p>
        </div>
      </motion.div>
    </header>
  );
}
export default Header;
