import React, { useEffect } from "react";

export const GoogleTranslate = ({ id = "google_translate_element" }) => {

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,es,fr,de,ar,zh-CN,bn,mr,ta,te",
          autoDisplay: false,
        },
        id
      );
    };

    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [id]);

  // ✅ REAL WORKING LANGUAGE CHANGE
  const changeLanguage = (lang) => {
    const interval = setInterval(() => {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change"));
        clearInterval(interval);
      }
    }, 300);
  };

  return (
    <div className="w-40 max-w-xs">
      
      {/* Hidden Google Translate */}
      <div id={id} className="hidden"></div>

      {/* Custom Styled Dropdown */}
      <div className="bg-[#0f2f5f] border border-white/10 rounded-xl px-4 py-3 shadow-lg">
        
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          className="w-full bg-transparent text-black outline-none cursor-pointer"
        >
          <option  value="">Select Language</option>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
          <option value="de">German</option>
          <option value="ar">Arabic</option>
          <option value="bn">Bengali</option>
          <option value="mr">Marathi</option>
          <option value="ta">Tamil</option>
          <option value="te">Telugu</option>
          <option value="zh-CN">Chinese</option>
        </select>

        <p className="text-[10px] text-white/40 mt-1">
          Powered by Google Translate
        </p>
      </div>
    </div>
  );
};