import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";
type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="flex flex-col relative overflow-hidden h-screen text-left max-w-full px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
          Skills
        </h3>
        <h3 className="absolute top-36 uppercase tracking-[3px] text-center text-gray-500 text-sm px-5">Click on skill for current proficiency.</h3>
        <div className="grid grid-cols-4 gap-5 mt-20 sm:max-w-[400px]">
          {skills?.map((skill) => (
            <Skill key={skill._id} skill={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
