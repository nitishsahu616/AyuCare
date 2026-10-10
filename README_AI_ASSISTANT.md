# AyuCare AI Assistant — setup

The existing AyuCare pages and voice assistant are retained. A separate floating **Ask AyuCare AI** chat has been added for conversational questions in Hindi or English.

## Run locally
1. Install Node.js 18 or newer (Node 20.19+ is recommended for current tooling).
2. Open a terminal in this folder and run `npm install` (or `npm ci`).
3. Optional, for open-ended AI replies: copy `.env.example` to `.env` and set `OPENAI_API_KEY` to your own API key. Do not share the key or commit `.env` to source control. The server does not load `.env` automatically, so either set environment variables in your terminal/hosting dashboard or install/use a dotenv loader if you choose to configure `.env` locally.
   - PowerShell example for the current terminal: `$env:OPENAI_API_KEY="your_key_here"; $env:OPENAI_MODEL="gpt-4o-mini"`
4. Start the app with `npm start` and open `http://localhost:3000`.

## AI behavior
- With `OPENAI_API_KEY`, the backend calls an OpenAI-compatible Chat Completions endpoint; the key stays on the server.
- Without a key, a bilingual project FAQ fallback answers common AyuCare feature questions. This fallback is not a full generative AI model.
- The assistant is scoped to project help and general health information. It must not be used for diagnosis or personal medicine dosing; emergency guidance says to call 112/108 in India.

## Important existing project limitation
The supplied login, appointment, and contact data stores are in-memory demo stores. They reset when the server restarts and are not a persistent production database. This update does not change those existing systems.
