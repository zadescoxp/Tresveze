import Card from "@/components/card";
import Image from "next/image";

export default function Services() {
  return (
    <div className="">
      <div className="w-full flex items-center justify-center py-32">
        <Image
          className="h-[5rem] w-auto"
          src={"/assets/our_services.svg"}
          height={50}
          width={100}
          alt="Our Services"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <Card
          slno="01"
          heading="Digital Marketing"
          subject="Our strategies enhance brand visibility through social media management and targeted advertising, driving engagement and measurable results."
          subject_heading="Our Digital Marketing services include:"
          image="/assets/services_1.jpg"
          points={`
•⁠  ⁠Social Media Marketing\n•⁠  ⁠Content Marketing\n•⁠  ⁠Pay-Per-Click (PPC) Campaigns\n•⁠  ⁠Email Marketing\n•⁠  ⁠Influencer Marketing\n•⁠  ⁠Analytics & Reporting\n`}
        />
      </div>
    </div>
  );
}
