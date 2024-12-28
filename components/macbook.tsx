import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
import Link from "next/link";
import Image from "next/image";

export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden bg-white dark:bg-[#0B0B0F] w-full">
      <MacbookScroll
        badge={
          <Link href="https://x.com/rishabhknows" className="transition-transform hover:scale-110">
            <Badge className="h-10 w-10 transform -rotate-12" />
          </Link>
        }
        src="/macbook.png"
        showGradient={false}
      />
    </div>
  );
}

const Badge = ({ className }: { className?: string }) => {
  return (
    <Image 
      src="/twitter.png" 
      width={40} 
      height={40} 
      className={className} 
      alt="X"
      priority 
    />
  );
};