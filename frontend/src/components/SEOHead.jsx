import { useEffect } from "react";

export default function SEOHead({ title, description, keywords }) {
  useEffect(() => {
    document.title = title ? `${title} | GirderPay` : "GirderPay | Enterprise Payment Infrastructure";

    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setOG = (property, content) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    if (description) {
      setMeta("description", description);
      setOG("og:description", description);
    }
    if (keywords) setMeta("keywords", keywords);
    if (title) {
      setOG("og:title", `${title} | GirderPay`);
    }
    setOG("og:type", "website");
    setOG("og:site_name", "GirderPay");
  }, [title, description, keywords]);

  return null;
}
