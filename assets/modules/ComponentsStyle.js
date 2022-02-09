import { appColors, appFonts, appMetrics } from "../../src/appConfig.js";
import Style from "./Style.js";

export default function ComponentsStyle() {
  return (
    Style({
      selector: [ "*" ],
      margin: "0",
      padding: "0",
<<<<<<< HEAD
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
=======
      'box-sizing': "border-box",
      'list-decoration': "none",
      'text-decoration': "none"
    }),
    Style({
      selector: [ "body > div:first-child" ],
      'min-height': "100vh",
      'min-width': "100%",
    }),
    Style({
      selector: [ "a", ],
      color: appColors.primary,
      'font-family': appFonts.primary,
      'font-size': "1rem",
      'text-decoration': "none"
>>>>>>> 3520ccf15fbfcffe56c877a21e081665854b2bf1
    }),
    Style({
      selector: [ "button", "input" ],
      color: appColors.primary,
<<<<<<< HEAD
      fontFamily: appFonts.primary,
      fontSize: appMetrics.mdText,
      height: "fit-content",
=======
      'font-family': appFonts.primary,
      'font-size': appMetrics.mdText,
>>>>>>> 3520ccf15fbfcffe56c877a21e081665854b2bf1
      padding: ".25rem .5rem",
      border: "none",
      outline: "none",
      background: appColors.light,
<<<<<<< HEAD
      boxShadow: `0 0 .1rem ${appColors.dark}`,
    }),
    Style({
      selector: [ "[data-row]", "[data-column]", "[data-view]", "[data-center]" ],
=======
      'box-shadow': `0 0 .1rem ${appColors.dark}`,
    }),
    Style({
      selector: [ "[data-row]", "[data-column]", "[data-view]" ],
>>>>>>> 3520ccf15fbfcffe56c877a21e081665854b2bf1
      display: "flex",
    }),
    Style({
      selector: [ "[data-row]" ],
<<<<<<< HEAD
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
=======
      'flex-direction': "row",
      'justify-content': "center",
    }),
    Style({
      selector: [ "[data-column]" ],
      'flex-direction': "column",
      'align-items': "center",
>>>>>>> 3520ccf15fbfcffe56c877a21e081665854b2bf1
    })
  )
}

ComponentsStyle()