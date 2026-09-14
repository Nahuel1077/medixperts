"use client";
import React from "react";

export default function CircularProgress({ progress = 75, size = 120, strokeWidth = 12 }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  // Calcula cuánto del círculo debe llenarse
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg className="w-full h-full transform -rotate-90">
        {/* Círculo de fondo (track) */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e5e7eb" 
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Círculo de progreso animado */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#4f46e5" 
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-500 ease-out"
        />
      </svg>
      {/* Texto central con el porcentaje */}
      <span className="absolute text-2xl font-bold text-gray-700">
        {Math.floor.progress}%
      </span>
    </div>
  );
}
