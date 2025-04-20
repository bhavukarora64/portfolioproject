import { Download, GithubIcon, Linkedin, TwitterIcon } from 'lucide-react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [time, setTime] = useState<string>();
  const [dayMonth, setDayMonth] = useState<string>();
  const [year, setYear] = useState<number>();

  function getTime() {
    const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const dates = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    setDayMonth(`${dates} ${monthName[month]}`);
    setYear(year);
    setTime(`${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`);
  }

  useEffect(() => {
    getTime(); // initial run
    const interval = setInterval(getTime, 1000);
    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <>
      <nav id='navbar-section' className='flex justify-between w-full px-4 md:px-24 pt-16'>
        <div className="relative flex group gap-3 md:mt-2">
          <span className="text-4xl transition-all ease-in-out group-hover:rotate-10 group-hover:scale-110">👋</span>
          <span className="hidden md:text-2xl py-1 transition-all text-yellow-400 font-bold md:flex group-hover:tracking-wide">
            Hello
            <span className="text-yellow-400 text-2xl opacity-0 hidden invisible transition-opacity group-hover:opacity-100 group-hover:flex group-hover:visible font-bold">
              ooooooo
            </span>
            !
          </span>
        </div>
        <div className='flex gap-2 md:gap-8'>
          <div className='flex gap-4 md:gap-8 py-2'>
            <a href="/Curriculum_vitae_Bhavuk.pdf" target="_blank" download="Bhavuk_Arora_CV" className='relative group'>
              <h1 className='absolute top-[110%] left-[-100%] w-100 text-sm group-hover:animate-pulse group-hover:flex hidden'>Download - CV</h1>
              <Download className='size-4 md:size-6 hover:scale-150 hover:text-pink-600 transition-all duration-100 ease-in-out hover:animate-[bounce_1s_infinite]' />
            </a>
            <Link to="https://www.linkedin.com/in/bhavukarora19/"><Linkedin className='size-4 md:size-6 hover:scale-120 hover:text-blue-500 transition-all duration-100 ease-in-out' /></Link>
            <Link to="https://github.com/bhavukarora64"><GithubIcon className='size-4 md:size-6 hover:scale-120 hover:text-black transition-all duration-100 ease-in-out' /></Link>
            <Link to="https://x.com/"><TwitterIcon className='size-4 md:size-6 hover:scale-120 hover:text-blue-400 transition-all duration-100 ease-in-out' /></Link>
          </div>
          <div className='flex gap-2 transition-all duration-500 ease-in-out hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500'>
            <h1 className='text-2xl md:text-4xl font-medium'>{time}</h1>
            <div className='flex flex-col py-1'>
              <h1 className='text-xs font-semibold'>{dayMonth}</h1>
              <h1 className='text-xs font-semibold'>{year}</h1>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
