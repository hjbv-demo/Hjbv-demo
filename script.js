function sendPrompt() {
  const input = document.getElementById('prompt').value;
  if (!input.trim()) return;
  const chat = document.getElementById('chat');
  const entry = document.createElement('div');
  entry.innerHTML = `<strong>Jij:</strong> ${input}`;
  chat.appendChild(entry);
  const response = document.createElement('div');
  response.innerHTML = `<em>AI-team overlegt…</em>`;
  chat.appendChild(response);
  document.getElementById('prompt').value = '';
  setTimeout(() => {
    response.innerHTML = `<strong>NOVA:</strong> Op basis van "${input}" stellen wij een winstgevend plan voor.`;
    chat.scrollTop = chat.scrollHeight;
  }, 1000);
}
