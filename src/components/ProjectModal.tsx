import { useEffect, useState } from "react";
import { PanelBottomClose, ScreenShareIcon } from "lucide-react";

// @ts-expect-error: Props are decided
export default function ProjectModal(props) {
  const [animateClass, setAnimateClass] = useState("slide-out");
  const [show, setShow] = useState(props.visible);

  // Watch visibility prop
  useEffect(() => {
    if (props.visible) {
      setShow(true);            // show modal
      setAnimateClass("slide-out"); // slide up
    } else {
      setAnimateClass("slide-in"); // slide down
      // After animation ends, hide modal
      setTimeout(() => setShow(false), 150); // matches animation duration
    }
  }, [props.visible]);

  return (
    <>
      <style>{`
        @keyframes slide-out {
          0% { transform: translateY(100%); }
          100% { transform: translateY(0%); }
        }
        @keyframes slide-in {
          0% { transform: translateY(0%); }
          100% { transform: translateY(100%); }
        }
        .slide-out {
          animation: slide-out 0.15s ease-in-out forwards;
        }
        .slide-in {
          animation: slide-in 0.15s ease-in-out forwards;
        }
      `}</style>

      {show && (
        <div className="fixed flex justify-center items-end inset-0 bg-black/50 z-100">
          <div className={`w-[90%] sm:w-[60%] md:w-[50%] xl:w-[40%] 2xl:w-[30%] rounded-t-2xl bg-white p-4 ${animateClass}`}>
            {/* Close Button */}
            <div
              className="flex justify-center animate-bounce cursor-pointer"
              onClick={() => props.setVisible(false)}
            >
              <PanelBottomClose size={24} />
            </div>

            {/* Project Info */}
            <div className="grid grid-cols-12 pb-8 pt-6">
              <img
                src={props.projectData.image}
                className="col-span-3 px-4 w-36 h-16"
              />
              <div className="col-span-9">
                <h1 className="text-2xl">{props.projectData.title}</h1>
                <p className="text-md text-blue-600">{props.projectData.url}</p>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="flex gap-2 px-4 mb-4 overflow-x-auto">
            {/* @ts-expect-error: Props are decided */}
              {props.projectData.screenshots.map((element, index) => (
                <img
                  key={index}
                  src={element}
                  className="w-64 h-42 rounded-xl object-cover"
                />
              ))}
            </div>

            {/* Description */}
            <p className="text-sm text-gray-400 px-6 pb-4 whitespace-normal break-words overflow-x-auto">
              {props.projectData.description}
            </p>

            {/* Visit Button */}
            <div className="pt-2 flex justify-center">
              <button
                className="bg-black w-[98%] h-10 text-white rounded-xl text-xl font-light flex items-center justify-center gap-3"
                onClick={() => window.open(props.projectData.url, "_blank")}
              >
                <ScreenShareIcon className="size-5 text-white" />
                Visit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
