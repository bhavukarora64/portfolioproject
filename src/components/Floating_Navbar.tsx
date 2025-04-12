import { Home, List } from "lucide-react";
import { useState } from "react";
import { Link } from "react-scroll";


function NavbarSelector(){
    <style>{`
        @keyframes moveup{
            0% {
                transform: translate-y-[-200px]
            }    
            
            100% {
                transform: translate-y-[200px] 
            }
        }
            .moveup {
                animate:
            }
        `}</style>
    return(
        <div className="absolute w-auto h-auto border-1 border-black top-[-315%] left-[90px] flex flex-col text-black bg-white gap-2 text-xl rounded-tl-2xl rounded-br-2xl  rounded-tr-2xl" >
                <Link to="project-section" smooth={true} duration={500} className=" text-sm cursor-pointer transition-all duration-400 ease-in-outter md:flex justify-center items-center hover:bg-black/30 w-auto h-auto p-3">
                    <span>Projects</span>
                </Link>
                <Link to="experience-section" smooth={true} duration={500} className=" text-sm cursor-pointer transition-all duration-400 ease-in-outter md:flex justify-center items-center hover:bg-black/30 w-auto h-auto p-3">
                    <span>Experience</span>
                </Link>
                <Link to="testimonials-section" smooth={true} duration={500} className=" text-sm cursor-pointer transition-all duration-400 ease-in-outter md:flex justify-center items-center hover:bg-black/30 w-auto h-auto p-3">
                    <span>Testimonials</span>
                </Link>
                <Link to="connect-section" smooth={true} duration={500} className=" text-sm cursor-pointer transition-all duration-400 ease-in-outter md:flex justify-center items-center hover:bg-black/30 w-auto h-auto p-3">
                    <span>Connect us</span>
                </Link>

        </div>
    )
}

export default function Floating_Navbar() {
    const [showSelector, setShowSelector] = useState(false);
    return (
        <>
            <div className='z-100 fixed top-[85%] md:top-[80%] lg:top-[85%] xl:top-[90%] left-[50%] translate-x-[-50%] flex justify-center items-center'>
                <nav className='flex justify-between bg-black/60 text-white md:p-2 rounded-4xl md:gap-6 lg:gap-8 xl:gap-12 text-center backdrop-blur-md p-2'>
                    <Link to="navbar-section" smooth={true} duration={500} className="transition-all duration-400 ease-in-out hover:cursor-pointer flex justify-center items-center hover:bg-black/30 hover:rounded-[50%] animate w-auto h-auto p-3">
                        <Home className='size-6 md:size-4 text-white' />
                    </Link>
                    <div className="md:hidden transition-all duration-400 ease-in-out hover:cursor-pointer flex justify-center items-center hover:bg-black/30 hover:rounded-[50%] animate w-auto h-auto p-3">
                        <List className="size-6 md:size-4" onClick={() => {setShowSelector((prevValue) => !prevValue )}}/>
                        {showSelector && <NavbarSelector />}
                        </div>
                    <Link to="project-section" smooth={true} duration={500} className=" hidden text-sm cursor-pointer transition-all duration-400 ease-in-outter md:flex justify-center items-center hover:bg-black/30 hover:rounded-2xl w-auto h-auto p-3">
                        <span>Projects</span>
                    </Link>
                    <Link to="experience-section" smooth={true} duration={500} className="hidden text-sm cursor-pointer transition-all duration-400 ease-in-outter md:flex justify-center items-center hover:bg-black/30 hover:rounded-2xl w-auto h-auto p-3">
                        <span>Experience</span>
                    </Link>
                    <Link to="testimonials-section" smooth={true} duration={500} className="hidden text-sm cursor-pointer transition-all duration-400 ease-in-outter md:flex justify-center items-center hover:bg-black/30 hover:rounded-2xl w-auto h-auto p-3">
                        <span>Testimonials</span>
                    </Link>
                    <Link to="connect-section" smooth={true} duration={500} className="hidden text-sm cursor-pointer transition-all duration-400 ease-in-outter md:flex justify-center items-center md:hover:bg-black/30 hover:rounded-2xl w-auto h-auto p-3">
                        <span className='bg-black px-3 py-1 rounded-lg'>Let's Talk</span>
                    </Link>
                </nav>
            </div>
        </>
    )
}