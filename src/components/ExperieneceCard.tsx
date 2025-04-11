import { useState } from "react";

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

function ExperienceCard({
  data,
  isDimmed,
  additionalStyles
}: {
  data: typeof experienceData[0];
  isDimmed?: boolean;
  additionalStyles?: string
}) {
  return (
    <div
      className={" bg-cover bg-center h-84 md:h-72 w-[700px] sm:w-[400px] md:w-[450px] rounded-2xl shadow-lg overflow-hidden transition-all duration-300" + " " + (isDimmed ? "opacity-40 scale-90" : "opacity-100 scale-100") + " " + additionalStyles}
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/deljwxfuf/image/upload/v1744293208/dark-tech-background_bepobv.svg)",
      }}
    >
      <div className="flex px-5 py-5">
        <img
          src={data.companyLogo}
          alt={data.companyName}
          className="h-17 w-20 rounded-xl bg-white p-1"
        />
      </div>

      <h1 className="text-2xl sm:text-3xl font-medium text-center text-white drop-shadow-md">
        {data.title}
      </h1>

      <div className="flex justify-between px-5 pt-12 text-white drop-shadow-sm text-sm sm:text-base gap-3 md:gap-0">
        <div>
          <p className="opacity-70 text-xs md:text-base">Company</p>
          <h1 className="text-xs md:text-base">{data.companyName}</h1>
        </div>
        <div>
          <p className="opacity-70 text-xs md:text-base">Tenure</p>
          <h1 className="text-xs md:text-base">{data.tenure}</h1>
        </div>
      </div>
    </div>
  );
}

export default function CardCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBack = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev < experienceData.length - 1 ? prev + 1 : prev
    );
  };

  const prev = currentSlide > 0 ? experienceData[currentSlide - 1] : null;
  const current = experienceData[currentSlide];
  const next =
    currentSlide < experienceData.length - 1
      ? experienceData[currentSlide + 1]
      : null;

  return (
    <div id='experience-section' className="w-full px-4 sm:px-10 py-10">
      <h2 className="text-4xl sm:text-6xl font-bold text-center mb-10">
        Experience
      </h2>

      <div className="relative flex justify-center items-center gap-4 sm:gap-10">
        {/* Previous Card */}
        {prev ? (
          <ExperienceCard data={prev} isDimmed />
        ) : (
          <div className="h-72 w-[300px] sm:w-[400px] md:w-[450px] opacity-0" />
        )}

        {/* Current Card */}
        <ExperienceCard data={current} additionalStyles="z-10" />

        {/* Next Card */}
        {next ? (
          <ExperienceCard data={next} isDimmed />
        ) : (
          <div className="h-72 w-[300px] sm:w-[800px] md:w-[450px] opacity-0" />
        )}

        {/* Nav Buttons */}
        <button
          onClick={handleBack}
          disabled={currentSlide === 0}
          className="absolute left-2 sm:left-4 top-[50%] -translate-y-1/2 bg-white text-black px-3 py-1 rounded-full font-bold border border-gray-400"
        >
          &lt;
        </button>

        <button
          onClick={handleNext}
          disabled={currentSlide === experienceData.length - 1}
          className="absolute right-2 sm:right-4 top-[50%] -translate-y-1/2 bg-white text-black px-3 py-1 rounded-full font-bold border border-gray-400"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
