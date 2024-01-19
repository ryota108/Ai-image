import ImageCard from "@/components/ImageCard";
import Header from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <>
      <Header />
      <h1 className="background-animate font-extrabold text-7xl bg-clip-text bg-gradient-to-r from-red-800 via-orange-500  to-yellow-500 text-transparent text-center p-5 mb-4 leading-none text-gray-900">
        AI image generator
      </h1>
      <div className="w-3/4 m-auto">
        <Input />
        <Badge className="mt-6">理想的な女性</Badge>
        <Badge className="mt-6">アニメ風の恐竜</Badge>
        <Badge className="mt-6">近未来的なロボット</Badge>
      </div>
      <ImageCard
        prompt="理想的な女性"
        photo="/image/bob.jpeg"
      />
    </>
  );
}
