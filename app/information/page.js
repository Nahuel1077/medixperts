'use client'
import Aside from "../components/aside"
import { useState } from "react";

export default function Information() {

    return(
        <div className="flex flex-row">
            <Aside />
            <div className="flex-1 p-4">
                <h1 className="text-2xl font-bold mb-4">Information</h1>
                <p>This is the information page.</p>
            </div>
        </div>
    )
}

