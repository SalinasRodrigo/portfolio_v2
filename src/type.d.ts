export type Lang = "es" | "en";
export interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
}