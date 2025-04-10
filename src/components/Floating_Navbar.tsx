import { Home } from "lucide-react";
import { Link } from "react-scroll";

export default function Floating_Navbar() {
    return (
        <>
            <div className='z-100 fixed top-[90%] left-[50%] translate-x-[-50%] flex justify-center items-center'>
                <nav className='flex justify-between bg-black/60 text-white p-2 rounded-4xl gap-12 text-center backdrop-blur-md'>
                    <Link to="navbar-section" smooth={true} duration={500} className="transition-all duration-400 ease-in-out hover:cursor-pointer flex justify-center items-center hover:bg-black/30 hover:rounded-[50%] animate w-auto h-auto p-3">
                        <Home className='size-6 text-white' />
                    </Link>
                    <Link to="project-section" smooth={true} duration={500} className="cursor-pointer transition-all duration-400 ease-in-outter flex justify-center items-center hover:bg-black/30 hover:rounded-2xl w-auto h-auto p-3">
                        <span>Projects</span>
                    </Link>
                    <Link to="experience-section" smooth={true} duration={500} className="cursor-pointer transition-all duration-400 ease-in-outter flex justify-center items-center hover:bg-black/30 hover:rounded-2xl w-auto h-auto p-3">
                        <span>Experience</span>
                    </Link>
                    <Link to="testimonials-section" smooth={true} duration={500} className="cursor-pointer transition-all duration-400 ease-in-outter flex justify-center items-center hover:bg-black/30 hover:rounded-2xl w-auto h-auto p-3">
                        <span>Testimonials</span>
                    </Link>
                    <Link to="connect-section" smooth={true} duration={500} className="cursor-pointer transition-all duration-400 ease-in-outter flex justify-center items-center hover:bg-black/30 hover:rounded-2xl w-auto h-auto p-3">
                        <span className='bg-black px-3 py-1 rounded-lg'>Let's Talk</span>
                    </Link>
                </nav>
            </div>
        </>
    )
}