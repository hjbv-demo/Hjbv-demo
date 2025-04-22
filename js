// pages/api/nova.js
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  const prompt = req.body.prompt || "Wat is een slimme groeistrategie voor HJ BV?";

  const chat = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: "Je bent Nova, een strategisch AI-brein voor HJ BV. Geef heldere, slimme strategieën." },
      { role: "user", content: prompt },
    ],
  });

  const antwoord = chat.choices[0].message.content;
  res.status(200).json({ response: antwoord });
}
