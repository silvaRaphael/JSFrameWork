import { appRoot } from '../../config/config.js';
import { Router } from "./Router.js";

import { default as App } from '../../src/main.js';
import * as all from '../../src/main.js';

const root = document.querySelector(appRoot)

// const renders = []
// let renderIndex = 0

function render(element, container) {

  if (!container) container = root

  if (container == root) {
    container.children[0] && container.children[0].remove()
  }

  if (typeof element == "string" || typeof element == "number") {

    container.append(element)
  } else {

    container.appendChild(element)
  }
  
  // renders[renderIndex] = element
  // renderIndex++
}

let osArray = [];
let osIndex = 0;
let osComponent = "";

function State(initialState, { name }) {
  let index = osIndex
  osArray[index] = osArray[index] || {id: index, component: name, value: initialState}

  const setState = (newState) => {
    let component = osArray[index].component
    osArray = osArray.map(p =>
      p.id === index ? { ...p, value: newState } : p
    );
    replaceChild(component, index, component)
  }

  osIndex++
  return [osArray[index].value, setState]
}

function replaceChild(element, index, component) {
  let indexItemAppears = []
  osArray.forEach((element, i) => { if(element.component == component) indexItemAppears.push(i) })

  osIndex = indexItemAppears[0]
  osComponent = component

  const oldComponent = document.querySelector("[data-statefull='"+element+"']")
  oldComponent.parentNode.replaceChild(all[component](), oldComponent)
}

export { render, State }


/* const states = []
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
  return [states[index], setState]
} */

/* const effects = []
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

  if (effects[index].dependencies.length == "0") {
    effects[index].executions == 1 && effects[index].function()
  }

  executions++
  effectIndex++
} */
