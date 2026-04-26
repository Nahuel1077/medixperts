import Nav from "../components/nav";
import Footer from "../components/footer";

export default function ContactUs() {

    return (
        <div>
            <Nav />
            <main className="flex flex-col items-center bg-gray-200 gap-8 p-8 sm:p-40">
                    <h1 className="font-semibold text-5xl md:text-7xl text-center">Contact us</h1>
                    <h6 className="text-center text-xl text-gray-700">Let´s get in touch!</h6>
                <form className="flex flex-col gap-4 mt-10 w-full border-gray-300 border-[1px] bg-white p-8 rounded-md md:w-[400px]">
                        <label htmlFor="name" className="text-lg font-bold">Name</label>
                        <input type="text" placeholder="Name" id="name" name="name" className="border border-gray-300 rounded-md p-2" />
                        <label htmlFor="email" className="text-lg font-bold">Email</label>
                        <input type="email" placeholder="Email" id="email" name="email" className="border border-gray-300 rounded-md p-2" />
                        <label htmlFor="message" className="text-lg font-bold">Message</label>
                        <textarea placeholder="Message" id="message" name="message" className="border border-gray-300 rounded-md p-2" rows="4"></textarea>
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 callToAction2">
                        Submit
                        </button>
                </form>
            </main>
            <Footer/>
        </div>
    )

}