"use client";
import ImageCard from "@/components/ImageCard";
import Header from "@/components/header";
import { DallE3Interface } from "@/components/organisms/DallEV3_interface";
import { useEffect, useState } from "react";

interface ImageData {
  id: string;
  prompt: string;
  url: string;
}

export default function Home() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/images");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setImages(data);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <>
      <Header />
      <h1 className="background-animate font-extrabold text-7xl bg-clip-text bg-gradient-to-r from-red-800 via-orange-500  to-yellow-500 text-transparent text-center p-5 mb-4 leading-none text-gray-900">
        AI image generator
      </h1>
      <DallE3Interface />
      <div className="flex flex-wrap">
        {images.map((image) => (
          <ImageCard prompt={image.prompt} photo={image?.url} key={image.id} />
        ))}
      </div>
    </>
  );
}
