document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.getElementById('submit');
  const clearButton = document.getElementById('clear');
  const questionInput = document.getElementById('question');
  const responseDiv = document.getElementById('response');

  if (submitButton && clearButton && questionInput && responseDiv) {
    submitButton.addEventListener('click', async () => {
      const question = questionInput.value.trim();
      console.log('Submit button clicked.'); // Log button click
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
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Response received:', data); // Log the response
        responseDiv.innerText = data.answer || 'No answer received.';
      } catch (error) {
        console.error('Error occurred:', error); // Log any errors
        responseDiv.innerText = 'Error: ' + error.message;
      }
    });

    clearButton.addEventListener('click', () => {
      console.log('Clear button clicked.'); // Log clear button click
      questionInput.value = '';
      responseDiv.innerText = '';
    });
  } else {
    console.error('One or more elements not found.'); // Log if elements are missing
  }
});
