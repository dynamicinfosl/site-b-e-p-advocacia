import { useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import faviconUrl from "./assets/images/logo/favicon.png";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function Favicon() {
  useEffect(() => {
    const existingLink = document.querySelector("link[rel='icon']") as HTMLLinkElement | null;

    if (existingLink) {
      existingLink.type = "image/png";
      existingLink.href = faviconUrl;
    } else {
      const newLink = document.createElement("link");
      newLink.rel = "icon";
      newLink.type = "image/png";
      newLink.href = faviconUrl;
      document.head.appendChild(newLink);
    }
  }, []);

  return null;
}


function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename={__BASE_PATH__}>
        <Favicon />
        <ScrollToTop />
        <AppRoutes />
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
