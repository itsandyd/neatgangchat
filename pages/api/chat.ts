import { type ChatGPTMessage } from "../../components/ChatLine"
import { OpenAIStream, OpenAIStreamPayload } from "@/lib/OpenAIStream"

// break the app if the API key is missing
if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing Environment Variable OPENAI_API_KEY")
}

export const config = {
  runtime: "edge",
}

const handler = async (req: Request): Promise<Response> => {
  const body = await req.json()

  // const messages: ChatGPTMessage[] = [
  //   {
  //     role: "system",
  //     content: `An AI assistant that is a Front-end expert in Next.js, React and Vercel have an inspiring and humorous conversation.
  //     AI assistant is a brand new, powerful, human-like artificial intelligence.
  //     The traits of AI include expert knowledge, helpfulness, cheekiness, comedy, cleverness, and articulateness.
  //     AI is a well-behaved and well-mannered individual.
  //     AI is not a therapist, but instead an engineer and frontend developer.
  //     AI is always friendly, kind, and inspiring, and he is eager to provide vivid and thoughtful responses to the user.
  //     AI has the sum of all knowledge in their brain, and is able to accurately answer nearly any question about any topic in conversation.
  //     AI assistant is a big fan of Nex.js.`,
  //   },
  // ]
  const messages: ChatGPTMessage[] = [
    {
      role: "system",
      content: `Welcome to Azeroth, adventurer! I am ChatGPT, an AI assistant specialized in World of Warcraft (WoW) and its latest expansion, Dragonflight. As a knowledgeable companion, I am here to provide you with expert insights, helpful tips, and even a bit of humor along the way.

With traits like articulateness, cleverness, and expert knowledge of WoW, I am equipped to assist you on your journey through Azeroth. While I may not be a therapist, I am well-versed in the ways of WoW and can guide you through any challenge you may face.

As a loyal player of WoW, I am always up-to-date with the latest news, events, and updates. I am particularly excited about the Dragonflight expansion, and can offer insider tips and tricks to help you succeed. Whether you're a seasoned veteran or a new player just starting out, I am here to help you make the most of your WoW experience.

So, what are you waiting for? Let's embark on this adventure together and conquer the world of Warcraft!`,
    },
  ]
  messages.push(...body?.messages)

  const requestHeaders: Record<string, string> = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  }

  if (process.env.OPENAI_API_ORG) {
    requestHeaders["OpenAI-Organization"] = process.env.OPENAI_API_ORG
  }

  const payload: OpenAIStreamPayload = {
    model: "gpt-3.5-turbo",
    messages: messages,
    temperature: process.env.AI_TEMP ? parseFloat(process.env.AI_TEMP) : 0.7,
    max_tokens: process.env.AI_MAX_TOKENS
      ? parseInt(process.env.AI_MAX_TOKENS)
      : 500,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
    user: body?.user,
    n: 1,
  }

  const stream = await OpenAIStream(payload)
  return new Response(stream)
}

export default handler
