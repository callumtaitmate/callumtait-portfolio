import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://res.cloudinary.com/dj2fwrhvv/image/upload/v1681074804/React_eckrgf.webp"
        className="rounded-full border border-gray-500 object-cover h-18 w-18 filter group-hover:grayscale transition duration-300"
      />
      <div className="absolute opacity-0 rounded-full h-18 w-18 md:h-18 md:w-18 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white">
        <div className="flex items-center justify-center h-full z-0">
          <p className="text-2xl font-bold text-red-500 opacity-100 p-1">100%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
