"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

export default function DarkModeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (theme === "system") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(isDark ? "dark" : "light");
    }

    setMounted(true);
  }, [theme, setTheme]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center justify-end gap-x-3">
      <Label htmlFor="dark-mode" className="mb-0">
        Dark Mode
      </Label>
      <Switch
        id="dark-mode"
        defaultChecked={theme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      />
    </div>
  );
}
