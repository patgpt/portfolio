"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const themes = ["Default", "Retro", "Cyberpunk", "Valentine", "Aqua"];

  return (
    <div className="dropdown mb-72">
      <button
        aria-haspopup="listbox"
        aria-expanded="false"
        aria-label="Select theme"
        className="btn m-1"
      >
        Theme
        <FaChevronDown className="h-3 w-3 opacity-60" aria-hidden="true" />
      </button>
      <ul
        role="listbox"
        aria-label="Theme options"
        className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl"
      >
        {themes.map((t) => (
          <li key={t.toLowerCase()}>
            <label className="flex items-center w-full cursor-pointer">
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label={`Switch to ${t} theme`}
                value={t.toLowerCase()}
                checked={theme === t.toLowerCase()}
                onChange={() => setTheme(t.toLowerCase())}
              />
              <span className="ml-2">{t}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ThemeSwitcher;
