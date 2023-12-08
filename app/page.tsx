import { ReactNode } from "react";
import Link from "next/link";

import HeroBackgroundGradient from "@/components/HeroBackgroundGradient";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"

import { Github, icons } from "lucide-react";

function FeatureCard({
  icon,
  title,
  isNew,
  children,
}: {
  icon: string;
  title: string;
  isNew?: boolean;
  children: ReactNode;
}) {
  // @ts-ignore
  const LucideIcon = icons[icon];

  return (
    <Card className="max-w-[350px] h-[300px] rounded-xl justify-between hover:cursor-pointer hover:bg-gradient-to-b hover:from-black hover:to-gray-400/5 hover:shadow-lg hover:shadow-gray-400/10">
      <CardHeader>
        <CardTitle className="flex items-center justify-center gap-2">
          <LucideIcon className="w-10 h-10 p-2 text-gray-500 rounded-full bg-[linear-gradient(180deg,_rgba(39,_39,_42,_0.68)_0%,_rgba(39,_39,_42,_0.00)_100%)] flex items-center justify-center border border-zinc-700" />{" "}
          {title}
          {isNew && <Badge className="text-cyan-300 bg-cyan-700/25 border-cyan-300" variant="outline">New</Badge>}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{children}</CardDescription>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="max-w-4xl mx-auto space-y-4 text-center mt-40 px-4">
          <h2 className="text-5xl md:text-7xl font-bold">
            The best open-source giveaway bot on Discord
          </h2>
          <p className="text-zinc-400">
            Move faster with the ultimate Discord bot for giveaways, delivering
            efficient and interactive experiences to your community, 100% free
            and open-source.
          </p>
        </div>
        <HeroBackgroundGradient />
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 px-4 my-4">
          <Button
            asChild
            variant="outline"
            className="bg-gradient-to-b from-gray-700 to-black rounded-full w-full md:w-auto shadow-white hover:shadow-[0_0_2rem_-0.5rem_#fff8] hover:bg-gradient-to-t transition-all duration-300"
          >
            <Link href="/invite" target="_blank">
              Get Started
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full w-full md:w-auto transition-all duration-300"
          >
            <Link href="/github" target="_blank">
              <Github className="mr-2 h-4 w-4" />
              Star on Github
            </Link>
          </Button>
        </div>
      </section>
      {/* Features Section */}
      <section id="features" className="py-20 text-center">
        <div className="max-w-2xl mx-auto space-y-4 px-4">
          <h2 className="text-4xl font-bold mb-4">
            Elevate Your Discord Community with Advanced Bot Features
          </h2>
          <p className="text-zinc-400">
            Empower your Discord server with a rich array of advanced bot
            features designed to streamline engagement and enhance interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 place-items-center">
          <FeatureCard icon="Gift" title="Giveaways">
            Giftify simplifies hosting giveaways on Discord. With intuitive
            commands, moderators or server admins can effortlessly set up,
            manage, and conclude giveaways, enhancing community engagement.
            Users can participate, increasing interaction within the server.
            This feature significantly boosts user engagement and fosters a
            vibrant community atmosphere.
          </FeatureCard>

          <FeatureCard icon="AlarmClock" title="Timers">
            Giftify incorporates timers, enabling precise control over the
            duration of events such as giveaways, ensuring fairness and clarity
            for participants. This functionality allows administrators to tailor
            event durations and manage activities effectively, guaranteeing an
            equitable experience for all members.
          </FeatureCard>

          <FeatureCard icon="Coins" title="Donations Tracking">
            Giftify tracks donations within the server, providing transparency
            and recognition for contributors. This feature encourages community
            support and acknowledges generous members. It helps build a sense of
            appreciation among users and enhances camaraderie within the
            community.
          </FeatureCard>

          <FeatureCard icon="Ticket" title="Raffles" isNew>
            Apart from giveaways, Giftify offers robust tools for managing
            raffles. Admins can efficiently organize, oversee, and conclude
            raffle events, fostering excitement and engagement among server
            members. This feature diversifies community engagement, offering
            users a variety of interactive events and enhancing overall server
            dynamics.
          </FeatureCard>
        </div>
      </section>
    </main>
  );
}
