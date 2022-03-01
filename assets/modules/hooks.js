import { appRoot } from '../../config/config.js';
import { default as App } from '../../src/main.js';
import { Router } from "./Router.js";

const root = document.querySelector(appRoot)

const renders = []
let renderIndex = 0

function render(element, container) {

  if(!container) container = root

  if(container == root) {
    container.children[0] && container.children[0].remove()
  }

  if(typeof element == "string" || typeof element == "number") {

    container.append(element)
  } else {
    
    container.appendChild(element)
  }

  renders[renderIndex] = element
  renderIndex++
}

const states = []
let stateIndex = 0

function reRender() {
  stateIndex = 0

  root.firstChild.remove()
  render(App())
}

function useState(initialState) {
  let index = stateIndex

  states[index] = states[index] || initialState

  const setState = newState => {

    states[index] = newState
    reRender()
  }
  stateIndex++
  return [ states[index], setState ]
}

const effects = []
let effectIndex = 0
let executions = 1

function useEffect(toExec, deps) {

  let dependencies = !deps ? [] : deps

  let index = effectIndex

  effects[index] = {
    "executions": executions,
    "dependencies": dependencies,
    "function": toExec
  }

  if(effects[index].dependencies.length == "0") {
    effects[index].executions == 1 && effects[index].function()
  }

  executions++
  effectIndex++
}

export { render, useState, useEffect }