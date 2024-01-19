import { PrismaClient } from "@prisma/client";
import { generateImageWithDallE3 } from "@/services/open-ai";

const prisma = new PrismaClient();

async function saveImage(prompt: string, url: string) {
  return await prisma.image.create({
    data: {
      prompt: prompt, // 画像のタイトルとしてプロンプトを使用
      url: url, // 生成された画像のURL
    },
  });
}

export async function POST(req: Request) {
  const { textPrompt } = await req.json();

  if (typeof textPrompt !== "string") {
    return new Response(
      JSON.stringify({ error: "textPrompt must be a string" }),
      { status: 400 }
    );
  }
  try {
    const srcUrl = await generateImageWithDallE3(textPrompt);
    if (typeof srcUrl !== "string") {
      throw new Error("Failed to generate image URL");
    }

    saveImage(textPrompt, srcUrl);

    return new Response(JSON.stringify(srcUrl), { status: 200 });
  } catch (error) {
    console.error("Error saving image:", error);
    return new Response(
      JSON.stringify({ error: "Error generating or saving image" }),
      { status: 500 }
    );
  }
}
