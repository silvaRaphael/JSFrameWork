import { render } from "../assets/modules/hooks.js";
import { Router, RouterLink } from "../assets/modules/Router.js";
import { Center, Column, Text } from "../assets/modules/index.js";
import { Colors, Fonts, Sizes } from "../config/config.js";

function Home() {
  return Center({
    style: {
      height: '100vh',
      backgroundColor: Colors.light
    },
    child: Column({
      children: [
        Text('Home Page', {
          className: 'titulo',
          style: {
            color: Colors.dark,
            fontFamily: Fonts.primary,
            fontWeight: '500',
            fontSize: Px(30),
          },
        }),
        Text('Comece seu projeto em src/main.js'),
      ]
    })
  });
}

function Error() {
  return Center({
    style: {
      height: '100vh',
      backgroundColor: Colors.light,
    },
    child: Column({
      children: [
        Text('Página não Encontrada!', {
          style: {
            color: Colors.dark,
            fontFamily: Fonts.primary,
            fontWeight: '500',
            fontSize: Px(30),
          },
        }),
        RouterLink({
          to: '/',
          child: 'Ir para Home'
        })
      ]
    })
  });
}

export default function AppRoutes() {
  return Router({
    routes: [
      {
        component: Home,
        path: '/',
        title: 'Home',
      },
      {
        component: Error,
        path: '/error',
        title: 'Erro',
      },
    ]
  });
}

render(AppRoutes());