'use client'

interface TitleProps {
  title: string;
  p: string;
  list?: string[];
  dictionary?: {
    element: string;
    explanation: string;
    extra: string;
  }[];
}

export default function Title({ title, p, list, dictionary }: TitleProps) {
  
  return (
    <div className="w-full h-full flex flex-col items-start text-justify select-none gap-1">
      <h1 className="text-lg font-bold">{title}</h1>
      <p>{p}</p>
      {list?.map((item, index) => (
          <h1 className="self-start" key={index}>{item}</h1>
        ))
      }
      {dictionary?.map((item, index) => (
        <p className="self-start" key={index}>
          <strong>{item.element}</strong>: {item.explanation}<br/>
          {item.extra}
        </p>
      ))}
    </div>
  );
}