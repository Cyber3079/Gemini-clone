
import { GoogleGenAI } from "@google/genai"

const ai = new GoogleGenAI({
     apiKey: import.meta.env.VITE_API_KEY,
});

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: prompt
  });

  console.log(response.text);
  return response.text;
}

export default main;