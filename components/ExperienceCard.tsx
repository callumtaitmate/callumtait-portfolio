import { motion } from "framer-motion";
type Props = {};
function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[250px] md:w-[250px] snap-center bg-[#292929] p-4 opacity-80 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-24 h-24 rounded-full md:rounded-full md:w-[100px] md:h-[100px] object-cover object-center ml-3"
        src="https://res.cloudinary.com/dj2fwrhvv/image/upload/v1681070812/to-sort/amazon-logo_xgctj9.jpg"
        alt="amazon-logo"
      />
      <div className="px-0 md:px-0">
        <h4 className="text-md font-light"> Operations Supervisor</h4>
        <p className="font-bold text-2xl">Amazon Logistics</p>
        <div className="flex space-x-2 ">
          <img
            className="h-10 w-15 rounded-full"
            src="https://res.cloudinary.com/dj2fwrhvv/image/upload/v1681071885/to-sort/Microsoft_Excel-Logo.wine_fcfxvi.png"
          />
        </div>
        <p className="uppercase py-3 text-gray-500">Started: xxx Ended: xxx</p>
        <ul className="list-disc space-y-1 ml-5 text-sm">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
