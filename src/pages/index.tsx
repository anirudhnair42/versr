import { type NextPage } from "next";
import Head from "next/head";
// import { signIn, signOut, useSession } from "next-auth/react";

// import { trpc } from "../utils/trpc";
import HeroBanner from "../components/HeroBanner";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  // const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>DCentral</title>
        <meta name="description" content="Hypercharged Discovery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#242629] to-[#15162c]">
        <Navbar />
        <HeroBanner />
        <div className="p-4 text-center font-sans text-4xl text-white">
          Trending Projects
        </div>
        <div>
          <div className="grid grid-cols-3 gap-4"></div>
        </div>
      </main>
    </>
  );
};

export default Home;

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => signOut() : () => signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };
