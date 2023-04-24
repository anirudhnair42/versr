import React, { type Dispatch, type SetStateAction, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Inter } from "@next/font/google";
import { Poppins } from "@next/font/google";
import { Input } from "./input";
import { Label } from "./label";
import { type ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";

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

type RequestData = {
  email: string;
  community: string;
  twitter: string;
};

const Modal: React.FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  const requestSchema: ZodType<RequestData> = z.object({
    email: z.string().email(),
    community: z.string().min(2).max(30),
    twitter: z.string().startsWith("@"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestData>({
    resolver: zodResolver(requestSchema),
  });

  const handleRequest = (data: RequestData) => {
    console.log(data);
  };

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
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="i@am.com"
                className={clsx(
                  "text-slate-100 ",
                  errors.email && "border-red-500"
                )}
                {...register("email")}
              />
              <p className="text-sm text-red-500">
                {errors.email && "Invalid email address"}
              </p>
            </div>
            <form onSubmit={handleSubmit(handleRequest)}>
              <div className="mt-4 grid w-full items-center gap-1.5 text-slate-500">
                <Label htmlFor="community">Community</Label>
                <Input
                  type="text"
                  id="community"
                  placeholder="Developer Dao"
                  className={clsx(
                    "text-slate-100 ",
                    errors.community && "border-red-500"
                  )}
                  {...register("community")}
                />
                <p className="text-sm text-red-500">
                  {errors.community && "Enter a valid Name"}
                </p>
              </div>

              <div className="mt-4 grid w-full items-center gap-1.5 text-slate-500">
                <Label htmlFor="handle">Twitter Handle</Label>
                <Input
                  type="text"
                  id="handle"
                  placeholder="@"
                  className={clsx(
                    "text-slate-100 ",
                    errors.community && "border-red-500"
                  )}
                  {...register("twitter")}
                />
                <p className="text-sm text-red-500">
                  {errors.twitter && "Enter a valid handle"}
                </p>
              </div>

              <button
                className={`mt-10 w-full rounded-lg bg-[#BD54C6] py-3 pl-2 pr-2 text-white transition duration-500 delay-75  hover:bg-blue-600 `}
                type="submit"
              >
                Request Access
              </button>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default Modal;
