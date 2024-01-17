"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";

import Gift from "@/public/gift.svg";

const NavLink = ({
  href,
  target,
  children,
}: {
  href: string;
  target?: string;
  children: ReactNode;
}) => (
  <Button asChild variant="link">
    <Link
      href={href}
      className="text-white font-semibold flex"
      target={target ?? "_self"}
    >
      {children}
    </Link>
  </Button>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Support",
      href: "/support",
      target: "_blank",
    },
    {
      name: "Status",
      href: "/status",
      target: "_blank",
    },
    {
      name: "Documentation",
      href: "/documentation",
      target: "_blank",
    },
  ];

  return (
    <nav className="bg-opacity-70 backdrop-blur-lg bg-transparent border-b fixed inset-x-0 top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link
            href="/"
            className="flex items-center justify-between space-x-2"
          >
            <Image src={Gift} width={30} height={30} alt="Logo" />
            <h1 className="text-white text-2xl font-bold">Giftify</h1>
          </Link>
          <div className="flex items-center md:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-xl"
            >
              {isOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
          <div className="hidden md:flex md:flex-row flex-grow justify-center items-center space-x-2">
            {links.map((link) => (
              <NavLink key={link.href} href={link.href} target={link.target}>
                {link.name}
              </NavLink>
            ))}
          </div>
          <Button asChild className="hidden rounded-xl md:block">
            <Link href="/invite" target="_blank">
              Add To Discord
            </Link>
          </Button>
        </div>
        {/* Mobile View */}
        <div
          className={`${
            isOpen
              ? "flex flex-col justify-center items-center space-y-4"
              : "hidden"
          } md:hidden py-4`}
        >
          {links.map((link) => (
            <NavLink key={link.href} href={link.href} target={link.target}>
              {link.name}
            </NavLink>
          ))}
          <Button asChild className="rounded-xl">
            <Link href="/invite" target="_blank">
              Add To Discord
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
