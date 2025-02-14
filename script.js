document.getElementById('submit').addEventListener('click', async () => {
  const question = document.getElementById('question').value;
  console.log('Question:', question); // Log the question

  if (!question) {
    alert('Please enter a question.');
    return;
  }

  try {
    console.log('Sending request to Netlify function...');
    const response = await fetch('/.netlify/functions/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ question })
    });

    console.log('Request sent. Awaiting response...');
    const data = await response.json();
    console.log('Response received:', data); // Log the response
    document.getElementById('response').innerText = data.answer;
  } catch (error) {
    console.error('Error occurred:', error); // Log any errors
    document.getElementById('response').innerText = 'Error: ' + error.message;
  }
});

document.getElementById('clear').addEventListener('click', () => {
  console.log('Clear button clicked.'); // Log clear button click
  document.getElementById('question').value = '';
  document.getElementById('response').innerText = '';
});
