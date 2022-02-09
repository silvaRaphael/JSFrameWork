import Configs from './setup.js'
import render from '../assets/modules/render.js'
import setup from './setup.js'

import Home from './screens/Home.js'

export default function Main() {
  return (
    Home()
  )
}

render(Main())