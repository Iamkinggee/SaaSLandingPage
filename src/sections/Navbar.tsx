import Image from "next/image";
import logoImage from '@/assets/images/logo.svg';
import Button from "@/components/button";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    return(
    <section className="py-4 lg:py-8">
        <div className="container max-w-5xl">
            <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full p-2 px-4 md:pr-2 items-center">
                <div>
                    <Image src={logoImage} alt="layer logo" className="h-9 md:h-auto w-auto "/>   
                </div>

                <div className="lg:flex justify-center items-center hidden">
                    <nav className="flex gap-6 font-medium">
                        {navLinks.map((link) =>(
                            <a href={link.href} key={link.label}>
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>



                <div className="flex justify-end gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" 
                     width="24"
                    height="24"
                    fill="white"                 
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className=" feather feather-menu md:hidden "
                    ><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
                    </svg>

                    <Button variant="secondary" className="hidden md:inline-flex items-center">Login</Button>
                    <Button variant="primary" className="hidden md:inline-flex items-center">Sign Up</Button>


                </div>

            </div>
        </div>
    </section>
    )
}
