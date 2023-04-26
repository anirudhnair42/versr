import { type NextPage } from "next";
import Head from "next/head";
import HeroBanner from "../components/HeroBanner";
import { Navbar } from "../components/Navbar";
import { HeroIndex } from "../components/HeroCards/HeroIndex";
import Image from "next/image";
import Modal from "../components/ui/modal";
import { useState } from "react";
import { Mail, Twitter } from "lucide-react";

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} />

      <Head>
        <title>DCentral</title>
        <meta name="description" content="Hypercharged Discovery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-neutral-900 bg-[url('/img/grid.svg')] bg-no-repeat ">
        <Navbar />
        <HeroBanner />
        <div className="mt-40">{/* <HeroIndex /> */}</div>

        <div className="m-10 flex flex-row items-center justify-center gap-4">
          <div className=" -mt-2 flex h-80 w-1/3 flex-row rounded-xl  bg-gradient-to-b from-neutral-500 to-neutral-800 p-[1px] shadow-xl">
            <div className=" h-full w-full overflow-hidden rounded-xl bg-neutral-900 p-10">
              <div className=" font-sans text-4xl font-black text-white">
                Your All-in-One
              </div>
              <div className="flex flex-row">
                <div className="  font-sans text-4xl font-black text-[#BD54C6] drop-shadow-glow  transition duration-500 delay-75 hover:scale-125 hover:text-blue-600 ">
                  DAO
                </div>
                <div className="ml-2 font-sans text-4xl font-black text-white">
                  Hub
                </div>
                <Image
                  src="/img/InfoCards.png"
                  height={1600}
                  width={1000}
                  className="w-max"
                  alt="logos"
                />
              </div>
            </div>
          </div>
          <div className="flex w-1/3 flex-col justify-between gap-2 ">
            <div className=" flex h-40 flex-row rounded-xl  bg-gradient-to-b from-neutral-500 to-neutral-800 p-[1px] shadow-xl">
              <div className=" justify-left flex h-full w-full flex-row items-center rounded-xl bg-neutral-900">
                <div className=" ml-8 font-sans text-2xl font-black text-white">
                  Curate your DAO’s information using our customizable UI to
                  tell your DAOs story
                </div>
              </div>
            </div>
            <div className=" flex h-40 flex-row rounded-xl  bg-gradient-to-b from-neutral-500 to-neutral-800 p-[1px] shadow-xl">
              <div className=" justify-left flex h-full w-full flex-row items-center rounded-xl bg-neutral-900">
                <div className="ml-16 mr-8 text-right font-sans text-2xl font-black text-white">
                  Aggregate, curate and gate your content from different
                  platforms like Twitter & Lens
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="my-20 flex items-center justify-center text-center font-sans text-5xl text-white"
          style={{
            backgroundImage: "url('/img/plugins.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
          }}
        >
          <div className="flex w-3/5 flex-col items-center justify-center  text-center">
            Build a multi-dimensional community with our easy to use
            <div className="mt-4 font-sans text-5xl font-black text-[#BD54C6] drop-shadow-glow  transition duration-500 delay-75 hover:scale-125 hover:text-blue-600 ">
              Plugins
            </div>
            <div className="mt-8 w-4/5 text-center font-inter text-base leading-relaxed text-slate-500">
              Grow your community using our easy to use plugin apps powered by
              our web3 developer ecosystem. Enjoy a wide range of tools that
              enable governance, treasury management, analytics, and much more
            </div>
          </div>
        </div>
        <div className="m-10 flex flex-row items-center justify-center gap-4">
          <div className="flex w-1/3 flex-col justify-between gap-2 ">
            <div className=" flex h-40 flex-row rounded-xl  bg-gradient-to-b from-neutral-500 to-neutral-800 p-[1px] shadow-xl">
              <div className=" justify-left flex h-full w-full flex-row items-center rounded-xl bg-neutral-900">
                <div className=" ml-8 font-sans text-2xl font-black text-white">
                  Find exciting DAOs, opportunities, and events that spark your
                  interest
                </div>
              </div>
            </div>
            <div className=" flex h-40 flex-row rounded-xl  bg-gradient-to-b from-neutral-500 to-neutral-800 p-[1px] shadow-xl">
              <div className=" justify-left flex h-full w-full flex-row items-center rounded-xl bg-neutral-900">
                <div className="ml-16 mr-8 text-right font-sans text-2xl font-black text-white">
                  Receive personalized updates on the DAOs you care most about
                  with our weekly digest
                </div>
              </div>
            </div>
          </div>
          <div className=" -mt-2 flex h-80 w-1/3 flex-row overflow-hidden  rounded-xl bg-gradient-to-b from-neutral-500 to-neutral-800 p-[1px] shadow-xl ">
            <div className=" h-full w-full rounded-xl bg-neutral-900 p-10">
              <div className="flex flex-row">
                <div className="mr-2 font-sans text-4xl font-black text-white">
                  Discover
                </div>
                <div className="  font-sans text-4xl font-black text-[#BD54C6] drop-shadow-glow  transition duration-500 delay-75 hover:scale-125 hover:text-blue-600 ">
                  DAOs
                </div>
              </div>
              <div className=" font-sans text-4xl font-black text-white">
                Join them
              </div>
              <div className=" font-sans text-4xl font-black text-white">
                Stay Up to Date
              </div>
              <Image
                src="/img/DaoCards.png"
                height={500}
                width={1000}
                className="ml-40"
                alt="logos"
              />
            </div>
          </div>
        </div>
        <div className="mb-10 flex items-center justify-center">
          <Image
            src="/img/logos.svg"
            height={438}
            width={1200}
            className=""
            alt="logos"
          />
        </div>
        <div className=" my-10 flex items-center justify-center text-center font-sans text-5xl text-white">
          <div className="text-center">
            Thriving communities built effortlessly <br /> Enabled by the power
            of our open-source architecture
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center">
          <div className="mb-10">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className=" rounded-lg border-2 border-neutral-400 bg-[#BD54C6]  py-3 px-4 text-white transition duration-500 delay-75 hover:scale-125 hover:bg-blue-600 hover:drop-shadow-glowLight "
            >
              Request Access
            </button>
          </div>
        </div>
        <div className="mt-10 flex flex-row items-center justify-center gap-4">
          <Mail
            size={20}
            color="#a3a3a3"
            onClick={() => {
              window.location.href = "mailto:ryan@dcentral.xyz";
            }}
          />
          <Twitter
            size={20}
            color="#a3a3a3"
            onClick={() => {
              window.location.href = "https://twitter.com/daocentral";
            }}
          />
        </div>
        <div className="mt-2 mb-10 text-center text-base leading-relaxed text-slate-500">
          San Francisco, CA
        </div>
      </main>
    </>
  );
};

export default Home;
