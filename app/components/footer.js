import Image from "next/image";
import Link from "next/link";
import { Roboto_Mono } from 'next/font/google';

const roboto = Roboto_Mono({ subsets: ['latin'] })

export default function Footer() {

    return (
        <footer className={roboto.className + " flex flex-col sm:flex-row justify-around sm:items-start w-full sm:p-12 pt-14 pb-14 sm:m-0 gap-10 sm:gap-0 items-center text-white bg-[url(/img/blank-bg.jpg)] bg-bottom xl:bg-no-repeat bg-cover border-t-black border-t-[1px] shadow-[black_0px_1px_3px_1px] z-10"}>
            <div className="flex flex-col items-start place-self-center">
                <Image width={200} height={200} alt="logo" src="/img/logo.svg" className="self-start"/>
            </div>
            <div className="flex flex-col items-center gap-4">
                <h2 className="text-2xl font-bold">Join our community</h2>
                <ul className="flex flex-col items-center gap-2">
                    <li><Link className="hover:opacity-80" href="https://www.instagram.com/medixperts/">Instagram</Link></li>
                    <li><Link className="hover:opacity-80" href="https://www.linkedin.com/company/94451531/admin/dashboard/">LinkedIn</Link></li>
                    <li><Link className="hover:opacity-80" href="https://www.facebook.com/profile.php?id=61588774142858">Facebook</Link></li>
                </ul>
            </div>
            <div className="flex flex-col items-center gap-4">
                <h2 className="text-2xl font-bold">Contact</h2>
                <ul className="flex flex-col items-center gap-2">
                    <li><Link className="hover:opacity-80" href="https://api.whatsapp.com/send/?phone=5491127194458&text=Hola,%20te%20hablo%20desde%20el%20sitio%20web%20de%20MediXperts&type=phone_number&app_absent=0">Support</Link></li>
                    <li>Blog</li>
                    <li><Link
                            href="https://drive.google.com/uc?export=download&id=1APFfbOWbMRfEC-pq2vRU4nQO7Q14Uj-h"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80download-btn"
                        >
                            Legal information
                        </Link></li>
                </ul>
            </div>
                    <Link className="fixed top-4/5 left-9/12 lg:left-11/12 z-50 bg-pink-500 invert hover:bg-pink-400 rounded-full w-[80px] h-[80px] flex flex-col items-center justify-center" href="https://api.whatsapp.com/send/?phone=5491127194458&text=Hola,%20te%20hablo%20desde%20el%20sitio%20web%20de%20MediXperts&type=phone_number&app_absent=0"><Image src="/img/whatsapp-brands.svg" width={40} height={40} alt="logo whatsapp"/></Link>
            
        </footer>
    )
}