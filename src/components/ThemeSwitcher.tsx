"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import {
  FiMonitor,
  FiSun,
  FiMoon,
  FiCoffee,
  FiFeather,
  FiDroplet,
  FiHeart,
  FiZap,
} from "react-icons/fi";

function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const themes = [
    // System & Default
    { name: "system", icon: <FiMonitor />, label: "System" },
    { name: "light", icon: <FiSun />, label: "Light" },
    { name: "dark", icon: <FiMoon />, label: "Dark" },
    { divider: true, label: "Light Themes" },
    // Light Themes
    { name: "cupcake", icon: <FiFeather />, label: "Cupcake" },
    { name: "bumblebee", icon: <FiSun />, label: "Bumblebee" },
    { name: "emerald", icon: <FiDroplet />, label: "Emerald" },
    { name: "corporate", icon: <FiFeather />, label: "Corporate" },
    { name: "retro", icon: <FiCoffee />, label: "Retro" },
    { name: "valentine", icon: <FiHeart />, label: "Valentine" },
    { name: "garden", icon: <FiFeather />, label: "Garden" },
    { name: "aqua", icon: <FiDroplet />, label: "Aqua" },
    { divider: true, label: "Dark Themes" },
    // Dark Themes
    { name: "forest", icon: <FiMoon />, label: "Forest" },
    { name: "lofi", icon: <FiMoon />, label: "Lo-Fi" },
    { name: "black", icon: <FiMoon />, label: "Black" },
    { name: "dracula", icon: <FiMoon />, label: "Dracula" },
    { name: "night", icon: <FiMoon />, label: "Night" },
    { divider: true, label: "Special Themes" },
    // Special Themes
    { name: "cyberpunk", icon: <FiZap />, label: "Cyberpunk" },
    { name: "synthwave", icon: <FiZap />, label: "Synthwave" },
    { name: "halloween", icon: <FiMoon />, label: "Halloween" },
    { name: "luxury", icon: <FiFeather />, label: "Luxury" },
    { name: "business", icon: <FiFeather />, label: "Business" },
    { name: "acid", icon: <FiZap />, label: "Acid" },
    { name: "lemonade", icon: <FiSun />, label: "Lemonade" },
    { name: "coffee", icon: <FiCoffee />, label: "Coffee" },
    { name: "winter", icon: <FiDroplet />, label: "Winter" },
  ];

  const currentIcon =
    themes.find((t) => t.name === (theme ?? "system"))?.icon || themes[0].icon;

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-circle btn-ghost">
        {currentIcon}
        <span className="sr-only">Theme switcher</span>
      </div>
      <ul className="menu dropdown-content z-[1] max-h-[70vh] w-36 overflow-y-auto rounded-box border border-base-300 bg-base-100 p-1 text-sm shadow-lg">
        {themes.map((t, i) =>
          t.divider ? (
            <li
              key={`divider-${i}`}
              className="mt-2 px-2 text-xs font-bold text-base-content/70"
            >
              {t.label}
            </li>
          ) : (
            <li key={t.name}>
              <button
                className={`flex items-center gap-1.5 py-1.5 text-base-content hover:bg-base-200 ${
                  theme === t.name ? "bg-base-200 font-medium" : ""
                }`}
                onClick={() => t.name && setTheme(t.name)}
              >
                <span className="text-base">{t.icon}</span>
                <span className="text-xs">{t.label}</span>
              </button>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}

export default ThemeSwitcher;
