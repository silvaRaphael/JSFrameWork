<<<<<<< HEAD
import { appRoot } from '../../src/appConfig.js'

export const root = document.querySelector(appRoot)

export default function render(element, container) {

  if(!container) container = root

  if(typeof element == "string" || typeof element == "number") {

    container.append(element)
  } else {
    
    container.appendChild(element)
  }
=======
export default function render(component, parent) {
  parent.append(component)
>>>>>>> 3520ccf15fbfcffe56c877a21e081665854b2bf1
}