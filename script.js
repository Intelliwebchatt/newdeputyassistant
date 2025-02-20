document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.getElementById('submit');
  const clearButton = document.getElementById('clear');
  const questionInput = document.getElementById('question');
  const responseDiv = document.getElementById('response');

  if (submitButton && clearButton && questionInput && responseDiv) {
    submitButton.addEventListener('click', async () => {
      const question = questionInput.value.trim();
      if (!question) {
        alert('Please enter a question.');
        return;
      }
      
      // Show loading text while fetching
      responseDiv.innerText = 'Thinking...';
      
      try {
        const response = await fetch('/.netlify/functions/ask', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ question })
        });

        if (!response.ok) throw new Error('Network error');

        const data = await response.json();
        responseDiv.innerText = data.answer || 'No answer received.';
      } catch (error) {
        responseDiv.innerText = 'Error: ' + error.message;
      }
    });

    clearButton.addEventListener('click', () => {
      questionInput.value = '';
      responseDiv.innerText = '';
    });
  } else {
    console.error('One or more elements not found.');
  }
});
