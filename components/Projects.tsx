import { motion } from "framer-motion";
type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row  px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl ml-4">
        Projects
      </h3>
      <motion.div 
    initial={{opacity: 0,}}
    whileInView={{ opacity: 1}}
    transition={{ duration: 2}}
    className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-0">
        {projects.map((project, i) => (
          <div key={i} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-1 items-center justify-center p-14 md:p-44 h-screen">
            <motion.img 
            initial={{
              y: -300,
              opacity: 0
            }}
            transition={{duration: 1.2,}}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{once: true}}
            src="https://res.cloudinary.com/dj2fwrhvv/image/upload/v1681076905/imageedit_1_3539788253_vbw3ax.png"/>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-xl font-semibold text-center">
                <span  className="underline decoration-[#1cb3ff7e]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                UPS Clone
              </h4>
              <p className="text-sm text-left">
                Case Study Summary Case Study Summary Case Study Summary Case
                Study Summary Case Study Summary Case Study Summary Case Study
                Summary Case Study Summary Case Study Summary Case Study Summary
                Case Study Summary Case Study Summary Case Study Summary Case
                Study Summary Case Study Summary Case Study Summary
              </p>
            </div>
          </div>
        ))}
      </motion.div>
      <div className="w-full absolute top-[30%] bg-[#1cb3ff7e]/10 left-0 h-[300px] -skew-y-12 shadow-xl"></div>
    </div>
  );
}

export default Projects;
