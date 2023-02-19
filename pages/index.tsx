import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Box from "../components/Box";
import { Canvas } from "@react-three/fiber";

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
        <div className="flex mx-auto h-screen flex-col">
          <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[0, 0, 0]} />
          </Canvas>

          <div className="flex flex-col absolute z-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <p className="text-white text-xl font-light text-center">
              hi, I am Moses
            </p>
            <hr />
            <p className="text-white text-base font-light text-center">
              full-stack engineer | artist
            </p>
          </div>

          <div className="absolute z-100 bottom-0 -translate-x-1/2 left-1/2 w-1/2 mb-48">
            <div className="flex justify-around">
              <p className="text-white text-base font-light underline cursor-pointer">about</p>
              <p className="text-white text-base font-light underline cursor-pointer">projects</p>
              <p className="text-white text-base font-light underline cursor-pointer">contact</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
