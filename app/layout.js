'use client'
import { useState, useEffect } from "react";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";




export default function RootLayout({ children }) {

  return (
    <html
      lang="en">
      <body className="flex flex-col">
        {children}
        
      </body>
    </html>
  );
}
