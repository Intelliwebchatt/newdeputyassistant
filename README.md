# Deputy Assistant

## Overview

Deputy Assistant is a web application that allows users to ask questions and receive answers from OpenAI's GPT-4o model. The application features a sheriff-themed design and is built using modern web technologies.

## Frontend

- **HTML/CSS/JavaScript**: The frontend is styled with a sheriff theme and includes a responsive design.
- **User Interaction**: Users can type their questions and receive answers displayed on the page.

## Netlify Function

- **Serverless Backend**: Handles API requests and securely retrieves the OpenAI API key from environment variables.
- **API Interaction**: Sends user questions to OpenAI's Chat Completions API and returns the response.

## Deployment Instructions

1. **Deploy to Netlify**:
   - Connect your GitHub repository to Netlify.
   - Set environment variables in Netlify settings (e.g., `OPENAI_API_KEY`).

2. **Security Best Practices**:
   - Ensure API keys are never exposed in client-side code.
   - Use server-side processing for all API calls.

## Vector Database Integration

- **Setup Instructions**: Provide code or pseudo-code for connecting to a vector database and processing documents.

## Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Deploy to Netlify following the instructions above.
