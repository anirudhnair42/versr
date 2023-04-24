// import { AiFillGithub } from "react-icons/ai";
// import { BsTwitter } from "react-icons/bs";
// import { FaDiscord } from "react-icons/fa";
// import { VscTools } from "react-icons/vsc";
import { type FC, useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import { BackgroundSVG } from "./ui/grid";
import Modal from "./ui/modal";

const HeroBanner: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey && event.key === "k") {
        // Open your specific modal here
        setIsOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} />
      <BackgroundSVG />
      <div className={`z-10 mx-auto mt-40  max-w-4xl`}>
        <div
          className=" rounded-2xl bg-gradient-to-b from-white to-transparent p-[1px]
shadow-[0_25px_100px_rgba(189,84,198,0.1)]"
        >
          <div className="flex h-full w-full grow items-center justify-center rounded-2xl bg-neutral-900">
            <div className="flex h-auto max-w-[765px] flex-col items-center justify-center p-20">
              <div className="  font-sans text-5xl font-black text-[#BD54C6] drop-shadow-glow  transition duration-500 delay-75 hover:scale-125 hover:text-blue-600">
                Multidimensional
              </div>
              <div className=" mb-5 font-sans text-5xl font-black text-white">
                Communities
              </div>

              <div className="text-md text-center font-inter text-slate-500">
                Deep dive into the world of Open Source Projects, Decentralized
                Autonomous Organizations and the next generation of communities.
              </div>
              <div className="mt-10 -mb-5">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className=" rounded-lg bg-[#BD54C6] py-3 pl-2 pr-2 text-white transition duration-500 delay-75 hover:scale-125 hover:bg-blue-600 hover:drop-shadow-glowLight"
                >
                  <span className="mr-2 rounded-lg bg-white px-2 py-1 text-[#BD54C6] ">
                    ⌘ K
                  </span>
                  to Request Access
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
