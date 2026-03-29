import cssText from "../index.css?inline";

const STYLE_ELEMENT_ID = "poc-base-ui-styles";

function injectBaseUiStyles() {
  if (typeof document === "undefined") {
    return;
  }

  if (document.getElementById(STYLE_ELEMENT_ID)) {
    return;
  }

  const style = document.createElement("style");
  style.id = STYLE_ELEMENT_ID;
  style.textContent = cssText;
  document.head.appendChild(style);
}

injectBaseUiStyles();
