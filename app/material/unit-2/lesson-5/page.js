'use client'
import { Montserrat } from "next/font/google";
import Aside from "../../../components/aside";
import Class from "../../../components/class";
import { useAuth } from "../../../hooks/useAuth";

const montserrat = Montserrat({ subsets: ['latin'] });

const lessonData = {
  id: "unit2-title",
  unitTitle: "Lesson 5: Performance Metrics and KPIs",
  description: null,
  nextLesson: "/material/unit-2/lesson-6",
  prevLesson: "/material/unit-2/lesson-4",
  restart: "/material/unit-2",
  courseNumber: 2,
  currentStep: 6,
  totalSteps: 8,
  lessonNumber: 5
};

const gridData = [
  {
    metric: "Accuracy",
    definition:
      "The linguistic correctness of your interpretation. Measured via QA call monitoring.",
    target:
      "98% - 100% target score. Zero critical omissions or changes allowed.",
  },
  {
    metric: "Fluency",
    definition:
      "Smooth delivery without excessive filler words (um, uh, este), false starts, or long pauses.",
    target:
      "Immediate, natural delivery matching native speech pacing.",
  },
  {
    metric: "Response / Ring Time",
    definition:
      "How long it takes you to click 'Accept' when a call routes to your station.",
    target:
      "Ring Time should typically remain within 3 to 5 seconds.",
  },
  {
    metric: "Professionalism",
    definition:
      "Adherence to scripts, tone of voice, neutral and unbiased behavior, and dress code.",
    target:
      "Demonstrate professionalism at all times by remaining neutral and respectful.",
  },
  {
    metric: "Customer Service",
    definition:
      "The politeness, helpfulness, and overall soft skills displayed to both provider and patient.",
    target:
      "Positive ratings on post-call surveys or internal quality audits.",
  },
  {
    metric: "AHT (Average Handle Time)",
    definition: "The average duration of your calls.",
    target:
      "Used for tracking, not to force you to rush medical interpretation.",
  },
  {
    metric: "Adherence & Occupancy",
    definition:
      "Adherence: Following your schedule. Occupancy: Percentage of shift spent handling calls vs. waiting.",
    target:
      "Adherence target is typically 95%+. Occupancy depends on market demand.",
  },
];

export default function Lesson5() {
  const { user, loading } = useAuth();

  if (loading) {return <div className="flex justify-center items-center h-screen">
    <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  };
  return (
    <div className="flex xl:flex-row flex-col bg-black min-h-screen">
      <Aside />
      <Class lessonData={lessonData}>
        <p className={`${montserrat.className} text-lg p-6`}>Remote interpreting platforms track your activity down to the millisecond. Your employment status, bonuses, and shift choices directly depend on these Key Performance Indicators (KPIs).</p>
        <table className="w-full border border-gray-300">
      <thead>
        <tr className="bg-slate-700 text-white">
          <th className="border p-3 text-left">Metric / KPI</th>
          <th className="border p-3 text-left">Definition</th>
          <th className="border p-3 text-left">Target Expectation</th>
        </tr>
      </thead>

      <tbody>
        {gridData.map((row, rowIndex) => {
    const cells = [row.metric, row.definition, row.target];

    return (
      <tr key={row.metric}>
        {cells.map((cell, colIndex) => (
          <td
            key={colIndex}
            className={`border p-3 ${
              (rowIndex + colIndex) % 2 === 0
                ? "bg-blue-800"
                : "bg-gray-800"
            }`}
          >
            {cell}
              </td>
            ))}
          </tr>
        );
      })}
      </tbody>
    </table>
      </Class>
    </div>
  );
}
