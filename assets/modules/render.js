import { appRoot } from '../../src/appConfig.js'

export const root = document.querySelector(appRoot)

export default function render(element, container) {

  if(!container) container = root

  if(typeof element == "string" || typeof element == "number") {

    container.append(element)
  } else {
    
    container.appendChild(element)
  }
}