'use client'
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Aside from "../components/aside";
import { supabase } from "@/lib/supabaseClient";

export default function LogIn(){

    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async (e) => {
        e.preventDefault(); // 👈 evita recarga

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        console.log(data, error);

        if (error) {
            alert(error.message);
            return;
        }

        if (data.session) {
            router.push('/dashboard');
        }
    };

    return(
        
        <div className="flex flex-col sm:flex-row items-center gap-8">
                <Aside/>
                <div className="flex flex-col items-center w-full">
                    <form onSubmit={login} className="flex flex-col items-center justify-center gap-6 border-gray-300 border-[1px] bg-white p-8 rounded-md shadow-[black_0px_1px_3px_0px]">
                        <h2 className="text-3xl font-bold">Log In</h2>
                        <label htmlFor="email" className="self-start text-md">Email</label>
                        <input className="w-[300px] h-[40px] border-gray-300 border-[1px] rounded-md p-2" placeholder="Email" type="email" value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="password" className="self-start text-md">Password</label>
                        <input className="w-[300px] h-[40px] border-gray-300 border-[1px] rounded-md p-2" placeholder="Password" type="password" value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                        <button className="callToAction2 button">Log In</button>
                        <p>Don´t have an account? <Link href="/sign-up" className="text-blue-500">Sign Up</Link></p>
                    </form>
                </div>
        </div>
    )
}