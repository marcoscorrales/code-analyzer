import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Code anlyzer</title>
        <meta
          name="description"
          content="Analizador de codigo JavaScript con Inteligencia Artificial"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black h-screen w-screen">
        <h1 className="text-3xl text-white font-bold bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 text-transparent bg-clip-text">
          Code analyzer
        </h1>
        <form className="mt-8">
        <label
          for="UserEmail"
          class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 dark:border-gray-700 dark:bg-gray-800"
        >
          <span class="text-xl font-medium text-gray-700 dark:text-gray-200">
            Código
          </span>

          <input
            type="email"
            id="UserEmail"
            placeholder="Escribe aquí tu código"
            class="mt-1 w-full border-none bg-transparent p-0 focus:border-transparent focus:outline-none focus:ring-0 dark:text-white sm:text-sm"
          />
        </label>
        </form>
        
      </main>
    </>
  );
}
