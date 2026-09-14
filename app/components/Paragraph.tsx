'use client'
import Link from "next/link";

interface ParagraphProps {
  title: string;
  h1: string;
  p: string;
  highlight: string;
  cursive: string;
  link?: string;
  linkTitle?: string;
  grid?: {
    element: string;
    explanation: string;
    extra: string;
    col: number;
  }[];
}

export default function Paragraph({ title, h1, p, highlight, cursive, link, linkTitle, grid}: ParagraphProps) {
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-justify gap-4 select-none">
      <h1 className="text-lg text-blue-400">{title}</h1>
      <p className="italic text-start">{cursive}</p>
      <p className="text-start self-start">{p}</p>
      <p className="font-bold text-yellow-200">{highlight}</p>
      <h1 className="font-bold text-start self-start">{h1}</h1>
      {link?(<Link href={link} className="text-blue-300 hover:text-blue-500 self-start">{linkTitle}</Link>):(null)}
      {grid?.map((item, index) => (
        <div className={`grid gap-2 items-start grid-cols-${item.col} w-full`} key={index}>
          <strong>{item.element}</strong> {item.explanation}<br/>
          {item.extra}
        </div>
      ))}
    </div>
  );
}