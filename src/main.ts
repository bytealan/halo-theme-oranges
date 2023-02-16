import "./styles/main.styl";
import * as tocbot from "tocbot";

export function generateToc() {
  tocbot.init({
    tocSelector: ".catalog-content",
    contentSelector: "#content",
    headingSelector: "h1, h2, h3, h4",
    extraListClasses: "toc",
    // extraLinkClasses:"",
    activeLinkClass: "active",
    collapseDepth: 6,
    headingsOffset: 100,
    scrollSmooth: true,
    scrollSmoothOffset: -100,
  });
}