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
              Welcome to Neat Chat: Your Ultimate AI-Powered WoW Companion!
            </span>
          </h1>
          <p className="max-w-[700px] text-lg text-zinc-700 dark:text-zinc-400 sm:text-xl">
            Unleash the power of Azeroths finest AI-driven chatbot, designed
            exclusively to help World of Warcraft players navigate the vast and
            exciting world of Azeroth. Discover hidden secrets, expert
            strategies, and personalized tips tailored to your unique playstyle.
            With Neat Chat, youll never quest alone again!
          </p>
        </div>
        <p className="hidden text-2xl text-zinc-500 dark:text-zinc-400 md:block">
          <kbd className="pointer-events-none inline-flex h-12 select-none items-center gap-1 rounded border border-zinc-100 bg-zinc-800 px-4 font-mono text-[32px] font-medium text-zinc-300 opacity-100 dark:border-zinc-700 dark:bg-zinc-200 dark:text-zinc-900">
            <span className="text-5xl">⌘</span>K
          </kbd>
        </p>
      </section>
      <section>
        <div className="container mx-auto py-6 px-4">
          <h2 className="mb-4 text-2xl font-bold">Why Choose Neat Chat?</h2>
          <ul className="list-none space-y-4">
            <li className="flex items-start">
              <span className="mr-2 text-2xl">🌟</span>
              <div>
                <h3 className="font-semibold">Instant WoW Wisdom:</h3>
                <p>
                  Get real-time answers to your questions about quests,
                  characters, dungeons, raids, crafting, and more. Say goodbye
                  to endless searching – your AI assistant is here to guide you!
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-2xl">🌟</span>
              <div>
                <h3 className="font-semibold">Elite Expertise:</h3>
                <p>
                  Level up your gameplay with cutting-edge strategies,
                  class-specific insights, and valuable recommendations that
                  suit your character and game preferences.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-2xl">🌟</span>
              <div>
                <h3 className="font-semibold">Tailored Tips:</h3>
                <p>
                  Our advanced AI chatbot understands your playstyle, offering
                  personalized advice and guidance to help you achieve your
                  in-game goals and milestones.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-2xl">🌟</span>
              <div>
                <h3 className="font-semibold">Dynamic Updates:</h3>
                <p>
                  Stay ahead of the curve with the latest World of Warcraft
                  news, patch notes, and in-game events. Neat Chat keeps you
                  informed and ready to conquer Azeroth!
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-2xl">🌟</span>
              <div>
                <h3 className="font-semibold">Community Connections:</h3>
                <p>
                  Connect with fellow adventurers, share your experiences, and
                  forge new alliances in our thriving Neat Chat WoW community.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-2xl">🌟</span>
              <div>
                <h3 className="font-semibold">Time-Saving Resource:</h3>
                <p>
                  Maximize your gameplay by quickly finding the information you
                  need. With Neat Chat, you'll spend less time researching and
                  more time enjoying the World of Warcraft!
                </p>
              </div>
            </li>
          </ul>
          <div className="mt-6"></div>
        </div>
      </section>
    </Layout>
  )
}
