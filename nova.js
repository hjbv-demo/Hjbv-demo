export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { prompt } = req.body;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [{ role: "system", content: "Je bent Nova, de strategisch leider van HJ BV. Help Hendrik zo snel mogelijk rijk te worden." },
                   { role: "user", content: prompt }]
      })
    });

    const data = await response.json();
    const message = data.choices?.[0]?.message?.content || "Geen antwoord";

    res.status(200).json({ result: message });
  } catch (err) {
    res.status(500).json({ error: 'Fout bij Nova' });
  }
}
