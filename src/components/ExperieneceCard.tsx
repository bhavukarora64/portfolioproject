import { useState } from "react";

const experienceData = [
  {
    title: 'Junior Engineer',
    companyName: 'RIB Software',
    tenure: 'Nov 2023 - Apr 2025',
    companyLogo: 'https://media.licdn.com/dms/image/v2/C4D0BAQEAcLCsjCUx5w/company-logo_200_200/company-logo_200_200/0/1675178824933/rib_software_logo?e=2147483647&v=beta&t=LNk-owfpw6wefY5ek8sdmB5kfSQsFOEaq01tyvUkhD0',
  },
  {
    title: 'Software Developer',
    companyName: 'HFT Stuttgart',
    tenure: 'Mar 2024 - Sept 2024',
    description: 'Worked on the best viewing experience in town.',
    companyLogo: 'https://www.bioregio-stern.de/sites/default/files/styles/im1440a/public/images/media/2019-03/Logo%20hft.png?itok=lmvHitno',
  },
  {
    title: 'System Engineer',
    companyName: 'First American Pvt. Ltd.',
    tenure: 'Nov 2022 - Feb 2023',
    description: 'Built UIs and interactions.',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/en/3/34/FALogo_FA_Vert-rgb.png',
  },
  {
    title: 'Engineer',
    companyName: 'Larsen & Toubro Infotech',
    tenure: 'Jul 2020 - Jul 2022',
    description: 'Built UIs and interactions.',
    companyLogo: 'https://aniportalimages.s3.amazonaws.com/media/details/Capture2021112405591620211124062031.jpg',
  },
];

const experienceCardsStyle = {
  prevSlide: "-translate-x-[100%] opacity-50 scale-90",
  currentSlide: "scale-110 z-10",
  nextSlide: "translate-x-[100%] opacity-50 scale-90",
  prevSlideEmpty: "-translate-x-[10%] opacity-0 scale-75",
  nextSlideEmpty: "translate-x-[1%] opacity-0 scale-75",
};

function ExperienceCard({ data }: { data: typeof experienceData[0] }) {
  return (
    <div
      className="bg-cover bg-center h-72 w-[450px] rounded-2xl shadow-lg relative overflow-hidden transition-all duration-300"
      style={{ backgroundImage: `url(https://res.cloudinary.com/deljwxfuf/image/upload/v1744293208/dark-tech-background_bepobv.svg)` }}
    >
      <div className="flex px-5 py-5">
        <img
          src={data.companyLogo}
          alt={data.companyName}
          className="h-17 w-20 rounded-xl bg-white p-1"
        />
      </div>

      <h1 className="text-4xl font-medium text-center text-white drop-shadow-md">
        {data.title}
      </h1>

      <div className="flex justify-between px-5 pt-20 text-white drop-shadow-sm">
        <div>
          <p className="text-sm">Company Name</p>
          <h1>{data.companyName}</h1>
        </div>
        <div>
          <p className="text-sm">Tenure</p>
          <h1>{data.tenure}</h1>
        </div>
      </div>
    </div>
  );
}

function EmptyCard({ className }: { className: string }) {
  return (
    <div className={`h-72 w-[450px] rounded-2xl transition-all duration-300 ${className}`}></div>
  );
}

export default function CardCarousel() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const prevSlide = currentSlide - 1;
  const nextSlide = currentSlide + 1;

  function handleBack() {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }

  function handleNext() {
    setCurrentSlide((prev) =>
      prev < experienceData.length - 1 ? prev + 1 : prev
    );
  }

  return (
    <>
      <div id="experience-section" className='col-span-12 text-7xl font-bold flex justify-center my-24'>Experience</div>

      <div className='relative flex justify-center items-center gap-10 pt-10'>
        {prevSlide >= 0 ? (
          <div className={experienceCardsStyle.prevSlide}>
            <ExperienceCard data={experienceData[prevSlide]} />
          </div>
        ) : (
          <EmptyCard className={experienceCardsStyle.prevSlideEmpty} />
        )}

        <div className={experienceCardsStyle.currentSlide}>
          <ExperienceCard data={experienceData[currentSlide]} />
        </div>

        {nextSlide < experienceData.length ? (
          <div className={experienceCardsStyle.nextSlide}>
            <ExperienceCard data={experienceData[nextSlide]} />
          </div>
        ) : (
          <EmptyCard className={experienceCardsStyle.nextSlideEmpty} />
        )}

        <div className="flex justify-center gap-24 pt-24">
        <button
          onClick={handleBack}
          disabled={currentSlide === 0}
          className={`border-4 px-2 rounded-[50%] text-black bg-white font-extrabold absolute top-[50%] left-[2%]`}
        >
          &lt;
        </button>

        <button
          onClick={handleNext}
          disabled={currentSlide === experienceData.length - 1}
          className={`border-4 px-2 rounded-[50%] text-black bg-white font-extrabold absolute top-[50%] left-[96%]`}
        >
          {'>'}
        </button>
      </div>
      </div>
    </>
  );
}
