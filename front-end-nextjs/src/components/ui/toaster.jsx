"use client";

import { Toaster as SonnerToaster } from "sonner";
import { useTheme } from "next-themes";

export function Toaster() {
  const { theme } = useTheme();

  return (
    <SonnerToaster
      position="top-center"
      theme={theme}
      richColors
      toastOptions={{
        classNames: {
          toast: "font-sans",
          title: "text-base",
          description: "text-sm",
        },
      }}
    />
  );
}
