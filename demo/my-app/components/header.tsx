import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";
import { Image } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
        <Link href="/">
          <div className="flex items-center space-x-4">
            <Image />
            <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Image generator demo
            </h1>
          </div>
        </Link>
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <UserButton afterSignOutUrl="/" />
        </div>
      </nav>
    </>
  );
}
