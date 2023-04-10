import { motion } from "framer-motion";
type Props = {};
function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center ml-3"
        src="https://res.cloudinary.com/dj2fwrhvv/image/upload/v1681070812/to-sort/amazon-logo_xgctj9.jpg"
        alt="amazon-logo"
      />
      <div className="px-0 md:px-0">
        <h4 className="text-3xl font-light"> Operations Supervisor</h4>
        <p className="font-bold text-2xl mt-1">Amazon Logistics</p>
        <div className="flex space-x-2- my-2">
          <img
            className="h-10 w-15 rounded-full"
            src="https://res.cloudinary.com/dj2fwrhvv/image/upload/v1681071885/to-sort/Microsoft_Excel-Logo.wine_fcfxvi.png"
          />
        </div>
        <p className="uppercase py-5 text-gray-500">Started: xxx Ended: xxx</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
