// import { AiFillGithub } from "react-icons/ai";
// import { BsTwitter } from "react-icons/bs";
// import { FaDiscord } from "react-icons/fa";
// import { VscTools } from "react-icons/vsc";
import type { FC } from "react";
import { SearchBar } from "./SearchBar";

const Navbar: FC = () => {
  return (
    <div className="mx-auto my-40">
      <div
        className="w-full rounded-2xl bg-gradient-to-b from-white to-transparent p-[1px]
shadow-[0_25px_100px_rgba(189,84,198,0.1)]"
      >
        <div className="flex h-full w-full grow items-center justify-center rounded-2xl bg-neutral-900">
          <div className="flex h-auto max-w-[765px] flex-col items-center justify-center p-20">
            <div className="  font-sans text-5xl font-black text-[#BD54C6] drop-shadow-glow ">
              Multidimensional
            </div>
            <div className=" mb-5 font-sans text-5xl font-black text-white">
              Communities
            </div>

            <div className=" w-/5 text-md text-center font-inter text-slate-500 	">
              Deep dive into the world of Open Source Projects, Decentralized
              Autonomous Organizations and the next generation of communities.
            </div>
            <div className="mt-10">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
