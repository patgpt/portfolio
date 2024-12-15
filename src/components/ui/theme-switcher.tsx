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
    <div className="dropdown dropdown-end">
      <button
        aria-haspopup="listbox"
        aria-expanded="false"
        aria-label="Select theme"
        className="btn btn-ghost btn-sm"
      >
        Theme
        <FaChevronDown className="h-3 w-3 opacity-60" aria-hidden="true" />
      </button>
      <ul
        role="listbox"
        aria-label="Theme options"
        className="dropdown-content bg-base-300 rounded-box z-[1] mt-2 w-52 p-2 shadow-2xl"
      >
        {themes.map((t) => (
          <li key={t.toLowerCase()}>
            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-2">
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="radio"
                  value={t.toLowerCase()}
                  checked={theme === t.toLowerCase()}
                  onChange={() => setTheme(t.toLowerCase())}
                  aria-label={`Switch to ${t} theme`}
                />
                <span className="label-text">{t}</span>
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ThemeSwitcher;
