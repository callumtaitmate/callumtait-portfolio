import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  pageInfo: PageInfo;};
function About({pageInfo}: Props) {
  return (
    <motion.div
    initial={{opacity: 0,}}
    whileInView={{ opacity: 1}}
    transition={{ duration: 2}}
    >
      <div className="flex flex-col relative h-screen text-center max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl ml-3">
          About
        </h3>
        <motion.img
          initial={{
            x: -200,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          className="md:mt-20 flex flex-col justify-center flex-shrink-0 mr-3 mt-10 w-40 h-40 rounded-full object-cover md:rounded-3xl md:w-64 md:h-95 xl:w-[250px] xl:h-[250px] shadow-lg"
          src="https://res.cloudinary.com/dj2fwrhvv/image/upload/v1681055952/to-sort/callum-tait-southampton-tesla_frlzrd.jpg"
        />
        <div className="flex flex-col text-center mb-10">
          <h4 className="text-2xl font-semibold  mb-5">
            Context
          </h4>
          <p className="text-base">
            {pageInfo.role}
          </p>
        </div>
        </div>
    </motion.div>
  );
}
export default About;
