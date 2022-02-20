import { appRoot, Colors, Sizes, Fonts, BreakPoints } from "../config/config.js";
import { render, useState } from "../assets/modules/hooks.js";
import { Center, Text } from "../assets/modules/index.js";


if (window.matchMedia(BreakPoints.desktop).matches) Sizes.maxWidth = `calc(1024px - 4rem)`

export const App = () => {

  return (
    Center({
      style: {
        height: '100vh',
        backgroundColor: Colors.bodyColor
      },
      child: Text({
        style: { color: Colors.textColor },
        child: '<BEM-VINDO>'
      })
    })
  )
}

render(App(), document.querySelector("#root"))