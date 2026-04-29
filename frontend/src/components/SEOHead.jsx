import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://girderpay.com";

export default function SEOHead({ title, description, keywords }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const fullTitle = title ? `${title} | GirderPay` : "GirderPay | Enterprise Payment Infrastructure";
    document.title = fullTitle;
    const canonicalUrl = `${SITE_URL}${pathname === "/" ? "" : pathname}`;

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

    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    // Standard meta
    if (description) setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);

    // Canonical
    setLink("canonical", canonicalUrl);

    // Open Graph
    setOG("og:title", fullTitle);
    if (description) setOG("og:description", description);
    setOG("og:type", "website");
    setOG("og:site_name", "GirderPay");
    setOG("og:url", canonicalUrl);

    // Twitter Card
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:site", "@girderpay");
    setMeta("twitter:title", fullTitle);
    if (description) setMeta("twitter:description", description);
  }, [title, description, keywords, pathname]);

  return null;
}
