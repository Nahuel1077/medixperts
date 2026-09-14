'use client'

import Image from "next/image";
import Footer from "../components/footer";
import Link from "next/link";
import { initMercadoPago, Payment } from "@mercadopago/sdk-react";
import { Wallet } from '@mercadopago/sdk-react';
import { useSearchParams, useRouter } from "next/navigation";
import { Roboto_Mono } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });
const robotoMono = Roboto_Mono({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

// Mercado Pago
initMercadoPago(
    process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY
);

export default function Enroll() {

    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [preferenceId, setPreferenceId] = useState(null);
    const [error,setError] = useState("");
    const [payment, setPayment] = useState(false);
    const searchParams = useSearchParams();
    const router = useRouter();

    const handlePayment = async () => {

        if (!acceptedTerms) {
            return;
        }

        if (!email) {
            alert("Please enter your email");
            return;
        }

        try {

            setLoading(true);

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/payments/create-preference`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.error ||
                    "Could not create payment preference"
                );
            }

            setPreferenceId(data.id);

        } catch (error) {

            console.error("Payment error:", error);

            alert(
                "There was an error connecting to Mercado Pago."
            );

        } finally {

            setLoading(false);

        }
    };

    /* const handleSubmit = async ({ formData }) => {

        try {

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/payments/process-payment`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.error || "Payment failed"
                );
            }

            if (
                response.ok &&
                data.status === "approved"
            ) {
                window.location.href = "/sign-up";
            }

        } catch (error) {

            console.error("Payment error:", error);

            alert(
                "The payment could not be completed."
            );

            throw error;
        }
    }; */

    useEffect(() => {

    const status = searchParams.get("status");
    const paymentId = searchParams.get("payment_id");

        if (status === "approved") {

            console.log("Payment approved:", paymentId);

            router.push(
                `/sign-up?payment_id=${paymentId}`
            );
            setPayment(true);
        }

    }, [searchParams, router]);

    return (
        <section className="flex flex-col items-center w-full gap-2">

            <Image
                src="/img/background.jpeg"
                alt="background"
                width={2000}
                height={2000}
                className="fixed block w-full h-full object-cover -z-10 brightness-50"
            />

            <div className="flex flex-col items-center w-[90%] m-10 md:text-2xl text-center">

                <div
                    className={
                        robotoMono.className +
                        " flex flex-col items-center justify-center content-center border-[1px] border-gray-400 bg-[#ffffffb3] rounded-xl w-full p-10"
                    }
                >

                    <p>
                        We are excited to have you in our platform!
                        <br />
                        Thank you for your interest
                    </p>

                    {/* CONTACT DETAILS */}

                    <div className="w-full flex flex-col items-start py-10 md:px-10">

                        <h6>
                            Submit your contact details:
                        </h6>

                        <Link
                            href="https://docs.google.com/forms/d/e/1FAIpQLSc6_GLJQdXn6nkvxeQTJRKVFeZlaDSNAbtezfGW86pddHS1uA/viewform?fbzx=-158210371062214138"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-500"
                        >
                            Google Forms
                        </Link>

                    </div>

                    {/* TERMS */}

                    <div className="flex flex-col w-full items-start py-10 md:px-10">

                        <p>
                            Please take your time to read our
                        </p>

                        <Link
                            href="https://drive.google.com/uc?export=download&id=1APFfbOWbMRfEC-pq2vRU4nQO7Q14Uj-h"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="download-btn text-blue-400 hover:text-blue-500"
                        >
                            Terms and Conditions
                        </Link>

                        <div className="flex flex-row gap-4 py-10 md:px-10 text-start">

                            <label htmlFor="terms-conditions">
                                I declare that I have read and accept the
                                terms and conditions
                            </label>

                            <input
                                id="terms-conditions"
                                type="checkbox"
                                checked={acceptedTerms}
                                onChange={(e) =>
                                    setAcceptedTerms(e.target.checked)
                                }
                            />

                        </div>

                    </div>

                    {/* PAYMENT */}

                    <div className="flex flex-col w-full items-start md:px-10 py-10">

                        <p className="mb-4">
                            Payment
                        </p>

                        {/* EMAIL + START PAYMENT */}

                        {!preferenceId && (

                            <>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    placeholder="Email"
                                    required
                                    className="border bg-white text-black rounded-md p-2 w-full max-w-md"
                                />

                                <button
                                    type="button"
                                    onClick={handlePayment}
                                    disabled={
                                        !acceptedTerms ||
                                        !email ||
                                        loading
                                    }
                                    className="mt-6 text-blue-400 hover:text-blue-500 disabled:text-gray-400 disabled:cursor-not-allowed"
                                >
                                    {loading
                                        ? "Connecting to Mercado Pago..."
                                        : "Continue with Mercado Pago"}
                                </button>
                            </>

                        )}
                        {preferenceId && (
                        <Wallet
                            initialization={{
                                preferenceId: preferenceId,
                                redirectMode: "blank"
                            }}
                            customization={{
                                texts: {
                                    valueProp: "practicality"
                                }
                            }}
                            onReady={() => {
                                console.log("Wallet Brick ready");
                            }}
                            onError={(error) => {
                                console.error("Wallet Brick error:", error);
                                setError(error);
                            }}
                            onClick={()=>setPayment(true)}
                        />
                        )}  
                    {payment && (<Link href="/sign-up">Sign-up</Link>)}
                    </div>

                    {/* LOGO */}


                </div>

            </div>

            <Footer />

        </section>
    );
}