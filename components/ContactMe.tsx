import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => window.location.href = `mailto:callum.datit@gmail.com?subject=${formData.subject}&body=${formData.message}`
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl ml-3">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center mr-1">Get in touch.</h4>

        <div>
          <div className="flex items-center space-x-5 mb-3">
            <MapPinIcon className="h-6 w-6 text-[#1cb3ff] animate-pulse" />
            <p>Portswood, Southampton - UK</p>
          </div>
          <div className="flex items-center space-x-5">
            <EnvelopeIcon className="h-6 w-6 text-[#1cb3ff] animate-pulse" />
            <p>callum.dtait@gmail.com</p>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-fit mx-auto"
      >
        <div className="flex space-x-2">
          <input
            {...register("name")}
            className="contactInput"
            type="text"
            placeholder="Name"
          ></input>
          <input
            {...register("email")}
            className="contactInput"
            type="email"
            placeholder="Email"
          ></input>
        </div>
        <input
          {...register("subject")}
          className="contactInput"
          type="text"
          placeholder="Subject"
        ></input>
        <textarea
          {...register("message")}
          className="contactInput"
          placeholder="Message"
        />
        <button className="flex justify-center bg-[#1cb3ff] py-3 shadow-md rounded-sm hover:opacity-90">Submit</button>
      </form>
    </div>
  );
}

export default ContactMe;
