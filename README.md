# Gemini Clone AI Chatbot

A modern AI-powered chatbot inspired by Google Gemini, built using React and the Gemini API. The application provides an interactive chat experience with real-time AI-generated responses, conversation history, and a clean, responsive user interface.

## Features

* AI-powered responses using the Google Gemini API
* Real-time chat interface
* Conversation history sidebar
* Responsive and modern UI
* Context API for global state management
* Typing animation effect for AI responses
* Markdown-style response formatting
* Clean component-based React architecture

## Technologies Used

* React
* JavaScript (ES6+)
* Context API
* CSS3
* Google Gemini API
* Vite

## Getting Started

### Prerequisites

* Node.js (v18 or later recommended)
* npm
* Google Gemini API Key

### Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/gemini-clone.git
```

2. Navigate to the project directory

```bash
cd gemini-clone
```

3. Install dependencies

```bash
npm install
```

4. Create a `.env` file in the project root and add your API key

```env
VITE_GEMINI_API_KEY=your_api_key_here
```

5. Start the development server

```bash
npm run dev
```

6. Open your browser and visit:

```text
http://localhost:5173
```

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── Main/
│   └── Sidebar/
├── context/
│   └── Context.jsx
├── config/
│   └── gemini.js
└── App.jsx
```

## Future Improvements

* Chat persistence using Local Storage or a database
* Multiple chat sessions
* Dark/Light mode toggle
* User authentication
* Streaming AI responses
* Voice input support
* File upload functionality

## Author

Developed by Keitumetse Matlhaela.
