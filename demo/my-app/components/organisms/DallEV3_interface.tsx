"use client";
import React, { FC, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import {
  TextPromptForm,
  TextPromptFormInputs,
} from "@/components/form/TextPromptForm";

export const DallE3Interface: FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isExecuting, setIsExecuting] = useState<boolean>(false);

  const onSubmit: SubmitHandler<TextPromptFormInputs> = async (data) => {
    try {
      setIsExecuting(true);
      const response = await fetch("/api/open-ai/dall-e-v3", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setImageUrl(result.srcUrl);
    } catch (error) {
      console.error("Fetch error:", error);
      setImageUrl(null);
    } finally {
      setIsExecuting(false);
    }
  };

  return (
    <div>
      <TextPromptForm onSubmit={onSubmit} isExecuting={isExecuting} />
    </div>
  );
};
