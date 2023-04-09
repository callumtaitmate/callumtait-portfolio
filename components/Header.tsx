import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
function Header() {
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
          <SocialIcon
            url="https://www.instagram.com/callumtait1/"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.google.com/search?q=callum+tait+Tesla&bih=966&biw=822&rlz=1C1CHBF_en-GBGB997GB997&hl=en&sxsrf=APwXEdeoGfvSu4lQBxBKX6J3GbsiHaxRuw%3A1680993735516&ei=x-0xZJ6PH8WO8gLXu41g&ved=0ahUKEwjejubTrZv-AhVFh1wKHdddAwwQ4dUDCA8&uact=5&oq=callum+tait+Tesla&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzoICAAQogQQsAM6BggAEB4QDToICAAQigUQhgNKBAhBGAFQtwRYrghgvg9oAXAAeACAAWKIAesCkgEBNZgBAKABAcgBBMABAQ&sclient=gws-wiz-serp"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/callumtait/"
            fgColor="gray"
            bgColor="transparent"
          />
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
