import { useEffect, useState } from "react";

export default function useMediaQuery(query: string) {
  /* lazy initialization */
  const [isQuery, setIsQuery] = useState<boolean>(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleChange = (e: MediaQueryListEvent) => setIsQuery(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [query]);
  return isQuery;
}
