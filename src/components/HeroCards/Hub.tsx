import { type FC } from "react";
import Image from "next/image";

export const Hub: FC = () => {
  return (
    <div>
      <div className="flex rounded-xl bg-gradient-to-t from-neutral-900 backdrop-blur-xl">
        <div className="fixed left-28 top-24 font-sans text-4xl font-black text-white">
          Your All-in-One
          <br />
          <div className="flex flex-row gap-2">
            <div className=" text-[#BD54C6] drop-shadow-glow"> DAO</div>
            Hub
          </div>
        </div>
        <Image
          src="/img/HubStack.png"
          height={465}
          width={614}
          alt="DCentral Logo"
        />
      </div>
    </div>
  );
};
