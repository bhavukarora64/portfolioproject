import { LucideQuote, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Testimonials(){
    const testimonials = [
    {
        userExperience : "I had the pleasure of managing Bhavuk Arora in his role as a Junior DevOps Engineer. Throughout our time working together, they consistently demonstrated a strong ability to work independently and manage their responsibilities effectively. One of their key strengths was knowing when to seek guidance—they asked clear, concise, and relevant questions only when necessary, which helped maintain focus and momentum on their projects. Bhavuk primarily worked with Azure DevOps and the broader Microsoft ecosystem, including Azure Cloud, to design, implement, and maintain CI/CD pipelines. They showed a solid grasp of the tooling and processes required to build reliable and scalable deployment pipelines, and their contributions directly supported the efficiency and stability of our development workflows. Their proactive attitude, technical skills, and ability to learn quickly made them a valuable member of the team. I’m confident they’ll continue to grow and succeed in any DevOps or cloud-related role they take on next.",
        userName : "Jaan Tasane",
        rating : 5
    },
    {
        userExperience : "I had the opportunity to work with Bhavuk at RIB Software GmbH. Throughout our time working together, Bhavuk consistently showed professionalism, a good work ethic, and a solid grasp of the tools and technologies we used on a daily basis. He has practical experience with PowerShell, YAML, and tools like Azure, Azure DevOps, Jira, and Confluence. I appreciated his ability to collaborate well with me, as well as his balance of work and studies. Overall, I found him to be a reliable colleague, and his technical skills and dedication were evident in his work. I believe he will bring the same level of focus and contribution to any future role.",
        userName : "Jonathan Buffoni",
        rating : 5
    },
    {
        userExperience : "I had the pleasure of working with Bhavuk Arora, and he is an outstanding Cloud Engineer. His deep expertise in cloud solutions, problem-solving skills, and ability to collaborate effectively made a huge impact on our projects. Bhavuk consistently brought innovative ideas and always went the extra mile to ensure success. I highly recommend him for any cloud engineering role.",
        userName : "Biswajit Nanda",
        rating : 5
    },
    {
        userExperience : "I had the pleasure of working with Bhavuk on several projects, including the creation and management of CI/CD pipelines that streamlined our deployment process. His expertise in VM image creation, database management, and migrating legacy systems like SVN and CCNet to modern solutions was invaluable. Bhavuk's technical skills and problem-solving abilities greatly enhanced our operational efficiency.",
        userName : "Hitesh Punjabi",
        rating : 5
    },
    ]

    const slideRef = useRef<HTMLDivElement | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const currentSlideRef = useRef(0);
  
    function goToSlide(index: number) {
      setCurrentSlide(index);
      currentSlideRef.current = index;
    }
  
    function handleSlideNext() {
      const next = (currentSlideRef.current + 1) % testimonials.length;
      goToSlide(next);
    }
  
    function handleSlideBack() {
      const prev =
        (currentSlideRef.current - 1 + testimonials.length) % testimonials.length;
      goToSlide(prev);
    }
  
    function slideXY(e: WheelEvent) {
      e.preventDefault();
      if (e.deltaY > 0 || e.deltaX > 0) {
        handleSlideNext();
      } else if (e.deltaY < 0 || e.deltaX < 0) {
        handleSlideBack();
      }
    }
  
    // Scroll wheel event
    useEffect(() => {
      const carousel = slideRef.current;
      if (carousel) {
        carousel.addEventListener("wheel", slideXY, { passive: false });
      }
      return () => {
        if (carousel) {
          carousel.removeEventListener("wheel", slideXY);
        }
      };
    }, []);
  
    // Auto slide every 1.5s
    useEffect(() => {
      const interval = setInterval(() => {
        handleSlideNext();
      }, 6000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div>
        <div id="testimonials-section" className="h-auto pb-24">
          <div className="text-5xl md:text-7xl font-bold flex justify-center mt-36 mb-16">
            Testimonials
          </div>
          <div className="flex justify-center mb-8">
            <LucideQuote className="size-8 md:size-12" />
          </div>
  
          <div
            ref={slideRef}
            className="text-7xl font-bold flex flex-col justify-center mx-12 md:mx-24 lg:mx-[250px] 2xl:mx-[500px] transition-all duration-500"
          >
            <p className="flex justify-center text-center text-xl md:text-2xl font-light">
              {testimonials[currentSlide].userExperience}
            </p>
            <div className="flex justify-center mt-8">
              <p className="text-sm">{testimonials[currentSlide].userName}</p>
              <p className="text-sm px-2">|</p>
              <div className="flex">
                {Array.from({ length: testimonials[currentSlide].rating }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="size-5 fill-amber-400 text-amber-400"
                    />
                  )
                )}
              </div>
            </div>
          </div>
  
          <div className="flex justify-center mt-8">
            <button
              onClick={handleSlideBack}
              className="px-4 py-2 bg-gray-300 rounded mr-4 cursor-pointer"
            >
              Previous
            </button>
            <button
              onClick={handleSlideNext}
              className="px-4 py-2 bg-gray-300 rounded cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }