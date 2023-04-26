import { type FC } from "react";
import { Hub } from "./Hub";
import Image from "next/image";
import { Curate } from "./Curate";

export const HeroIndex: FC = () => {
  return (
    <div className="flex items-center justify-center bg-neutral-900 text-white">
      <div className="grid grid-flow-row grid-cols-2">
        <div className="-my-16 bg-neutral-900 ">
          <Hub />
        </div>
        <div className="bg-neutral-900">
          <div className="-m-16 -mb-24 flex rounded-xl bg-gradient-to-t from-neutral-900 backdrop-blur-xl">
            <div className="fixed top-[84px] left-28 w-[364px] font-sans text-2xl font-black text-white">
              Curate your DAO’s information using our customizable UI to tell
              your DAOs story
            </div>
            <Image
              src="/img/Curate.png"
              height={209}
              width={614}
              alt="DCentral Logo"
            />
          </div>
          <div className="-m-16 -mt-24 flex rounded-xl bg-gradient-to-t from-neutral-900 backdrop-blur-xl">
            <Image
              src="/img/Curate.png"
              height={209}
              width={614}
              alt="DCentral Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
