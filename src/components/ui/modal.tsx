import React, { type Dispatch, type SetStateAction, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Inter } from "@next/font/google";
import { Poppins } from "@next/font/google";
import { Input } from "./input";
import { Label } from "./label";

export const fontSans = Poppins({
  subsets: ["latin"],
  weight: "600",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

interface ModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className={`${inter.className} relative z-50`}
      >
        <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4 ">
          <Dialog.Panel className="-mt-80 w-full max-w-xl rounded-2xl border-2 border-neutral-600 bg-neutral-900 p-10 text-white ">
            <Dialog.Title
              className={`${fontSans.className} mb-2 text-center font-sans text-4xl `}
            >
              <div className=" text-4xl text-[#BD54C6] drop-shadow-glow ">
                Request Access
              </div>
            </Dialog.Title>
            <Dialog.Description
              className={` text-md text-center font-inter text-slate-500`}
            >
              Join our waitlist and our team will reach out to you as soon as
              possible to get your community set up.
            </Dialog.Description>
            <div className="mt-8 grid w-full items-center gap-1.5 text-slate-500">
              <Label htmlFor="email-2">Email</Label>
              <Input
                type="email"
                id="email-2"
                placeholder="i@am.com"
                className="text-slate-100"
              />
            </div>

            <div className="mt-4 grid w-full items-center gap-1.5">
              <Label htmlFor="email-2">Community</Label>
              <Input type="email" id="email-2" placeholder="Developer Dao" />
            </div>

            <div className="mt-4 grid w-full items-center gap-1.5">
              <Label htmlFor="email-2">Twitter Handle</Label>
              <Input type="email" id="email-2" placeholder="@" />
            </div>

            <button
              className={`mt-10 w-full rounded-lg bg-[#BD54C6] py-3 pl-2 pr-2 text-white transition duration-500 delay-75  hover:bg-blue-600 `}
              onClick={() => setIsOpen(false)}
            >
              Request Access
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default Modal;
