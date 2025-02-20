"use client";

import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b z-50">
      <div className="container flex h-14 items-center justify-between">
        <div className="mr-4 hidden md:flex">
          <Link
            href="/"
            className="mr-6 flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <span className="hidden font-bold sm:inline-block">
              QR Generator
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/Suraj-kumar00"
            target="_blank"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            <FaGithub className="h-5 w-5" />
          </Link>
          <Link
            href="https://x.com/surajk_umar01"
            target="_blank"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            <FaTwitter className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/surajkumar00/"
            target="_blank"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            <FaLinkedin className="h-5 w-5" />
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
