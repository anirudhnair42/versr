import { signIn, signOut, useSession } from "next-auth/react";
import { FC, useState } from "react";
import Modal from "./ui/modal";

export const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} />
      <div className="flex items-center justify-between gap-4 py-10 px-10 md:py-10 md:px-72">
        <div className="flex flex-row gap-3">
          <img src="/img/logo.png" className="flex h-10 w-10 " />
        </div>
        {/* <div className="flex flex-row gap-10 font-inter">
          <div className="text-sm text-slate-500">Home</div>
          <div className="text-sm text-slate-500">Open Source</div>
          <div className="text-sm text-slate-500">Contributions</div>
          <div className="text-sm text-slate-500">DAOs</div>
          <div className="text-sm text-slate-500">NFTs</div>
        </div> */}
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg bg-slate-800 px-4 py-2 text-sm text-slate-300 hover:bg-slate-700"
          >
            Request Access
          </button>
        </div>
      </div>
    </>
  );
};
