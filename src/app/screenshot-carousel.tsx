"use client";

import { useState, useEffect, useCallback } from "react";

const screenshots = [
  { id: 1, alt: "Livvy Sobriety Tracker - Track your sober days with daily check-ins" },
  { id: 2, alt: "Livvy AI Chat - Compassionate AI companion for craving support" },
  { id: 3, alt: "Livvy Journal - Calendar-based daily reflection and journaling" },
  { id: 4, alt: "Livvy Widget - iOS home screen sobriety tracking widget" },
];

export default function ScreenshotCarousel() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  const goTo = useCallback(
    (index: number) => {
      if (index === current) return;
      setFade(false);
      setTimeout(() => {
        setCurrent(index);
        setFade(true);
      }, 400);
    },
    [current],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % screenshots.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="relative w-64 sm:w-72 aspect-[9/19.5] mx-auto">
        <img
          src={`/images/screenshot-${screenshots[current].id}.png`}
          alt={screenshots[current].alt}
          className={`w-full h-full object-cover rounded-[2.5rem] transition-opacity duration-400 ease-in-out ${fade ? "opacity-100" : "opacity-0"}`}
        />
      </div>
      <div className="flex items-center gap-3">
        {screenshots.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Screenshot ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-primary scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
