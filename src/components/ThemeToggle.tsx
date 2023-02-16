import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  useEffect(() => {
    if (isDarkModeEnabled) {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [isDarkModeEnabled]);

  return (
    <label>
      <input
        type="checkbox"
        className="mr-1"
        checked={isDarkModeEnabled}
        onChange={() => {
          setIsDarkModeEnabled(!isDarkModeEnabled);
        }}
      />
      Enable dark mode?
    </label>
  );
}
