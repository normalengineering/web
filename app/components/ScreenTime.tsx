"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type ScreenTimeValue = {
  hours: number;
  age: number;
  setHours: (h: number) => void;
  setAge: (a: number) => void;
};

const ScreenTimeContext = createContext<ScreenTimeValue | null>(null);

export function ScreenTimeProvider({ children }: { children: ReactNode }) {
  const [hours, setHours] = useState(4);
  const [age, setAge] = useState(30);
  return (
    <ScreenTimeContext.Provider value={{ hours, age, setHours, setAge }}>
      {children}
    </ScreenTimeContext.Provider>
  );
}

export function useScreenTime() {
  const ctx = useContext(ScreenTimeContext);
  if (!ctx) {
    throw new Error("useScreenTime must be used inside <ScreenTimeProvider>");
  }
  return ctx;
}

export const LIFESPAN = 80;

export function yearsOnPhone(hours: number, age: number) {
  return ((LIFESPAN - age) * hours) / 24;
}

const FRACTIONS = ["", "¼", "½", "¾"];

export function formatHoursSpoken(h: number) {
  const quarters = Math.round(h * 4);
  const whole = Math.floor(quarters / 4);
  const frac = FRACTIONS[quarters % 4];
  return `${whole || ""}${frac} ${h <= 1 ? "hour" : "hours"}`;
}

export function formatHours(h: number) {
  const totalMinutes = Math.round((h * 60) / 5) * 5;
  const whole = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  if (!mins) return `${whole}h`;
  return whole ? `${whole}h ${mins}m` : `${mins}m`;
}
