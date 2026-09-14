'use client'

interface ParagraphProps {
  th1: string;
  th2: string;
  th3: string;
  tool1: string;
  tool2: string;
  tool3: string;
  tool4: string;
  tool5: string;
  tool6: string;
  tool7: string;
  tool8: string;
  tool9: string;
  tool10: string;
  cell1: string;
  cell2: string;
  cell3: string;
  cell4: string;
  cell5: string;
  cell6: string;
  cell7: string;
  cell8: string;
  cell9: string;
  cell10: string;
  cell11: string;
  cell12: string;
  cell13: string;
  cell14: string;
  cell15: string;
  cell16: string;
  cell17: string;
  cell18: string;
  cell19: string;
  cell20: string;
}

export default function Paragraph({ th1, th2, th3, tool1, tool2, tool3, tool4, tool5, tool6, tool7, tool8, tool9, tool10, cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9, cell10, cell11, cell12, cell13, cell14, cell15, cell16, cell17, cell18, cell19, cell20 }: ParagraphProps) {
  
  return (
    <table className="self-center w-auto h-full border border-gray-300 select-none text-black bg-white">
        <tbody>
            <tr>
                <th className="font-bold border p-3 text-center bg-blue-500">{th1}</th>
                <th className="font-bold border p-3 text-center bg-amber-400">{th2}</th>
                {th3?(<th className="font-bold border p-3 text-center bg-blue-500">{th3? (th3):(null)}</th>):(null)}
            </tr>
            <tr>
                <td className="border border-black p-1">{tool1?(tool1):(null)}</td>
                <td className="border border-black p-1">{cell1}</td>
                {cell2?(<td className="border border-black p-1">{cell2}</td>):(null)}
            </tr>
            <tr>
                <td className="border border-black p-1">{tool2?(tool2):(null)}</td>
                <td className="border border-black p-1">{cell3?(cell3):(null)}</td>
                {cell4?(<td className="border border-black p-1">{cell4?(cell4):(null)}</td>):(null)}
            </tr>
            <tr>
                <td className="border border-black p-1">{tool3?(tool3):(null)}</td>
                <td className="border border-black p-1">{cell5?(cell5):(null)}</td>
                {cell6?(<td className="border border-black p-1">{cell6?(cell6):(null)}</td>):(null)}
            </tr>
            <tr>
                <td className="border border-black p-1">{tool4?(tool4):(null)}</td>
                <td className="border border-black p-1">{cell7?(cell7):(null)}</td>
                {cell8?(<td className="border border-black p-1">{cell8?(cell8):(null)}</td>):(null)}
            </tr>
            {tool5?(<tr>
                <td className="border border-black p-1">{tool5?(tool5):(null)}</td>
                <td className="border border-black p-1">{cell9?(cell9):(null)}</td>
                {cell10?(<td className="border border-black p-1">{cell10?(cell10):(null)}</td>):(null)}
            </tr>):(null)}
            {tool6?(<tr>
                <td className="border border-black p-1">{tool6?(tool6):(null)}</td>
                <td className="border border-black p-1">{cell11?(cell11):(null)}</td>
                {cell12?(<td className="border border-black p-1">{cell12?(cell12):(null)}</td>):(null)}
            </tr>):(null)}
            {tool7?(<tr>
                <td className="border border-black p-1">{tool7?(tool7):(null)}</td>
                <td className="border border-black p-1">{cell13?(cell13):(null)}</td>
                {cell14?(<td className="border border-black p-1">{cell14?(cell14):(null)}</td>):(null)}
            </tr>):(null)}
            {tool8?(<tr>
                <td className="border border-black p-1">{tool8?(tool8):(null)}</td>
                <td className="border border-black p-1">{cell15?(cell15):(null)}</td>
                {cell16?(<td className="border border-black p-1">{cell16?(cell16):(null)}</td>):(null)}
            </tr>):(null)}
            {tool9?(<tr>
                <td className="border border-black p-1">{tool9?(tool9):(null)}</td>
                <td className="border border-black p-1">{cell17?(cell17):(null)}</td>
                {cell18?(<td className="border border-black p-1">{cell18?(cell18):(null)}</td>):(null)}
            </tr>):(null)}
            {tool10?(<tr>
                <td className="border border-black p-1">{tool10?(tool10):(null)}</td>
                <td className="border border-black p-1">{cell19?(cell19):(null)}</td>
                {cell20?(<td className="border border-black p-1">{cell20?(cell20):(null)}</td>):(null)}
            </tr>):(null)}
        </tbody>
    </table>
  );
}