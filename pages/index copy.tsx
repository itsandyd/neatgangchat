import React from "react"
import Head from "next/head"
import Image from "next/image"
import { Icons } from "@/components/icons"
import { Layout } from "@/components/layout"

export default function IndexPage() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && e.metaKey) {
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <Layout>
      <Head>
        <title>Neat Chat</title>
        <meta
          name="description"
          content="Get World of Warcraft information and tips from Neat Chat, the AI-powered chatbot."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          {/* <Image
            // className=" rotate-[36deg] hover:rotate-180"
            height={250}
            width={250}
            src="/neat.svg"
            alt="logo"
          /> */}
          <h1 className="text-2xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            <br className="inline" />
            <span className="text-xl md:text-5xl lg:text-6xl">
              Get World of Warcraft information and tips from an AI-powered
              chatbot.
            </span>
          </h1>
          <p className="max-w-[700px] text-lg text-zinc-700 dark:text-zinc-400 sm:text-xl">
            Neat Chat is your go-to source for information about World of
            Warcraft. Ask it anything and get instant answers!
          </p>
        </div>
        <p className="hidden text-2xl text-zinc-500 dark:text-zinc-400 md:block">
          <kbd className="pointer-events-none inline-flex h-12 select-none items-center gap-1 rounded border border-zinc-100 bg-zinc-800 px-4 font-mono text-[32px] font-medium text-zinc-300 opacity-100 dark:border-zinc-700 dark:bg-zinc-200 dark:text-zinc-900">
            <span className="text-5xl">⌘</span>K
          </kbd>
        </p>
      </section>
    </Layout>
  )
}
