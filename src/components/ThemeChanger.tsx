import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export const ThemeChanger: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative flex justify-end">
      <div className="absolute p-4">
        <button
          className="px-4 py-2 font-semibold text-white capitalize bg-black rounded-md dark:text-black dark:bg-white"
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        >
          {theme}
        </button>
      </div>
    </div>
  );
};
