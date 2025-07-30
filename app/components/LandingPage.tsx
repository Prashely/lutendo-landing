"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function LandingPage() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    function getTimeLeft(): TimeLeft {
      const launchDate = new Date("2025-08-05T00:00:00");
      const now = new Date();
      const diff = Math.max(0, launchDate.getTime() - now.getTime());

      const totalSeconds = Math.floor(diff / 1000);
      const days = Math.floor(totalSeconds / (3600 * 24));
      const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      return { days, hours, minutes, seconds };
    }

    setTimeLeft(getTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return <div>Loading...</div>;

  return (
    <div className="w-full font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-[#160c6b] text-white">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <Image
          className="w-full xl:w-[800px] h-auto"
          src="/Lutendologo.svg"
          alt="Logo"
          width={128}
          height={128}
          priority
        />
        <h1 className="text-2xl text-white">Launching in</h1>
        <div className="md:flex gap-4 text-4xl sm:text-6xl font-bold tracking-widest">
          <TimeUnit value={timeLeft.days} label="Days" />
          <Separator />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <Separator />
          <TimeUnit value={timeLeft.minutes} label="Min" />
          <Separator />
          <TimeUnit value={timeLeft.seconds} label="Sec" />
        </div>
      </main>

      <footer className="row-start-3 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Lutendo. All rights reserved.
      </footer>
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span>{String(value).padStart(2, "0")}</span>
      <span className="text-xs mt-1 text-gray-500">{label}</span>
    </div>
  );
}

function Separator() {
  return <span className="text-gray-500">:</span>;
}
