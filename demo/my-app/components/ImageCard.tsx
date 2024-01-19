"use client";

import React from "react";
import { Download } from "lucide-react";
import Image from "next/image";

interface ImageCardProps {
  prompt: string;
  photo: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ prompt, photo }) => {
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover m-10 card w-96 h-96">
      <Image
        className="w-full h-auto object-cover rounded-xl"
        src={photo}
        alt={prompt}
        fill
      />
      <div className="group-hover:flex items-center justify-between max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
        <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>
        <a href={photo} download="download.png">
          <Download className="text-white" />
        </a>
      </div>
    </div>
  );
};

export default ImageCard;
