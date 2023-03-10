import type { FC } from "react";

export const Navbar: FC = () => {
  return (
    <div className="flex items-center justify-between gap-4 py-10 px-24">
      <div className="flex flex-row gap-3">
        {/* <img src="/img/logo.png" className="flex h-7 w-7 " /> */}
        <div className="font-sans text-2xl font-bold text-white">DCentral</div>
      </div>
      <div className="flex flex-row gap-10 font-inter">
        <div className="text-sm text-slate-500">Home</div>
        <div className="text-sm text-slate-500">Open Source</div>
        <div className="text-sm text-slate-500">Contributions</div>
        <div className="text-sm text-slate-500">DAOs</div>
        <div className="text-sm text-slate-500">NFTs</div>
      </div>
      <div>
        <div className="rounded bg-slate-800 px-4 py-2 text-sm text-slate-300 hover:bg-slate-700">
          Log In
        </div>
      </div>
    </div>
  );
};
