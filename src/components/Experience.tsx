import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const experienceData = [
  {
    title: "Junior Engineer",
    companyName: "RIB Software",
    tenure: "Nov 2023 - Apr 2025",
    companyLogo:
      "https://media.licdn.com/dms/image/v2/C4D0BAQEAcLCsjCUx5w/company-logo_200_200/company-logo_200_200/0/1675178824933/rib_software_logo?e=2147483647&v=beta&t=LNk-owfpw6wefY5ek8sdmB5kfSQsFOEaq01tyvUkhD0",
  },
  {
    title: "Software Developer",
    companyName: "HFT Stuttgart",
    tenure: "Mar 2024 - Sept 2024",
    companyLogo:
      "https://www.bioregio-stern.de/sites/default/files/styles/im1440a/public/images/media/2019-03/Logo%20hft.png?itok=lmvHitno",
  },
  {
    title: "System Engineer",
    companyName: "First American Pvt. Ltd.",
    tenure: "Nov 2022 - Feb 2023",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/en/3/34/FALogo_FA_Vert-rgb.png",
  },
  {
    title: "Engineer",
    companyName: "Larsen & Toubro Infotech",
    tenure: "Jul 2020 - Jul 2022",
    companyLogo:
      "https://aniportalimages.s3.amazonaws.com/media/details/Capture2021112405591620211124062031.jpg",
  },
];

const positionStyles = {
    leftCard: "left-[40%] -translate-x-[160%] lg:-translate-x-[170%] xl:-translate-x-[200%] 2xl:-translate-x-[220%] z-10 opacity-90 scale-90",
    centerCard: "left-1/2 -translate-x-1/2 z-20 scale-110 transition-all duration-200 ease-in-out",
    rightCard: "right-[40%] translate-x-[160%] lg:translate-x-[170%] xl:translate-x-[200%] 2xl:translate-x-[220%] z-10 opacity-90 scale-90"
}


