
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyKXkKwyiSs4Lt6apHKReg4OMhX0p070hTaA&s",
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
      "https://triec.ca/wp-content/uploads/2018/05/LTI-logo_group_company_png.png",
  },
];

interface ExperienceProps {
  cardPosition: "left" | "right";
  title: string;
  companyName: string;
  tenure: string;
  companyLogo: string;
  year: string;
}

function Experience(props: ExperienceProps) {
  const cardPosition = {
    left: "absolute left-[-16vh] 2xl:left-[-52vh] top-[8vh] rounded-xl border border-gray-200 bg-white w-60 h-auto shadow-lg hover:shadow-xl transition",
    right: "absolute left-[-16vh] 2xl:left-[25vh] top-[8vh] rounded-xl border border-gray-200 bg-white w-65 h-auto shadow-lg hover:shadow-xl transition",
  };

  const arrowPosition = {
    left: "relative w-44 h-[2px] bg-gradient-to-r from-indigo-400 to-purple-400 absolute top-[13vh] left-[-24.5vh] hidden 2xl:block",
    right: "relative w-39 h-[2px] bg-gradient-to-r from-indigo-400 to-purple-400 absolute top-[13vh] left-[7vh] hidden 2xl:block",
  };

  const ciclePosition = {
    left: "w-3 h-3 bg-indigo-600 rounded-full absolute top-[-6px] left-[-5px]",
    right: "w-3 h-3 bg-indigo-600 rounded-full absolute top-[-6px] left-[150px]",
  };

  return (
    <>
      <style>{`
        @keyframes rotateLogo {
          0% {
            transform: rotateX(0deg);
          }
          100% {
            transform: rotateX(360deg);
          }
        }

        @keyframes componentVisible {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .componentVisible {
          animation: componentVisible 2s ease-in forwards;
          animation-timeline: view();
          animation-range: entry 0% cover 50%;
        }

        .rotateLogo {
          animation: rotateLogo 3s linear infinite;
        }
      `}</style>

      <div className="justify-center flex items-center componentVisible">
        <div className="relative w-2 h-70 bg-black z-10">
          <div className={cardPosition[props.cardPosition]}>
            <div className="relative flex justify-center p-4">
              <img
                src={props.companyLogo}
                alt="logo"
                className="w-10 h-10 rounded-full absolute top-[-2vh] left-[14vh] 2xl:left-[10vh] bg-white border border-gray-300 shadow-md rotateLogo"
              />
              <div className="flex flex-col items-center gap-1 mt-6">
                <h3 className="font-semibold text-xl text-gray-800">
                  {props.title}
                </h3>
                <p className="text-md text-gray-600">{props.companyName}</p>
                <p className="text-sm text-gray-500 italic">{props.tenure}</p>
              </div>
            </div>
          </div>
          <div className="absolute top-[10vh] right-[-6vh] bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 border border-indigo-300 shadow rounded-xl w-32 h-16 2xl:flex items-center justify-center hidden">
            <h1 className="text-lg font-medium text-center">{props.year}</h1>
          </div>
          <div className={arrowPosition[props.cardPosition]}>
            <div
              className={ciclePosition[props.cardPosition] + " animate-ping"}
            ></div>
            <div className={ciclePosition[props.cardPosition]}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function ExperienceTestimonial() {
  return (
    <><div className="relative h-full w-full bg-white">
      <div
        id="experience-section"
        className="w-full px-4 sm:px-10 py-10 mt-36 mb-26"
      >
    <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <h2 className="text-4xl sm:text-7xl font-bold text-center mb-10 text-black">
          Experience
        </h2>
      </div>
      {experienceData.map((data, index) => {
        return (
          <Experience
            key={index}
            cardPosition={index % 2 === 0 ? "left" : "right"}
            title={data.title}
            companyName={data.companyName}
            tenure={data.tenure}
            year={data.tenure}
            companyLogo={data.companyLogo}
          />
        );
      })}
      </div>
    </>
  );
}
