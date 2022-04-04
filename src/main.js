import { render } from "../assets/modules/hooks.js";
import { Router, RouterLink } from "../assets/modules/Router.js";
import { Center, Column, Text } from "../assets/modules/index.js";
import { Colors, Fonts, Sizes } from "../config/config.js";

function Home() {
  return Center({
    style: {
      height: '100vh',
      backgroundColor: Colors.bodyColor
    },
    child: Column({
      children: [
        Text({
          style: {
            color: Colors.textColor,
            fontFamily: Fonts.primary,
            fontWeight: '500',
            fontSize: Sizes.title
          },
          child: 'Home Page',
        }),
        Text({
          child: 'Comece seu projeto em src/main.js'
        }),
      ]
    })
  })
}

function Error() {
  return Center({
    style: {
      height: '100vh',
      backgroundColor: Colors.bodyColor
    },
    child: Column({
      children: [
        Text({
          style: {
            color: Colors.textColor,
            fontFamily: Fonts.primary,
            fontWeight: '500',
            fontSize: Sizes.title
          },
          child: 'Página não Encontrada!',
        }),
        RouterLink({
          to: '/',
          child: 'Ir para Home'
        })
      ]
    })
  })
}

export default function AppRoutes() {
  return (
    Router({
      routes: [
        {
          component: App(),
          path: '/'
        },
        {
          component: Error(),
          path: '/error'
        },
      ]
    })
  )
}

render(AppRoutes())