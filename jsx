import { useState } from "react";

export default function NovaVraag() {
  const [antwoord, setAntwoord] = useState("");
  const [loading, setLoading] = useState(false);

  const stelVraagAanNova = async () => {
    setLoading(true);
    const response = await fetch("/api/nova", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: "Nova, wat is onze volgende groeistrategie?" }),
    });

    const data = await response.json();
    setAntwoord(data.response);
    setLoading(false);
  };

  return (
    <div>
      <button onClick={stelVraagAanNova}>
        Vraag aan Nova
      </button>
      {loading && <p>Nova denkt na...</p>}
      {antwoord && <p><strong>NOVA:</strong> {antwoord}</p>}
    </div>
  );
}
