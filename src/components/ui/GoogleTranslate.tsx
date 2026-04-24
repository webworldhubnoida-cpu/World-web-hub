import { useEffect } from "react";

export const GoogleTranslate = ({ id = "google_translate_element" }) => {
  useEffect(() => {
    // Load script only once
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    // Init function must be global
(window as any).googleTranslateElementInit = () => {
      if ((window as any).google && (window as any).google.translate) {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi",
            autoDisplay: false,
            layout:
              (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          id
        );
      }
    };
  }, [id]);

  return (
    <div
      id={id}
      className="inline-block bg-white text-black text-sm px-3 py-2 rounded-md"
    />
  );
};