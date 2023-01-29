import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>I am Moses</title>
        <meta name="description" content="Moses's Personal Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container mx-auto">

          <p className="text-white text-xl font-medium text-center"> Hi, I am Moses</p>

          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
         
              <p className="text-white text-base font-normal text-center"> I am a Software Engineer</p>
              </div>
              </div>
        </div>
      </main>
    </>
  );
}
