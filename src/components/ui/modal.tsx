import {
  type Dispatch,
  type SetStateAction,
  type FC,
  useState,
  useEffect,
} from "react";
import { Dialog } from "@headlessui/react";
import { Inter } from "@next/font/google";
import { Poppins } from "@next/font/google";
import { Input } from "./input";
import { Label } from "./label";
import { type ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useMailChimpForm } from "use-mailchimp-form";
import { X } from "lucide-react";

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
  EMAIL: string;
  COMM: string;
  TWIT: string;
  TELE?: string;
};

const Modal: FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  const [registered, setRegistered] = useState(false);

  const postUrl = `https://xyz.us8.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}`;

  const requestSchema: ZodType<RequestData> = z.object({
    EMAIL: z.string().email(),
    COMM: z.string().min(2).max(30),
    TWIT: z.string().startsWith("@"),
    TELE: z.string().startsWith("@").optional(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestData>({
    resolver: zodResolver(requestSchema),
  });

  const {
    loading,
    error,
    success,
    handleSubmit: handleMailChimpSubmit,
  } = useMailChimpForm(postUrl);

  const handleRequest = (data: RequestData) => {
    handleMailChimpSubmit(data);
  };

  useEffect(() => {
    if (success) {
      setRegistered(true);
    }
  }, [success, setRegistered]);

  const loadingSpinner = (
    <div role="status">
      <svg
        aria-hidden="true"
        className="mr-2 h-4 w-4 animate-spin fill-[#BD54C6] text-white"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className={`${inter.className} relative z-50`}
      >
        <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4 ">
          <Dialog.Panel className=" w-full max-w-xl rounded-2xl border-2 border-neutral-600 bg-neutral-900 p-10 text-white ">
            <X
              size={20}
              color="white"
              onClick={() => setIsOpen(false)}
              className="relative float-right -m-6 cursor-pointer transition-opacity duration-300 ease-in-out hover:opacity-80"
            />
            {!!registered && (
              <>
                <Dialog.Title
                  className={`${fontSans.className} mb-4 text-center font-sans text-4xl `}
                >
                  <div className=" text-4xl text-[#BD54C6] drop-shadow-glow ">
                    You are on the waitlist!
                  </div>
                </Dialog.Title>
                <Dialog.Description
                  className={` text-md text-center font-inter text-slate-500`}
                >
                  We will reach out to you as soon as possible and get your
                  community the superpowers it deserves.
                </Dialog.Description>
                <button
                  className={`mt-8 flex w-full items-center justify-center rounded-lg bg-green-500 py-3 pl-2 pr-2  text-white transition duration-500 delay-75 hover:bg-blue-600`}
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
              </>
            )}
            {!registered && (
              <>
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
                  Join the waitlist and our team will reach out to you as soon
                  as possible to get your community set up.
                </Dialog.Description>
                <div className="mt-8 grid w-full items-center gap-1.5 text-slate-500">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="i@am.com"
                    className={clsx(
                      "text-slate-100 ",
                      errors.EMAIL && "border-red-500"
                    )}
                    {...register("EMAIL")}
                  />
                  <p className="text-sm text-red-500">
                    {errors.EMAIL && "Invalid email address"}
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
                        errors.COMM && "border-red-500"
                      )}
                      {...register("COMM")}
                    />
                    <p className="text-sm text-red-500">
                      {errors.COMM && "Enter a valid Name"}
                    </p>
                  </div>

                  <div className="mt-4 grid w-full items-center gap-1.5 text-slate-500">
                    <Label htmlFor="handle">Twitter Handle</Label>
                    <Input
                      type="text"
                      id="Twitter"
                      placeholder="@"
                      className={clsx(
                        "text-slate-100 ",
                        errors.TWIT && "border-red-500"
                      )}
                      {...register("TWIT")}
                    />
                    <p className="text-sm text-red-500">
                      {errors.TWIT && "Enter a valid Twitter handle"}
                    </p>
                  </div>

                  <div className="mt-4 grid w-full items-center gap-1.5 text-slate-500">
                    <Label htmlFor="handle">Telegram Handle</Label>
                    <Input
                      type="text"
                      id="Telegram"
                      placeholder="@"
                      className={clsx(
                        "text-slate-100 ",
                        errors.TELE && "border-red-500"
                      )}
                      {...register("TELE")}
                    />
                    <p className="text-sm text-red-500">
                      {errors.TELE && "Enter a valid Telegram Handle"}
                    </p>
                  </div>

                  <button
                    className={`mt-10 flex w-full items-center justify-center rounded-lg  bg-[#BD54C6] py-3 pl-2 pr-2  text-white transition duration-500 delay-75 hover:bg-blue-600 ${
                      success ? "bg-green-500" : error ? "bg-red-500" : ""
                    } 
                `}
                    type="submit"
                  >
                    {loading
                      ? loadingSpinner
                      : success
                      ? "Registered"
                      : error
                      ? "Try Again"
                      : "Request Access"}
                  </button>
                </form>
              </>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default Modal;
