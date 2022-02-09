import render from './render.js'

export default function Row(params) {

  let type = 'div'

  let element = document.createElement(type)

  if(params.className && typeof(params.className) == 'string') element.className = params.className

  if(params.id && typeof(params.id) == 'string') element.id = params.id
  
  if(params.child) {
    render(params.child, element)
  } else if(params.children) {
    params.children.forEach(item => {
      render(item, element)
    });
  }

  element.dataset.row = ''

  if(params.style && typeof params.style == 'object') {

    let identifier = `${type}${Math.floor(Math.random() * 9999999) + 9999}`
    
    element.classList.add(identifier)

    let styleParams = {}
    let style = Object.entries(params.style)

    style.unshift(["selector", `.${identifier}`])
    
    style.map(item => styleParams[item[0]] = item[1])

    Style(styleParams)
  }

  return element
}