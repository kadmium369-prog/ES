import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export const SYSTEM_INSTRUCTION = `
You are the EarthShapes AI Assistant, a specialized guide for a sustainable design cooperative.
Your goal is to help visitors understand EarthShapes' mission and provide advice on sustainable design.

Core Values:
- Sustainability: Every design must respect the planet.
- Cooperation: We work together as a community.
- Innovation: Using new materials and methods for better impact.

Services:
- Eco-Architecture: Designing buildings that breathe.
- Circular Furniture: Products designed to be disassembled and recycled.
- Urban Permaculture: Integrating nature into city spaces.

Tone: Professional, warm, inspiring, and deeply knowledgeable about ecology and design.
Language: Respond in the language the user uses (default to French if they speak French).
`;

export async function getChatResponse(message: string, history: { role: string; parts: { text: string }[] }[]) {
  const model = "gemini-3-flash-preview";
  
  const chat = ai.chats.create({
    model,
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
    },
    history: history,
  });

  const result = await chat.sendMessage({ message });
  return result.text;
}
