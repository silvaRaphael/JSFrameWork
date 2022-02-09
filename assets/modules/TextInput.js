import render from './render.js'

export default function TextInput(params) {

  let type = 'input'

  let element = document.createElement(type)

  if(params.className && typeof(params.className) == 'string') element.className = params.className

  if(params.id && typeof(params.id) == 'string') element.id = params.id

  if(params.type && typeof(params.type) == 'string') element.type = params.type

  if(params.name && typeof(params.name) == 'string') element.name = params.name
<<<<<<< HEAD
  
  if(params.value && typeof(params.value) == 'string') element.value = params.value

  if(params.placeHolder && typeof(params.placeHolder) == 'string') element.placeholder = params.placeHolder

  if(params.onBlur && typeof params.onBlur == 'function') {
    element.addEventListener("blur", function( event ) {
      params.onBlur(event.target)
    }, true);
  }

  if(params.style && typeof params.style == 'object') {

    let identifier = `${type}${Math.floor(Math.random() * 9999999) + 9999}`
    
    element.classList.add(identifier)

    let styleParams = {}
    let style = Object.entries(params.style)

    style.unshift(["selector", `.${identifier}`])
    
    style.map(item => styleParams[item[0]] = item[1])

    Style(styleParams)
  }
=======

  if(params.placeholder && typeof(params.placeholder) == 'string') element.placeholder = params.placeholder

  if(params.child) render(params.child, element)
  
>>>>>>> 3520ccf15fbfcffe56c877a21e081665854b2bf1
  
  return element
}