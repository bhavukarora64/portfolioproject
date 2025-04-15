import { Download, GithubIcon, Linkedin, TwitterIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function ConnectUs(){
    return(
        <>
            <div id="connect-section" className=' bg-gray-50 border-t-1 border-gray-200'>
                <h1 className='text-2xl font-light flex justify-center mt-12 mb-8 '>Connect with me on</h1>
                <div className='flex justify-center gap-8 py-2'>
                <h1 className='absolute top-[50px] left-[-30px] w-100 text-sm group-hover:animate-pulse group-hover:flex hidden'>Download - CV</h1>
                <a href="src/assets/CV-Bhavuk-Arora.pdf" target="_blank" download="Bhavuk_Arora_CV" className='relative group'>
                    <h1 className='absolute top-[50px] left-[-30px] w-100 text-sm group-hover:animate-pulse group-hover:flex hidden'>Download - CV</h1>
                    <Download  className='size-8 hover:scale-120 hover:text-pink-600 transition-all duration-100 ease-in-out hover:animate-[bounce_1s_infinite]'/>
                </a>
                    <Link to="https://www.linkedin.com/in/bhavukarora19/"><Linkedin  className='size-8 hover:scale-120   hover:text-blue-500 transition-all duration-100 ease-in-out'/></Link>
                    <Link to="https://github.com/bhavukarora64"><GithubIcon className='size-8 hover:scale-120  hover:text-black transition-all duration-100 ease-in-out'/></Link>
                    <Link to="https://x.com/"><TwitterIcon className='size-8 hover:scale-120 hover:text-blue-400 transition-all duration-100 ease-in-out'/></Link>
                </div>

                <style>
            {`
                @keyframes marquee-text {
                0% {
                    transform: translateX(0%)
                }
                100% {
                    transform: translateX(-100%)
                }
                }

                .marquee-text {
                display: inline-block;
                white-space: nowrap;
                animation: marquee-text 15s linear infinite
                }
            `}
            </style>
            <div className="w-full overflow-hidden whitespace-nowrap mt-12">
                <div className="inline-block font-display text-2xl font-bold tracking-[-0.02em] text-zinc-400 drop-shadow-xs marquee-text">
                <span>Thanks for visiting my portfolio! | </span>
                <span>Thanks for visiting my portfolio! | </span>
                <span>Thanks for visiting my portfolio! | </span>
                <span>Thanks for visiting my portfolio! | </span>
                <span>Thanks for visiting my portfolio! | </span>
                <span>Thanks for visiting my portfolio! | </span>
                </div>
                <div className="inline-block font-display text-2xl font-bold tracking-[-0.02em] text-zinc-400 drop-shadow-xs marquee-text">
                <span>Thanks for visiting my portfolio! | </span>
                <span>Thanks for visiting my portfolio! | </span>
                <span>Thanks for visiting my portfolio! | </span>
                <span>Thanks for visiting my portfolio! | </span>
                <span>Thanks for visiting my portfolio! | </span>
                <span>Thanks for visiting my portfolio! | </span>
                </div>
            </div>

            <div className="w-full overflow-hidden whitespace-nowrap mt-3 pb-32">
                <div className="inline-block font-display text-2xl font-bold tracking-[-0.02em] text-zinc-400 drop-shadow-xs marquee-text">
                <span>Code &amp; Crafted with 💛 by Bhavuk Arora | </span>
                <span>Code &amp; Crafted with 💛 by Bhavuk Arora | </span>
                <span>Code &amp; Crafted with 💛 by Bhavuk Arora | </span>
                <span>Code &amp; Crafted with 💛 by Bhavuk Arora | </span>
                <span>Code &amp; Crafted with 💛 by Bhavuk Arora | </span>
                </div>
                <div className="inline-block font-display text-2xl font-bold tracking-[-0.02em] text-zinc-400 drop-shadow-xs marquee-text">
                <span>Code &amp; Crafted with 💛 by Bhavuk Arora | </span>
                <span>Code &amp; Crafted with 💛 by Bhavuk Arora | </span>
                <span>Code &amp; Crafted with 💛 by Bhavuk Arora | </span>
                <span>Code &amp; Crafted with 💛 by Bhavuk Arora | </span>
                <span>Code &amp; Crafted with 💛 by Bhavuk Arora | </span>
                </div>
            </div>
            </div>
        </>
    )
}