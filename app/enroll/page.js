import { Suspense } from "react";
import Enroll from "./Enroll";

export default function EnrollPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Enroll />
        </Suspense>
    );
}