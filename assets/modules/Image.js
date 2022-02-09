export default function Image(params) {

  let type = 'img'

  let element = document.createElement(type)

  if(params.className && typeof(params.className) == 'string') element.className = params.className

  if(params.id && typeof(params.id) == 'string') element.id = params.id

  if(params.alt && typeof(params.alt) == 'string') element.alt = params.alt
  
  if(params.source && typeof(params.source) == 'string') element.src = params.source

  if(params.onPressed && typeof(params.onPressed) == 'function') element.onclick = params.onPressed
  
  if(params.sizeMode && typeof(params.sizeMode) == 'string') {
    element.style.objectFit = params.sizeMode
  }

  if(params.size && typeof(params.size) == 'object') {
    if(typeof(params.size[0]) == 'number') {
      element.width = params.size[0]
    } else {
      element.style.width = params.size[0]
    }
    if(typeof(params.size[1]) == 'number') {
      element.height = params.size[1]
    } else {
      element.style.height = params.size[1]
    }
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

  return element
}