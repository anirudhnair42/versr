// import { AiFillGithub } from "react-icons/ai";
// import { BsTwitter } from "react-icons/bs";
// import { FaDiscord } from "react-icons/fa";
// import { VscTools } from "react-icons/vsc";
import type { FC } from "react";
import { SearchBar } from "./SearchBar";

const Navbar: FC = () => {
  return (
    <div className="mx-auto my-40">
      <div className="rounded-2xl bg-transparent shadow-[30px_38px_100px_5px_rgb(0,254,162,0.25)]">
        <div className="w-full rounded-2xl bg-gradient-to-b from-white to-transparent p-[1px] shadow-[-51px_-11px_100px_5px_rgb(193,90,193,0.25)]">
          <div className="back flex h-full w-full items-center justify-center rounded-2xl bg-gray-900">
            <div className="flex h-auto max-w-[765px] flex-col items-center justify-center p-20">
              <div className=" mb-5 font-sans text-5xl font-black text-white">
                Hypercharged Discovery
              </div>
              <div className=" w-/5 text-md text-center font-inter text-slate-500	">
                Deep dive into the world of Open Source Projects, Decentralized
                Autonomous Organizations and the next generation of communities.
              </div>
              <div className="mt-10">
                <SearchBar />
              </div>

              {/* <div className="group mt-10 flex flex-row gap-4">
                <div className="rounded-2xl bg-slate-600 p-4">
                  <VscTools className="h-14 w-14 text-white" />
                </div>
                <div className="rounded-2xl bg-slate-600 p-4">
                  <FaDiscord className="h-14 w-14 text-[#5865F2]" />
                </div>
                <div className="mt- rounded-2xl bg-slate-600 p-5">
                  <BsTwitter className="h-12 w-12 text-[#1DA1F2]" />
                </div>
                <div className="mt- rounded-2xl bg-slate-600 p-5">
                  <img
                    src="/img/opensea.svg"
                    className="h-12 w-12 text-[#2081E2]"
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
