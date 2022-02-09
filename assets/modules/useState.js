import render, { root } from './render.js'
import Main from "../../src/main.js"

const states = []
let stateIndex = 0

function reRender() {
  stateIndex = 0
  root.firstChild.remove()
  render(Main())
}

export default function useState(initialState) {
  
  let index = stateIndex
  states[index] = states[index] || initialState
  const setState = newState => {
    states[index] = newState
    reRender()
  }
  stateIndex++
  return [ states[index], setState ]
}