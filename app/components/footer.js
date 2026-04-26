import Image from "next/image"

export default function Footer() {

    return (
        <footer className="flex flex-col sm:flex-row justify-around w-full sm:p-12 pt-14 pb-14 sm:m-0 gap-10 sm:gap-0 items-center text-white bg-[#2564EB]">
            <div className="flex flex-col items-start">
                <Image
                width={200}
                height={200}
                alt="logo"
                src="/img/logo-medixperts.svg"
                />
            </div>
            <div className="flex flex-col items-center gap-4">
                <h2 className="text-2xl font-bold">Join our community</h2>
                <ul className="flex flex-col items-center gap-2">
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>Facebook</li>
                </ul>
            </div>
            <div className="flex flex-col items-center gap-4">
                <h2 className="text-2xl font-bold">Contact</h2>
                <ul className="flex flex-col items-center gap-2">
                    <li>Support</li>
                    <li>Blog</li>
                    <li>Legal information</li>
                </ul>
            </div>
            
        </footer>
    )
}