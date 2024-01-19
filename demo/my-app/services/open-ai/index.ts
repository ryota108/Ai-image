import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateImageWithDallE3 = async (textPrompt: string) => {
  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: textPrompt,
    n: 1,
    size: "1024x1024",
  });
  return response.data[0].url;
};