import { type NextPage } from "next";
import Head from "next/head";
// import { signIn, signOut, useSession } from "next-auth/react";

import { trpc } from "../utils/trpc";
import HeroBanner from "../components/HeroBanner";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  const { data: daos, isLoading } = trpc.daos.getAll.useQuery();
  const top5Daos = daos?.slice(0, 3);

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
