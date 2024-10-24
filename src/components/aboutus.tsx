import Image from "next/image";

export default function AboutComponent() {
  return (
    <div className="h-screen w-screen">
      <Image
        src={"/assets/about_us.svg"}
        height={50}
        width={100}
        alt="About Us"
        className="w-auto h-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      />

      <Image
        src={"/assets/about_gradient.png"}
        className="h-screen w-screen absolute top-0 left-0 z-[1]"
        height={1080}
        width={1920}
        alt="Gradient"
      />

      <div className="flex h-full w-full items-center justify-evenly">
        <div className="h-[94%] w-[282px] overflow-hidden relative">
          <Image
            src={"/assets/about_bg.png"}
            height={1060}
            width={286}
            alt="About Background Image"
            className="h-[1060px] w-auto object-cover"
          />
          <div className="h-[335px] w-full bg-black absolute top-0 left-0"></div>
        </div>
        <div className="h-[94%] w-[282px] overflow-hidden relative">
          <Image
            src={"/assets/about_bg2.png"}
            height={1060}
            width={286}
            alt="About Background Image"
            className="h-[1060px] w-auto object-cover"
          />
          <div className="h-[306px] w-full bg-black absolute bottom-20 p-5 left-0 flex items-center justify-center uppercase text-sm text-center">
            we deliver innovative digital solutions that empower businesses to
            thrive in today’s rapidly changing landscape
          </div>
        </div>
        <div className="h-[94%] w-[282px] overflow-hidden relative">
          <Image
            src={"/assets/about_bg3.png"}
            height={1060}
            width={286}
            alt="About Background Image"
            className="h-[1060px] w-auto object-cover"
          />
          <div className="h-[320px] w-full bg-black absolute top-40 left-0"></div>
        </div>
        <div className="h-[94%] w-[282px] overflow-hidden relative">
          <Image
            src={"/assets/about_bg4.png"}
            height={1060}
            width={286}
            alt="About Background Image"
            className="h-[1060px] w-auto object-cover"
          />
          <div className="h-[200px] w-full uppercase bg-black absolute flex items-center justify-center text-sm text-center p-5 bottom-0 left-0">
            Our mission is to provide tailored strategies in web development, AI
            solutions, and digital marketing, driving measurable results for our
            clients.
          </div>
        </div>
        <div className="h-[94%] w-[282px] overflow-hidden relative">
          <Image
            src={"/assets/about_bg5.png"}
            height={1060}
            width={286}
            alt="About Background Image"
            className="h-[1060px] w-auto object-cover"
          />
          <div className="h-[220px] w-full bg-black absolute top-48 left-0"></div>
        </div>
      </div>
    </div>
  );
}
