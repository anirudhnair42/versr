import { type NextPage } from "next";
import Head from "next/head";
import HeroBanner from "../components/HeroBanner";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  // Get All Guilds basic information

  return (
    <>
      <Head>
        <title>DCentral</title>
        <meta name="description" content="Hypercharged Discovery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-neutral-900">
        <Navbar />
        <HeroBanner />

        <div>
          <div className="mx-16 mb-10 flex items-start justify-center gap-5"></div>
        </div>
      </main>
    </>
  );
};

export default Home;
