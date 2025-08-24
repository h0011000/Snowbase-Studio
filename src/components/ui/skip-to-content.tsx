"use client";

import { useEffect, useState } from "react";

export default function SkipToContent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <a
      href="#main-content"
      className="absolute top-0 left-0 z-50 px-4 py-2 bg-primary text-primary-foreground transform -translate-y-full transition-transform duration-200 focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
    >
      Skip to main content
    </a>
  );
}