export default function Experience() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const nextRef = useRef<number>(1);
    const prevRef = useRef<number>(experienceData.length - 1);
    const currentSlideRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        currentSlideRef.current?.addEventListener("wheel", handleScroll);

        return () => {
            currentSlideRef.current?.removeEventListener("wheel", handleScroll);
        };
    })
    const handleBack = () => {
        const currentValue = currentSlide > 0 ? currentSlide - 1 : experienceData.length - 1
        prevRef.current = currentValue > 0 ? currentValue - 1 : experienceData.length - 1
        nextRef.current = currentValue < experienceData.length-1 ? currentValue + 1 : 0
        setCurrentSlide(currentValue);
      };
    
    const handleNext = () => {
        const currentValue = currentSlide < experienceData.length - 1 ? currentSlide + 1 : 0
        prevRef.current = currentValue > 0 ? currentValue - 1 : experienceData.length - 1
        nextRef.current = currentValue < experienceData.length-1 ? currentValue + 1 : 0
        setCurrentSlide(currentValue);
      };

    const handleScroll = (event: WheelEvent) => {
        if (event.deltaY > 0) {
            handleNext();
        } else {
            handleBack();
        }
    }

    return (
        <>
        <div className="relative w-full overflow-hidden">

        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white/70 via-white/20 to-transparent pointer-events-none z-100" />

        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white/70 via-white/20 to-transparent pointer-events-none z-100" />

        <div className="relative z-10">
            <button className="absolute left-4 top-[80%] transform -translate-y-1/2 z-100">
                <ArrowLeft onClick={handleBack} className="size-12 text-black hover:animate-[ping_0.5s_ease-in-out]"/>
            </button>
            <button className="absolute left-[90%] top-[80%] lg:left-[97%] md:top-[80%] transform -translate-y-1/2 z-100">
                <ArrowRight onClick={handleBack} className="size-12 text-black hover:animate-[ping_0.5s_ease-in-out]"/>
            </button>

        <div ref={currentSlideRef} className="py-72 relative overflow-clip">
                
                <h2 id='experience-section' className="text-4xl sm:text-7xl font-bold text-center mb-20">
                    Experience
                </h2>
                    {/* Previous Slide  */}
                        <div style={{ backgroundImage: "url(https://res.cloudinary.com/deljwxfuf/image/upload/v1744420066/ocean-blue-background_m7prsu.svg)" }} className={"absolute bg-cover bg-center h-[270px] w-[450px] rounded-2xl shadow-lg transition-all duration-300" + " " + positionStyles.leftCard}>
                            <div className="flex px-5 py-5">
                                <img
                                src={experienceData[prevRef.current].companyLogo}
                                alt={experienceData[prevRef.current].companyName}
                                className="h-17 w-20 rounded-xl bg-white p-1"
                                />
                            </div>
    
                            <h1 className="text-2xl sm:text-4xl font-medium text-center text-white drop-shadow-md">
                                {experienceData[prevRef.current].title}
                            </h1>
    
                            <div className="flex justify-between px-5 pt-12 text-white drop-shadow-sm text-sm sm:text-base gap-3 md:gap-0">
                                <div>
                                    <p className="opacity-70 text-xs md:text-base">Company</p>
                                    <h1 className="text-xs md:text-base">{experienceData[prevRef.current].companyName}</h1>
                                </div>
                                <div>
                                    <p className="opacity-70 text-xs md:text-base">Tenure</p>
                                    <h1 className="text-xs md:text-base">{experienceData[prevRef.current].tenure}</h1>
                                </div>
                            </div>
                        </div>
    
                    {/* Current Slide  */}
                        <div style={{ backgroundImage: "url(https://res.cloudinary.com/deljwxfuf/image/upload/v1744420066/ocean-blue-background_m7prsu.svg)" }} className={"absolute bg-cover bg-center h-[180px] w-[300px] sm:h-[200px] sm:w-[350px] lg:h-[270px] lg:w-[450px] rounded-2xl shadow-lg transition-all duration-300" + " " + positionStyles.centerCard}>
                            <div className="flex px-5 py-5">
                                <img
                                src={experienceData[currentSlide].companyLogo}
                                alt={experienceData[currentSlide].companyName}
                                className="h-10 w-12 sm:h-12 sm:w-15 lg:h-17 lg:w-20 rounded-xl bg-white p-1"
                                />
                            </div>
    
                            <h1 className="text-2xl sm:text-2xl lg:text-4xl font-medium text-center text-white drop-shadow-md">
                                {experienceData[currentSlide].title}
                            </h1>
    
                            <div className="flex justify-between px-2 lg:px-5 pt-2 sm:pt-5 lg:pt-12 text-white drop-shadow-sm text-sm sm:text-base gap-3 md:gap-0">
                                <div>
                                    <p className="opacity-70 text-xs lg:text-base">Company</p>
                                    <h1 className="text-xs md:text-base">{experienceData[currentSlide].companyName}</h1>
                                </div>
                                <div>
                                    <p className="opacity-70 text-xs lg:text-base">Tenure</p>
                                    <h1 className="text-xs md:text-base">{experienceData[currentSlide].tenure}</h1>
                                </div>
                            </div>
                        </div>
    
                    {/* Next Slide  */}
                    <div style={{ backgroundImage: "url(https://res.cloudinary.com/deljwxfuf/image/upload/v1744420066/ocean-blue-background_m7prsu.svg)" }} className={"absolute bg-cover bg-center h-[270px] w-[450px] rounded-2xl shadow-lg transition-all duration-300" + " " + positionStyles.rightCard}>
                            <div className="flex px-5 py-5">
                                <img
                                src={experienceData[nextRef.current].companyLogo}
                                alt={experienceData[nextRef.current].companyName}
                                className="h-17 w-20 rounded-xl bg-white p-1"
                                />
                            </div>
    
                            <h1 className="text-2xl sm:text-4xl font-medium text-center text-white drop-shadow-md">
                                {experienceData[nextRef.current].title}
                            </h1>
    
                            <div className="flex justify-between px-5 pt-12 text-white drop-shadow-sm text-sm sm:text-base gap-3 md:gap-0">
                                <div>
                                    <p className="opacity-70 text-xs md:text-base">Company</p>
                                    <h1 className="text-xs md:text-base">{experienceData[nextRef.current].companyName}</h1>
                                </div>
                                <div>
                                    <p className="opacity-70 text-xs md:text-base">Tenure</p>
                                    <h1 className="text-xs md:text-base">{experienceData[nextRef.current].tenure}</h1>
                                </div>
                            </div>
                    </div>
                </div>
        </div>
        </div>
        </>
    )
}