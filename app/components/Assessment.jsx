'use client'

import { useState } from "react";

export default function Assessment() {
    const [assessment, setAssessment] = useState({});
    const scores = {
        excellent: 3,
        good: 2,
        "needs-improvement": 1
    };

    const totalScore = Object.values(assessment).reduce(
        (total, level) => total + scores[level],
        0
    );

    const percentage = Math.round(
        (totalScore / 21) * 100
    );
    let result;

    if (percentage >= 90) {
        result = {
            level: "Excellent",
            message: "Excellent performance. You demonstrated strong interpreting skills across all areas.",
            color: "text-green-500"
        };
    } else if (percentage >= 75) {
        result = {
            level: "Good",
            message: "Good performance. You demonstrated solid interpreting skills, with a few areas that could be improved.",
            color: "text-green-300"
        };
    } else if (percentage >= 60) {
        result = {
            level: "Developing",
            message: "Your performance is developing. Review the areas marked as Needs Improvement and try the activity again.",
            color: "text-yellow-300"
        };
    } else {
        result = {
            level: "Needs Improvement",
            message: "Consider reviewing the lesson material and repeating the practice activity.",
            color: "text-red-400"
        };
    };

    return(
        <div className="flex flex-col gap-4 w-full">

                        <h6 className="text-lg font-semibold text-start">
                            Performance Checklist
                        </h6>

                        <div className="w-full overflow-x-auto rounded-lg border border-gray-300">

                            <table className="w-full min-w-[700px] text-white">

                                <thead>
                                    <tr className="bg-black/20">
                                        <th className="px-4 py-3 text-left">
                                            Criteria
                                        </th>

                                        <th className="px-4 py-3 text-center">
                                            Excellent
                                        </th>

                                        <th className="px-4 py-3 text-center">
                                            Good
                                        </th>

                                        <th className="px-4 py-3 text-center">
                                            Needs Improvement
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>

                                    <tr className="border-t border-gray-300/50">
                                        <td className="px-4 py-3">
                                            Accuracy (meaning preserved)
                                        </td>

                                        <td className="text-center">
                                            <input
                                                type="radio"
                                                name="accuracy"
                                                value="excellent"
                                                onChange={(e)=>setAssessment({...assessment, accuracy: e.target.value})}
                                            />
                                        </td>

                                        <td className="text-center">
                                            <input
                                                type="radio"
                                                name="accuracy"
                                                value="good"
                                                onChange={(e)=>setAssessment({...assessment, accuracy: e.target.value})}
                                            />
                                        </td>

                                        <td className="text-center">
                                            <input
                                                type="radio"
                                                name="accuracy"
                                                value="needs-improvement"
                                                onChange={(e)=>setAssessment({...assessment, accuracy: e.target.value})}
                                            />
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-300/50">
                                        <td className="px-4 py-3">
                                            Completeness (nothing added/omitted)
                                        </td>

                                        <td className="text-center">
                                            <input type="radio" name="completeness" value="excellent" onChange={(e)=>setAssessment({...assessment, completeness: e.target.value})}/>
                                        </td>

                                        <td className="text-center">
                                            <input type="radio" name="completeness" value="good" onChange={(e)=>setAssessment({...assessment, completeness: e.target.value})}/>
                                        </td>

                                        <td className="text-center">
                                            <input type="radio" name="completeness" value="needs-improvement" onChange={(e)=>setAssessment({...assessment, completeness: e.target.value})}/>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-300/50">
                                        <td className="px-4 py-3">
                                            Neutrality / Impartiality
                                        </td>

                                        <td className="text-center">
                                            <input type="radio" name="neutrality" value="excellent" onChange={(e)=>setAssessment({...assessment, neutrality: e.target.value})}/>
                                        </td>

                                        <td className="text-center">
                                            <input type="radio" name="neutrality" value="good" onChange={(e)=>setAssessment({...assessment, neutrality: e.target.value})}/>
                                        </td>

                                        <td className="text-center">
                                            <input type="radio" name="neutrality" value="needs-improvement" onChange={(e)=>setAssessment({...assessment, neutrality: e.target.value})}/>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-300/50">
                                        <td className="px-4 py-3">
                                            Role Boundaries respected
                                        </td>

                                        <td className="text-center">
                                            <input type="radio" name="role-boundaries" value="excellent" onChange={(e)=>setAssessment({...assessment, roleBoundaries: e.target.value})}/>
                                        </td>

                                        <td className="text-center">
                                            <input type="radio" name="role-boundaries" value="good" onChange={(e)=>setAssessment({...assessment, roleBoundaries: e.target.value})}/>
                                        </td>

                                        <td className="text-center">
                                            <input type="radio" name="role-boundaries" value="needs-improvement" onChange={(e)=>setAssessment({...assessment, roleBoundaries: e.target.value})}/>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-300/50">
                                        <td className="px-4 py-3">
                                            Clarity and natural delivery
                                        </td>

                                        <td className="text-center">
                                            <input type="radio" name="clarity" value="excellent" onChange={(e)=>setAssessment({...assessment, clarity: e.target.value})}/>
                                        </td>

                                        <td className="text-center">
                                            <input type="radio" name="clarity" value="good" onChange={(e)=>setAssessment({...assessment, clarity: e.target.value})}/>
                                        </td>

                                        <td className="text-center">
                                            <input type="radio" name="clarity" value="needs-improvement" onChange={(e)=>setAssessment({...assessment, clarity: e.target.value})}/>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-300/50">
                                        <td className="px-4 py-3">
                                            Appropriate interventions / clarifications
                                        </td>

                                        <td className="text-center">
                                            <input type="radio" name="interventions" value="excellent" onChange={(e)=>setAssessment({...assessment, interventions: e.target.value})}/>
                                        </td>

                                        <td className="text-center">
                                            <input type="radio" name="interventions" value="good" onChange={(e)=>setAssessment({...assessment, interventions: e.target.value})}/>
                                        </td>

                                        <td className="text-center">
                                            <input type="radio" name="interventions" value="needs-improvement" onChange={(e)=>setAssessment({...assessment, interventions: e.target.value})}/>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-300/50">
                                        <td className="px-4 py-3">
                                            Professional tone
                                        </td>

                                        <td className="text-center">
                                            <input type="radio" name="professional-tone" value="excellent" onChange={(e)=>setAssessment({...assessment, professionalTone: e.target.value})}/>
                                        </td>

                                        <td className="text-center">
                                            <input type="radio" name="professional-tone" value="good" onChange={(e)=>setAssessment({...assessment, professionalTone: e.target.value})}/>
                                        </td>

                                        <td className="text-center">
                                            <input type="radio" name="professional-tone" value="needs-improvement" onChange={(e)=>setAssessment({...assessment, professionalTone: e.target.value})}/>
                                        </td>
                                    </tr>

                                </tbody>

                            </table>

                        </div>
                        <p>Overall performance: {Object.keys(assessment).length === 7 ? ( <strong className={`${result.color}`}>{result.level}</strong> ) : ("Complete the checklist to see your results!")}</p>

                        <p>
                            Score: {Object.keys(assessment).length === 7 ? ( percentage + "%" ) : ("Complete the checklist to see your results!")}
                        </p>
                        <p>
                            {Object.keys(assessment).length === 7 && result.message}
                        </p>
                    </div>
    )
}