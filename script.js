document.getElementById('submit').addEventListener('click', async () => {
  const question = document.getElementById('question').value;
  if (!question) {
    alert('Please enter a question.');
    return;
  }

  try {
    const response = await fetch('/.netlify/functions/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ question })
    });

    const data = await response.json();
    document.getElementById('response').innerText = data.answer;
  } catch (error) {
    document.getElementById('response').innerText = 'Error: ' + error.message;
  }
});

document.getElementById('clear').addEventListener('click', () => {
  document.getElementById('question').value = '';
  document.getElementById('response').innerText = '';
});
