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
      <main className="">
        <div className="flex flex-col bg-neutral-900 md:min-h-screen md:bg-[url('/img/grid.svg')] md:bg-no-repeat ">
          <Navbar />
          <HeroBanner />
          <div className="mt-40">{/* <HeroIndex /> */}</div>

          <div className="flex flex-col items-center justify-center md:mt-40 md:mb-40 md:flex-row md:gap-6">
            <div className="m-4 flex h-[464px] flex-row rounded-xl bg-gradient-to-b from-neutral-500  to-neutral-800 p-[1px] shadow-xl md:m-0 md:w-1/3">
              <div className=" h-full w-full overflow-hidden rounded-xl bg-neutral-900 p-10">
                <div className=" font-sans text-4xl font-black text-white">
                  Your All-in-One
                </div>
                <div className="flex flex-row">
                  <div className="  font-sans text-4xl font-black text-[#BD54C6] drop-shadow-glow  transition duration-500 delay-75 hover:text-blue-600 md:hover:scale-125 ">
                    DAO
                  </div>
                  <div className="ml-2 font-sans text-4xl font-black text-white">
                    Hub
                  </div>
                  <Image
                    src="/img/InfoCards.png"
                    height={1600}
                    width={1000}
                    className=" mt-20 scale-150"
                    alt="logos"
                  />
                </div>
              </div>
            </div>
            <div className="m-4 flex-col justify-between md:m-0 md:w-1/3 md:gap-6 ">
              <div className=" mb-6 flex h-[220px] flex-row  rounded-xl bg-gradient-to-b from-neutral-500 to-neutral-800 p-[1px] shadow-xl">
                <div className=" flex h-full flex-row items-center overflow-hidden rounded-xl bg-neutral-900">
                  <div className=" ml-8 -mr-20 font-sans text-xl font-black text-white md:text-2xl">
                    Curate your DAO’s information using our customizable UI to
                    tell your DAOs story
                  </div>

                  <div className=" aspect-square h-full pl-20">
                    <Image
                      src="/img/BoxGroup.png"
                      height={200}
                      width={200}
                      className=" h-full"
                      alt="logos"
                    />
                  </div>
                </div>
              </div>
              <div className=" flex h-[220px] flex-row rounded-xl  bg-gradient-to-b from-neutral-500 to-neutral-800 p-[1px] shadow-xl">
                <div className=" justify-left flex h-full flex-row items-center rounded-xl bg-neutral-900">
                  <Image
                    src="/img/MediaStack.png"
                    height={100}
                    width={140}
                    className="float-left ml-4"
                    alt="logos"
                  />
                  <div className="mr-4 text-right font-sans text-xl font-black text-white md:text-2xl">
                    Aggregate, curate and gate your content from different
                    platforms like Twitter & Lens
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: "url('/img/plugins.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
            }}
            className="mb-20 mt-4"
          >
            <div className=" flex items-center justify-center bg-gradient-to-b from-neutral-900 via-transparent to-neutral-900 py-20 text-center font-sans text-white">
              <div className="mx-4 flex flex-col items-center justify-center text-center text-4xl md:w-3/5 md:text-5xl">
                Build a multi-dimensional community with our easy to use
                <div className="mt-4 font-sans text-5xl font-black text-[#BD54C6] drop-shadow-glow  transition duration-500 delay-75 hover:scale-125 hover:text-blue-600 ">
                  Plugins
                </div>
                <div className="mt-8 w-4/5 text-center font-inter text-sm leading-relaxed text-slate-500 md:text-base">
                  Grow your community using our easy to use plugin apps powered
                  by our web3 developer ecosystem. Enjoy a wide range of tools
                  that enable governance, treasury management, analytics, and
                  much more
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center md:m-10 md:flex-row md:gap-6">
            <div className="flex flex-col justify-between md:w-1/3 md:gap-6 ">
              <div className="m-4 flex h-[220px] flex-row rounded-xl bg-gradient-to-b  from-neutral-500 to-neutral-800 p-[1px] shadow-xl md:m-0">
                <div className=" justify-left flex h-full w-full flex-row items-center rounded-xl bg-neutral-900">
                  <div className="ml-8 mr-2 font-sans text-2xl font-black text-white">
                    Find exciting DAOs, opportunities, and events that spark
                    your interest
                  </div>
                  <Image
                    src="/img/FindStack.png"
                    height={90}
                    width={125}
                    className="mr-8 scale-125"
                    alt="logos"
                  />
                </div>
              </div>
              <div className="m-4 flex h-[220px] flex-row rounded-xl bg-gradient-to-b  from-neutral-500 to-neutral-800 p-[1px] shadow-xl md:m-0">
                <div className=" justify-left flex h-full w-full flex-row items-center rounded-xl bg-neutral-900">
                  <Image
                    src="/img/NotifCard.png"
                    height={100}
                    width={100}
                    className="ml-12 scale-125"
                    alt="logos"
                  />
                  <div className="ml-8 mr-8 text-right font-sans text-2xl font-black text-white md:ml-0">
                    Receive personalized updates on the DAOs you care most about
                    with our weekly digest
                  </div>
                </div>
              </div>
            </div>
            <div className="m-4 flex h-[464px] flex-row overflow-hidden rounded-xl  bg-gradient-to-b from-neutral-500 to-neutral-800 p-[1px] shadow-xl md:w-1/3 ">
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
                  className=" mt-40 scale-150 md:ml-40"
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
          <div className=" my-10 flex items-center justify-center text-center font-sans text-4xl text-white md:text-5xl">
            <div className="mx-4 text-center md:mx-0">
              Thriving communities built effortlessly <br /> Enabled by the
              power of our open-source architecture
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
        </div>
      </main>
    </>
  );
};

export default Home;
