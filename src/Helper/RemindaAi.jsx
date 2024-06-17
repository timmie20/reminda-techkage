import { GoogleGenerativeAI } from "@google/generative-ai";

// had to use jsx for this component because the ai func uses
// Javascript (require) to use the ai model so i replaced
// require with import which has to have the the jsx extension

export async function generate(ailmentType) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  const parts = [
    {
      text: "You are a Doctor/pharmacist targeting an audience trying to manage their medications. Create tips and suggestions to help them get better considering their ailment. Remind them these are helpful suggestions and should not substitute for Doctors' advice. Keep copy under 8 sentences long.",
    },
    { text: "Ailment: Headache" },
    {
      text: "Aliment copy: seems you're dealing with throbbing headaches or migraines, they could be caused by factors like dehydration, stress, and changes in sleep patterns. Skipping meals or having too much caffeine may also trigger them. For quick relief, try staying hydrated, taking a pain reliever, resting in a dark room, or applying a cool compress. I hope you feel better soon.",
    },
    { text: "Ailment: Food poisoning" },
    {
      text: "Aliment copy: If you have food poisoning, it's important to stay hydrated by drinking clear fluids like water or broth. Avoid solid foods until your symptoms improve. Rest is also crucial, and over-the-counter medications can help with nausea and diarrhea. If your symptoms get worse, please seek medical attention immediately.",
    },
    { text: `Ailment: ${ailmentType}` },
    { text: "Aliment copy: " },
  ];

  const result = await model.generateContent({
    contents: [{ role: "user", parts }],
    generationConfig,
  });
  return result.response.text();
}
