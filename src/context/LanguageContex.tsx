// LanguageContext.tsx
import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { LanguageContextType } from "../type";

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<"es" | "en">("es");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageContext;