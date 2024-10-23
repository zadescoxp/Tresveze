import Image from "next/image";

interface props {
  heading: string;
  subject: string;
  subject_heading: string;
  image: string;
  points: string;
  slno: string;
}

export default function Card({
  heading,
  subject,
  subject_heading,
  image,
  points,
  slno,
}: props) {
  return (
    <div className="flex items-start justify-center gap-x-10">
      <h1 className="font-semibold text-2xl">{slno}</h1>
      <div className="">
        <h1 className="font-semibold text-2xl">{heading}</h1>
        <p>{subject}</p>
        <p>{subject_heading}</p>
        <p>{points}</p>
      </div>
      <Image src={image} height={400} width={400} alt="Image" />
    </div>
  );
}
