document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.getElementById('submit');
  const clearButton = document.getElementById('clear');
  const questionInput = document.getElementById('question');
  const responseDiv = document.getElementById('response');

  if (submitButton && clearButton && questionInput && responseDiv) {
    submitButton.addEventListener('click', async () => {
      const question = questionInput.value;
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
        responseDiv.innerText = data.answer;
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
