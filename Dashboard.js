import { useState } from 'react';

export default function Dashboard() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const callAssistant = async (name) => {
    setLoading(true);
    const res = await fetch(`/api/assistants/${name}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();
    setResponse(data.result || data.error);
    setLoading(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>HJ BV Dashboard</h1>
      <textarea
        rows={4}
        placeholder="Typ hier je opdracht..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{ width: '100%' }}
      />
      <div style={{ marginTop: 10 }}>
        {["nova", "lex", "milo", "rosa", "finn", "kai"].map((name) => (
          <button
            key={name}
            onClick={() => callAssistant(name)}
            style={{ marginRight: 10 }}
          >
            Stuur naar {name.charAt(0).toUpperCase() + name.slice(1)}
          </button>
        ))}
      </div>
      <div style={{ marginTop: 20 }}>
        <strong>Antwoord:</strong>
        <pre>{loading ? "Even geduld..." : response}</pre>
      </div>
    </div>
  );
}
