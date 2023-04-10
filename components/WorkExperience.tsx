import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
type Props = {};
function WorkExperience({}: Props) {
  return (
    <motion.div 
    initial={{opacity: 0,}}
    whileInView={{ opacity: 1}}
    transition={{ duration: 2}}>
      <div className="flex flex-col relative overflow-hidden h-screen text-left md:flex-row max-w-full px-10 mx-auto items-center justify-evenly">
        <h3 className="absolute top-20 uppercase tracking-[20px] ml-4 text-gray-500 text-2xl">
          Experience
        </h3>
        <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
        </div>
      </div>
    </motion.div>
  );
}

export default WorkExperience;   
