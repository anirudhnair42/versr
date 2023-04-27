import { type FC, useEffect, useState } from "react";
import Modal from "./ui/modal";

const HeroBanner: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey && event.key === "k") {
        setIsOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} />
      <div className="mt-20 md:mx-auto md:mt-40 md:max-w-3xl">
        <div className=" m-10 rounded-2xl bg-gradient-to-b from-white to-transparent p-[1px] shadow-[0_25px_100px_rgba(189,84,198,0.1)]">
          <div className=" flex h-auto flex-col items-center justify-center rounded-2xl bg-neutral-900 p-10 md:max-w-[765px] md:p-20 ">
            <div className="text-3xl font-black text-[#BD54C6] drop-shadow-glow  transition duration-500 delay-75 hover:scale-125 hover:text-blue-600 md:text-5xl">
              Multidimensional
            </div>
            <div className=" mb-5 text-3xl font-black text-white md:text-5xl">
              Communities
            </div>
            <div className="md:text-md text-center font-inter text-sm text-slate-300">
              Collaboration architercture designed from the ground up <br /> for
              the communities of tomorrow.
            </div>
            <div className="mt-10 -mb-5">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="hidden rounded-lg bg-[#BD54C6] py-3 px-4 text-white  transition duration-500 delay-75 hover:scale-125 hover:bg-blue-600 hover:drop-shadow-glowLight md:block "
              >
                Press
                <span className="mx-1 rounded-lg bg-white px-2 py-1 font-inter text-[#BD54C6]">
                  ⌘K
                </span>
                to Request Access
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="mb-8 rounded-lg bg-[#BD54C6] py-3 px-4 text-white  transition duration-500 delay-75 md:hidden "
              >
                Request Access
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
