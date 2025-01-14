import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";
type Props = {pageInfo: PageInfo;};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
function ContactMe({ pageInfo}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) =>
    (window.location.href = `mailto:callumtaitmate@gmail.com?subject=${formData.subject}&body=${formData.message}`);
  return (
    <div className="flex flex-col relative h-screen text-center md:text-center md:flex-row max-w-5xl px-10 mx-auto justify-evenly items-center ">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl ml-3">
        Contact
      </h3>
      <div className="flex flex-col space-y-10 items-center">
        <h4 className="text-3xl font-semibold text-center mr-1 mt-20">
          Get in touch.
        </h4>

        <div>
          <div className="flex items-center space-x-5 mb-3">
            <MapPinIcon className="h-6 w-6 text-[#1cb3ff] animate-pulse" />
            <p>{pageInfo.backgroundInformation}</p>
          </div>
          <div className="flex items-center space-x-5">
            <EnvelopeIcon className="h-6 w-6 text-[#1cb3ff] animate-pulse" />
            <p>{pageInfo.email}</p>
          </div>
        </div>
      </div>
      <div className="">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col relative space-y-2"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              className="contactInput"
              type="text"
              placeholder="  Name"
            ></input>
            <input
              {...register("email")}
              className="contactInput"
              type="email"
              placeholder="  Email"
            ></input>
          </div>
          <input
            {...register("subject")}
            className="contactInput"
            type="text"
            placeholder="  Subject"
          ></input>
          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="  Message"
          />
          <button className="flex justify-center bg-[#1cb3ff] py-3 shadow-md rounded-sm hover:opacity-90">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
