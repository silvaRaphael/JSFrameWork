import { Colors, Fonts, Sizes } from "../../config/config.js";
import { Style } from "./index.js";

export default function ComponentsStyle() {
  return (
    Style({
      fonts: Fonts?.fontsUrl
    }),
    Style({
      selector: ["*"],
      scrollBehavior: "smooth",
      margin: "0",
      padding: "0",
      boxSizing: "border-box",
      listDecoration: "none",
      textDecoration: "none"
    }),
    Style({
      selector: 'body',
      backgroundColor: '#fff'
    }),
    Style({
      selector: ["body > div:first-child"],
      minHeight: "100vh",
      minWidth: "100%",
    }),
    Style({
      selector: ["a", "p", "span", "label"],
      color: '#000',
      fontFamily: Fonts?.primary,
      textDecoration: "none"
    }),
    Style({
      selector: ["[data-pointer]", "a"],
      cursor: "pointer"
    }),
    Style({
      selector: ["button", "select", "input", "textarea"],
      fontFamily: Fonts?.primary,
      fontSize: Sizes?.normalText,
      border: "none",
      outline: "none",
    }),
    Style({
      selector: ["input", "select", "textarea"],
      width: '100%',
      color: '#000',
    }),
    Style({
      selector: ["input::placeholder", "textarea::placeholder"],
      color: Colors.gray,
    }),
    Style({
      selector: ["textarea::-webkit-scrollbar"],
      width: "0px",
    }),
    Style({
      selector: ["[data-row]", "[data-column]", "[data-view]", "[data-center]", "[data-expanded]"],
      display: "flex",
    }),
    Style({
      selector: ["[data-grid]"],
      display: "grid",
    }),
    Style({
      selector: ["[data-row]"],
      flexDirection: "row",
      justifyContent: "center",
    }),
    Style({
      selector: ["[data-column]"],
      flexDirection: "column",
      alignItems: "center",
    }),
    Style({
      selector: ["[data-expanded]"],
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flex: "1",
      width: "100%"
    }),
    Style({
      selector: ["[data-view]"],
      flexDirection: "row",
      justifyContent: "center",
      width: "100%"
    }),
    Style({
      selector: ["[data-center]"],
      alignItems: "center",
      justifyContent: "center",
      flex: "1",
      width: "100%",
      height: "-webkit-fill-available",
    })
  )
}

ComponentsStyle()