import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-[url('/assets/contact_bg.jpg')] bg-center text-black">
      <Image
        src={"/assets/cover_layer.jpg"}
        height={1080}
        width={1920}
        alt=""
        className="h-screen w-screen absolute top-0 left-0 z-0 opacity-[0.5]"
      />
      <div className="flex items-center justify-center gap-10 z-10">
        <div className="w-full flex flex-col gap-y-5 items-start">
          <h1 className="text-4xl font-semibold">
            Hi tell us about your project
          </h1>
          <p>
            Fill out the form below or{" "}
            <Link className="text-red-500" href={"/contact"}>
              send us an email
            </Link>
          </p>

          <form
            action=""
            className="flex flex-col items-center justify-center w-full gap-y-5"
          >
            <input
              type="text"
              className="p-5 border-none outline-none w-full bg-[#CDCDCD]"
              placeholder="Company Name"
            />
            <input
              type="text"
              className="p-5 border-none outline-none w-full bg-[#CDCDCD]"
              placeholder="Your Name"
            />
            <input
              type="text"
              className="p-5 border-none outline-none w-full bg-[#CDCDCD]"
              placeholder="Phone Number"
            />
            <input
              type="text"
              className="p-5 border-none outline-none w-full bg-[#CDCDCD]"
              placeholder="Email Address"
            />
            <textarea
              className="p-5 w-full border-none outline-none bg-[#CDCDCD]"
              name=""
              placeholder="Tell us your project (Scope, timeline, budget, etc.)"
              id=""
            ></textarea>
            <button>
              <Image
                src={"/assets/submit_button.svg"}
                height={10}
                width={50}
                alt="Submit"
                className="h-10 w-auto"
              />
            </button>
          </form>
        </div>
        <Image
          src={"/assets/contact_img.jpg"}
          height={550}
          width={550}
          alt="Tresveze"
        />
      </div>
    </div>
  );
}
