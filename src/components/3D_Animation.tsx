import { useEffect, useRef, useState } from "react";
import wolf from "../assets/wolf-head.svg";
import squid from "../assets/giant-squid.svg"
import star from "../assets/heptagram.svg"
import sun from "../assets/sun-spear.svg"
import rose from "../assets/rose.svg"
import lion from "../assets/lion.svg"

export default function Test3danimation() {
  const letters = ["B", "H", "A", "V", "U", "K"];
  const lettersStyle = [
    "hover:text-blue-700 ",
    "hover:text-purple-600 ",
    "hover:text-green-500",
    "hover:text-red-700",
    "hover:text-yellow-500",
    "hover:text-pink-400",
  ];
  const icons = [wolf, star, sun, rose, lion, squid]
  const lastName = ["ARORA", "अरोड़ा", "阿罗拉", "ਅਰੋੜਾ", "ARORA"];
  const containerRef = useRef<HTMLDivElement>(null);
  const [lastname, setLastName] = useState<string>("ARORA");
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      container.style.transform = `
        perspective(200px) 
        rotateX(${y * 15}deg) 
        rotateY(${x * -15}deg) 
        scale3d(1.10, 1.10, 1.10)
      `;
    };

    const handleMouseLeave = () => {
      container.style.transform = `
        perspective(1000px) 
        rotateX(0deg) 
        rotateY(0deg) 
        scale3d(1.05, 1.05, 1.05)
      `;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * lastName.length);
        setLastName(lastName[randomIndex]);
        setIsVisible(true);
      }, 500);
    }, 2000);

    return () => {
      clearInterval(interval);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes spinBounce {
          0% {
            transform: rotate(0deg) translateY(0);
          }
          50% {
            transform: rotateY(360deg) translateY(-10px);
          }
          70% {
            transform: rotateY(360deg) translateY(0);
          }
          85% {
            transform: rotateY(360deg) translateY(-5px);
          }
          100% {
            transform: rotateY(360deg) translateY(0);
          }
        }

        .spin-bounce {
          animation: spinBounce 2s ease-in-out infinite;
        }
      `}</style>

      <div className="flex flex-col justify-center items-center text-center my-64">
        <div
          ref={containerRef}
          className="font-bold text-9xl transition-all duration-500 ease-out hover:tracking-widest"
        >
          {letters.map((letter, index) => (
            <span key={index} className={lettersStyle[index] + " " + "relative group"}>
            <img
              src={icons[index]}
              alt="wolf"
              className="w-8 h-8 rounded-full spin-bounce mt-8 absolute top-[-60px] left-[20px] opacity-0 group-hover:opacity-100"
            />
              {letter}
            </span>
          ))}
          <div className="py-4"></div>
          <span
            className={`transition-opacity duration-1000 ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {lastname}
          </span>
        </div>
      </div>
    </>
  );
}
