import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";
import { format } from "date-fns";
type Props = {
  experience: Experience;
};
function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[250px] md:w-[250px] snap-center bg-[#292929] p-4 opacity-80 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-24 h-24 rounded-full md:rounded-full md:w-[100px] md:h-[100px] object-cover object-center ml-3"
        src={urlFor(experience.companyImage).url()}
        alt="amazon-logo"
      />
      <div className="px-0 md:px-0">
        <h4 className="text-md font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl">{experience.company}</p>
        <div className="flex space-x-2 ">
          {experience?.technologies.map((technology) => (
            <img
              key={technology._id}
              src={urlFor(technology.image).url()}
              className="h-10 w-15"
            />
          ))}
        </div>
        
        <p className="text-sm uppercase pt-3 text-gray-500">
          {format(new Date(experience.dateStarted), 'yyyy')} -{" "}
          {experience.isCurrentlyWorking
            ? "Present"
            : (format(new Date(experience.dateEnded), 'yyyy'))}
        </p>
        <ul className="list-disc space-y-1 ml-5 mt-2 text-sm">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
          
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
