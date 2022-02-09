import { appColors, appFonts, appMetrics } from "../../src/appConfig.js";
import Style from "./Style.js";

export default function ComponentsStyle() {
  return (
    Style({
      selector: [ "*" ],
      margin: "0",
      padding: "0",
      boxSizing: "border-box",
      listDecoration: "none",
      textDecoration: "none"
    }),
    Style({
      selector: [ "body > div:first-child" ],
      minHeight: "100vh",
      minWidth: "100%",
    }),
    Style({
      selector: [ "a", "p" ],
      color: appColors.primary,
      fontFamily: appFonts.primary,
      textDecoration: "none"
    }),
    Style({
      selector: [ "button", "input" ],
      color: appColors.primary,
      fontFamily: appFonts.primary,
      fontSize: appMetrics.mdText,
      height: "fit-content",
      padding: ".25rem .5rem",
      border: "none",
      outline: "none",
      background: appColors.light,
      boxShadow: `0 0 .1rem ${appColors.dark}`,
    }),
    Style({
      selector: [ "[data-row]", "[data-column]", "[data-view]", "[data-center]" ],
      display: "flex",
    }),
    Style({
      selector: [ "[data-row]" ],
      flexDirection: "row",
      justifyContent: "center",
    }),
    Style({
      selector: [ "[data-column]" ],
      flexDirection: "column",
      alignItems: "center",
    }),
    Style({
      selector: [ "[data-center]" ],
      alignItems: "center",
      justifyContent: "center"
    })
  )
}

ComponentsStyle()