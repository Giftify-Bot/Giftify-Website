import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/logo-with-text.png";
import { Button } from "@/components/ui/button";

import { Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <>
      <hr className="w-full" />
      <footer className="py-10 px-36 flex items-center justify-between h-[20rem]">
        <div className="flex flex-col items-center justify-between h-full">
          <Image src={Logo} alt="Giftify Logo" className="w-auto h-10" />
          <div className="flex flex-col items-start justify-center gap-1 text-zinc-400 text-sm">
            <div>&copy; 2023 Giftify, Inc.</div>
            <div className="flex items-center justify-center w-full">
              <Link href="/github" target="_blank">
                <Github className="h-4 w-4" />
              </Link>
              <hr className="w-4 rotate-90" />
              <Link href="/twitter" target="_blank">
                <Twitter className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-center">More</h3>
            <Button asChild variant="link">
              <Link href="/invite" target="_blank" className="text-zinc-600 font-normal ">
                Invite
              </Link>
            </Button>
            <Button asChild variant="link">
              <Link href="/status" target="_blank" className="text-zinc-600 font-normal ">
                Status
              </Link>
            </Button>
            <Button asChild variant="link">
              <Link href="/documentation" target="_blank" className="text-zinc-600 font-normal ">
                Documentation
              </Link>
            </Button>
            <Button asChild variant="link">
              <Link href="/support" target="_blank" className="text-zinc-600 font-normal ">
                Support
              </Link>
            </Button>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-center">About</h3>
            <Button asChild variant="link">
              <Link href="/about" target="_blank" className="text-zinc-600 font-normal ">
                About
              </Link>
            </Button>
            <Button asChild variant="link">
              <Link href="/github" target="_blank" className="text-zinc-600 font-normal ">
                Github
              </Link>
            </Button>
            <Button asChild variant="link">
              <Link href="/status" target="_blank" className="text-zinc-600 font-normal ">
                Status
              </Link>
            </Button>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-center">Legal</h3>
            <Button asChild variant="link">
              <Link href="/privacy-policy" target="_blank" className="text-zinc-600 font-normal ">
                Privacy Policy
              </Link>
            </Button>
            <Button asChild variant="link">
              <Link href="/terms-of-service" target="_blank" className="text-zinc-600 font-normal ">
                Terms Of Service
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
