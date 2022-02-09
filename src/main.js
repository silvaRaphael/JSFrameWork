import Configs from './setup.js'
import render from '../assets/modules/render.js'
<<<<<<< HEAD

import Home from './screens/Home.js'
=======
import { View, Text, Image, Button, Link, TextInput, Column, Row, Style, } from '../assets/modules/index.js'

import { appColors, appName } from './appConfig.js'


function App() {
>>>>>>> 3520ccf15fbfcffe56c877a21e081665854b2bf1

export default function Main() {
  return (
<<<<<<< HEAD
    Home()
  )
}

render(Main())
=======
    View({
      className: "container",
      child: Column({
        className: "alertBox",
        style: Style({
          selector: ".alertBox",
          width: "12rem",
          height: "12rem",
          'justify-content': "space-evenly",
          'border-radius': "2rem",
          'box-shadow': `0 0 2rem ${appColors.secondary}`,
        }),
        children: [
          Text({ child: `WELCOME TO ${appName}` }),
          Image({
            source: "/assets/icon/favicon.ico"
          })
        ]
      })
    })
  )
}

Style({
  selector: ".container",
  width: "100%",
  height: "100vh",
  "justify-content": "center",
  "align-items": "center",
})

render(App(), document.querySelector('#root'))
>>>>>>> 3520ccf15fbfcffe56c877a21e081665854b2bf1
