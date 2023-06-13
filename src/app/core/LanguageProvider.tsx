import React, { createContext, useEffect, useState } from "react";

export const defaultLocale = "en";
export const locales = ["ar", "en"];
export const LanguageContext = createContext([]);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [locale, setLocale] = useState<"en" | "ar" | string>("en");

  useEffect(() => {
    if (localStorage.getItem("psmap_lang")) {
      setLocale(localStorage.getItem("psmap_lang") as string);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("psmap_lang", locale);
  }, [locale]);

  return (
    <LanguageContext.Provider value={[locale as never, setLocale as never]}>
      <div style={{ direction: locale === "en" ? "ltr" : "rtl" }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};
