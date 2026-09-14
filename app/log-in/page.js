'use client'

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin'] });

export default function LogIn() {

    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");

    const login = async (e) => {
    e.preventDefault();

    setLoginError("");

    try {

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            }
        );

        const data = await res.json();

        if (!res.ok) {

            if (data.code === 'INVALID_PASSWORD') {
                setLoginError('Contraseña incorrecta');
            } 
            else if (data.code === 'MEMBERSHIP_PENDING') {
                setLoginError('Pendiente de verificación. Contacte a Soporte.');
            } 
            else {
                setLoginError(data.error || 'Error al iniciar sesión');
            }

            return;
        }

        if (data.session) {

            localStorage.setItem(
                'token',
                data.session.access_token
            );

            router.push('/dashboard');

        } else {

            setLoginError('Credenciales inválidas');

        }

    } catch (error) {

        console.error('Login error:', error);

        setLoginError('No se pudo conectar con el servidor');
    }
}
    return (

        <div className="flex flex-col sm:flex-row gap-8 items-stretch h-dvh">

            <div className="flex flex-col items-center justify-center w-full h-dvh">

                <form
                    onSubmit={login}
                    className={
                        montserrat.className +
                        " flex flex-col items-center justify-center gap-6 border-gray-300 border-[1px] bg-white p-8 rounded-md shadow-[black_0px_1px_3px_0px]"
                    }
                >

                    <h2 className="text-3xl font-bold">
                        Log In
                    </h2>

                    <label
                        htmlFor="email"
                        className="self-start text-md"
                    >
                        Email
                    </label>

                    <input
                        className="w-[300px] h-[40px] border-gray-300 border-[1px] rounded-md p-2"
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setLoginError("");
                        }}
                    />

                    <label
                        htmlFor="password"
                        className="self-start text-md"
                    >
                        Password
                    </label>

                    {/* Error de login */}
                    {loginError && (
                        <p className="text-red-500 text-sm self-start -mt-4">
                            {loginError}
                        </p>
                    )}

                    <input
                        className="w-[300px] h-[40px] border-gray-300 border-[1px] rounded-md p-2"
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setLoginError("");
                        }}
                    />

                    <button
                        className="callToAction2 button"
                        type="submit"
                    >
                        Log In
                    </button>

                    <p>
                        Don´t have an account?{" "}
                        <Link
                            href="/sign-up"
                            className="text-blue-500"
                        >
                            Sign Up
                        </Link>
                    </p>

                </form>

            </div>

        </div>
    )
}
