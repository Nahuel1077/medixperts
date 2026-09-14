'use client'
import Image from "next/image";
import Link from "next/link";

interface PresentationProps {
  title?: string;
  description?: string;
  list?: string[];
  image?: string;
  p?: string;
  link?: string;
  linkTitle?: string;
}

export default function Presentation({ title, description, list, image, p, link, linkTitle }: PresentationProps) {
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-justify gap-4 pt-6 pb-6 select-none">
      <h1 className="text-lg text-amber-500 underline decoration-amber-500">{title}</h1>
      <p>{description}</p>
      {p?(<p>{p}</p>):(null)}
      {list?.map((item, index) => (
          <h1 className="font-bold self-start" key={index}>{item}</h1>
        ))
      }
      {link?(<Link href={link} className="text-blue-300 hover:text-blue-500 self-start">{linkTitle}</Link>):(null)}
      {image? (<Image src={image} alt={image} width={400} height={400}/>) : (null)}
    </div>
  );
}