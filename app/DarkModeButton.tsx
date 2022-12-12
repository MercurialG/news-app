"use client";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

function DarkModeButton() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme == "system" ? systemTheme : theme;

  return (
    <div>
      {currentTheme === "dark" ? (
        <SunIcon
          onClick={() => setTheme("light")}
          className="h-8 w-8 cursor-pointer text-yellow-400"
        />
      ) : (
        <MoonIcon
          onClick={() => setTheme("dark")}
          className="h-8 w-8 cursor-pointer text-gray-900"
        />
      )}
    </div>
  );
}

export default DarkModeButton;
