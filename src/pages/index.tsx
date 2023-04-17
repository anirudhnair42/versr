import { type NextPage } from "next";
import Head from "next/head";
import { Carousel } from "../components/Carousel";
// import { signIn, signOut, useSession } from "next-auth/react";

import { trpc } from "../utils/trpc";
import HeroBanner from "../components/HeroBanner";
import { Navbar } from "../components/Navbar";
import { DCard } from "../components/DCard";

const Home: NextPage = () => {
  const { data: daos, isLoading } = trpc.daos.getAll.useQuery();
  const top5Daos = daos?.slice(0, 5);

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
        <div className="p-4 text-center font-sans text-4xl text-white">
          Trending Projects
        </div>
        <div>
          <div className="mx-16 mb-10 flex items-center justify-center">
            {!!isLoading && <div>Loading...</div>}
            {!isLoading &&
              top5Daos?.map((dao) => {
                return (
                  <DCard
                    key={dao.id}
                    title={dao.name ?? ""}
                    description={dao.description ?? ""}
                    image={dao.imageUrl ?? ""}
                    blurDataURL={dao.imageBlurhash ?? ""}
                  />
                );
              })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
