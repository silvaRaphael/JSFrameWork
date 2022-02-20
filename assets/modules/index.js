import { render } from "./hooks.js";
import ComponentsStyle from "./ComponentsStyle.js";

// CONTAINERS
export function View(params) {

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

  element.dataset.view = ''

  if(params.crossAxis) element.dataset.column = ''

  if(params.style && typeof params.style == 'object' ||
  params.hover && typeof params.hover == 'object') {

    let identifier = `${type}${Math.floor(Math.random() * 9999999) + 9999}`
    
    element.classList.add(identifier)
  
    if(params.style && typeof params.style == 'object') {

      let styleParams = {}
      let style = Object.entries(params.style)

      style.unshift(["selector", `.${identifier}`])
      
      style.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if(params.hover && typeof params.hover == 'object') {

      let styleParams = {}
      let style = Object.entries(params.hover)
      
      style.unshift(["selector", `.${identifier}:hover`])
      
      style.map(item => styleParams[item[0]] = item[1])
      
      Style(styleParams)
    }
  }
  
  return element
}

export function Center(params) {

  let type = 'div'

  let element = document.createElement(type)

  if(params.className && typeof(params.className) == 'string') element.className = params.className

  if(params.id && typeof(params.id) == 'string') element.id = params.id
  
  if(params.child) render(params.child, element)
  
  element.dataset.center = ''

  if(params.style && typeof params.style == 'object' ||
  params.hover && typeof params.hover == 'object') {

    let identifier = `${type}${Math.floor(Math.random() * 9999999) + 9999}`
    
    element.classList.add(identifier)
  
    if(params.style && typeof params.style == 'object') {

      let styleParams = {}
      let style = Object.entries(params.style)

      style.unshift(["selector", `.${identifier}`])
      
      style.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if(params.hover && typeof params.hover == 'object') {

      let styleParams = {}
      let style = Object.entries(params.hover)
      
      style.unshift(["selector", `.${identifier}:hover`])
      
      style.map(item => styleParams[item[0]] = item[1])
      
      Style(styleParams)
    }
  }

  return element
}

export function Row(params) {

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

  if(params.crossAxis) element.dataset.column = ''

  if(params.style && typeof params.style == 'object' ||
  params.hover && typeof params.hover == 'object') {

    let identifier = `${type}${Math.floor(Math.random() * 9999999) + 9999}`
    
    element.classList.add(identifier)
  
    if(params.style && typeof params.style == 'object') {

      let styleParams = {}
      let style = Object.entries(params.style)

      style.unshift(["selector", `.${identifier}`])
      
      style.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if(params.hover && typeof params.hover == 'object') {

      let styleParams = {}
      let style = Object.entries(params.hover)
      
      style.unshift(["selector", `.${identifier}:hover`])
      
      style.map(item => styleParams[item[0]] = item[1])
      
      Style(styleParams)
    }
  }

  return element
}

export function Column(params) {

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

  element.dataset.column = ''

  if(params.crossAxis) element.dataset.row = ''

  if(params.style && typeof params.style == 'object' ||
  params.hover && typeof params.hover == 'object') {

    let identifier = `${type}${Math.floor(Math.random() * 9999999) + 9999}`
    
    element.classList.add(identifier)
  
    if(params.style && typeof params.style == 'object') {

      let styleParams = {}
      let style = Object.entries(params.style)

      style.unshift(["selector", `.${identifier}`])
      
      style.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if(params.hover && typeof params.hover == 'object') {

      let styleParams = {}
      let style = Object.entries(params.hover)
      
      style.unshift(["selector", `.${identifier}:hover`])
      
      style.map(item => styleParams[item[0]] = item[1])
      
      Style(styleParams)
    }
  }

  return element
}
// CONTAINERS


// TEXT
export function Text(params) {

  let type = 'p'
  
  if(params.type && typeof(params.type) == 'string') {
    type = params.type
  }

  let element = document.createElement(type)
  
  if(params.className && typeof(params.className) == 'string') element.className = params.className

  if(params.id && typeof(params.id) == 'string') element.id = params.id

  if(params.child) render(params.child, element)

  if(params.style && typeof params.style == 'object' ||
  params.hover && typeof params.hover == 'object') {

    let identifier = `${type}${Math.floor(Math.random() * 9999999) + 9999}`
    
    element.classList.add(identifier)
  
    if(params.style && typeof params.style == 'object') {

      let styleParams = {}
      let style = Object.entries(params.style)

      style.unshift(["selector", `.${identifier}`])
      
      style.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if(params.hover && typeof params.hover == 'object') {

      let styleParams = {}
      let style = Object.entries(params.hover)
      
      style.unshift(["selector", `.${identifier}:hover`])
      
      style.map(item => styleParams[item[0]] = item[1])
      
      Style(styleParams)
    }
  }

  return element
}
// TEXT


// INPUT / BUTTON / LINK / CLICK
export function TextInput(params) {

  let type = 'input'
  
  if(params.type.toLowerCase() == 'textarea') type = 'textarea'

  let element = document.createElement(type)

  if(params.className && typeof(params.className) == 'string') element.className = params.className

  if(params.id && typeof(params.id) == 'string') element.id = params.id

  if(type == 'textarea') if(params.rows) element.rows = params.rows

  if(params.name && typeof(params.name) == 'string') element.name = params.name
  
  if(params.value && typeof(params.value) == 'string') element.value = params.value

  if(params.placeHolder && typeof(params.placeHolder) == 'string') element.placeholder = params.placeHolder

  if(params.style && typeof params.style == 'object' ||
  params.hover && typeof params.hover == 'object') {

    let identifier = `${type}${Math.floor(Math.random() * 9999999) + 9999}`
    
    element.classList.add(identifier)
  
    if(params.style && typeof params.style == 'object') {

      let styleParams = {}
      let style = Object.entries(params.style)

      style.unshift(["selector", `.${identifier}`])
      
      style.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if(params.hover && typeof params.hover == 'object') {

      let styleParams = {}
      let style = Object.entries(params.hover)
      
      style.unshift(["selector", `.${identifier}:hover`])
      
      style.map(item => styleParams[item[0]] = item[1])
      
      Style(styleParams)
    }
  }
  
  return element
}

export function GestureDetector(params) {

  let parameters = Object.entries(params)

  parameters = parameters.map(param => {
    if (param[0] != "child" || param[0] != "children") {
      param[0] = param[0].slice(2, param[0].length).toLowerCase()
      return param
    }
  })

  parameters.forEach(event => {
    if(event) {
      params.child.addEventListener(event[0], e => event[1](e))
    }
  })

  params.child.dataset.pointer = ''

  return params.child
}

export function Button(params) {

  let type = 'button'

  let element = document.createElement(type)

  if(params.className && typeof(params.className) == 'string') element.className = params.className

  if(params.id && typeof(params.id) == 'string') element.id = params.id
  
  if(params.onClick && typeof(params.onClick) == 'function') {
    element.onclick = params.onClick
    element.dataset.pointer = ''
  }

  if(params.child) render(params.child, element)

  if(params.style && typeof params.style == 'object' ||
  params.hover && typeof params.hover == 'object') {

    let identifier = `${type}${Math.floor(Math.random() * 9999999) + 9999}`
    
    element.classList.add(identifier)
  
    if(params.style && typeof params.style == 'object') {

      let styleParams = {}
      let style = Object.entries(params.style)

      style.unshift(["selector", `.${identifier}`])
      
      style.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if(params.hover && typeof params.hover == 'object') {

      let styleParams = {}
      let style = Object.entries(params.hover)
      
      style.unshift(["selector", `.${identifier}:hover`])
      
      style.map(item => styleParams[item[0]] = item[1])
      
      Style(styleParams)
    }
  }

  return element
}

export function Link(params) {

  let type = 'a'

  let element = document.createElement(type)

  if(params.className && typeof(params.className) == 'string') element.className = params.className

  if(params.id && typeof(params.id) == 'string') element.id = params.id
  
  if(params.navigate && typeof(params.navigate) == 'string') {
    element.href = params.navigate
  }
  if(params.target && typeof(params.target) == 'string') {
    element.target = params.target
  }

  if(params.child) {
    render(params.child, element)
  } else if(params.children) {
    params.children.forEach(item => {
      render(item, element)
    });
  }

  if(params.preventDefault) element.onclick = (e) => { e.preventDefault() } 

  if(params.style && typeof params.style == 'object' ||
  params.hover && typeof params.hover == 'object') {

    let identifier = `${type}${Math.floor(Math.random() * 9999999) + 9999}`
    
    element.classList.add(identifier)
  
    if(params.style && typeof params.style == 'object') {

      let styleParams = {}
      let style = Object.entries(params.style)

      style.unshift(["selector", `.${identifier}`])
      
      style.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if(params.hover && typeof params.hover == 'object') {

      let styleParams = {}
      let style = Object.entries(params.hover)
      
      style.unshift(["selector", `.${identifier}:hover`])
      
      style.map(item => styleParams[item[0]] = item[1])
      
      Style(styleParams)
    }
  }

  return element
}
// INPUT / BUTTON / LINK / CLICK


// SEPARATOR
export function Line(params) {

  let type = 'hr'

  let element = document.createElement(type)

  let identifier = `${type}${Math.floor(Math.random() * 9999999) + 9999}`
    
  element.classList.add(identifier)

  let width = `calc(${params.width ? params.width : '100%'} - ${params.separator ? params.separator : '0'})`

  Style({
    selector: `.${identifier}`,
    borderWidth: '0',
    width: width,
    height: params.height ? params.height : '1px',
    margin: `${params.separator ? params.separator : '0'} 0`,
    backgroundColor: params.color ? params.color : '#77777750',
  })

  return element
}
// SEPARATOR


// IMAGE
export function Image(params) {

  let type = 'img'

  let element = document.createElement(type)

  if(params.className && typeof(params.className) == 'string') element.className = params.className

  if(params.id && typeof(params.id) == 'string') element.id = params.id

  if(params.alt && typeof(params.alt) == 'string') element.alt = params.alt
  
  if(params.source && typeof(params.source) == 'string') element.src = params.source

  if(params.onClick && typeof(params.onClick) == 'function') {
    element.onclick = params.onClick
    element.dataset.pointer = ''
  }
  
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

  if(params.style && typeof params.style == 'object' ||
  params.hover && typeof params.hover == 'object') {

    let identifier = `${type}${Math.floor(Math.random() * 9999999) + 9999}`
    
    element.classList.add(identifier)
  
    if(params.style && typeof params.style == 'object') {

      let styleParams = {}
      let style = Object.entries(params.style)

      style.unshift(["selector", `.${identifier}`])
      
      style.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if(params.hover && typeof params.hover == 'object') {

      let styleParams = {}
      let style = Object.entries(params.hover)
      
      style.unshift(["selector", `.${identifier}:hover`])
      
      style.map(item => styleParams[item[0]] = item[1])
      
      Style(styleParams)
    }
  }

  return element
}
// IMAGE


// STYLE
export function Style(params) {

  let rules = [Object.entries(params)]

  const elementStyle = document.querySelector("#style")
  
  let styleSheet = elementStyle.sheet

  rules.forEach(rule => {

    let j = 1
    let selector = rule[0][1]
    let propStr = ''

    if (Array.isArray(rule[1][0])) {
      rule = rule[1]
      j = 0
    }

    rule.forEach((prop, index) => {

      let important = false
      let newProp = prop[1]

      if(index != 0) {

        prop[0] = prop[0].split(/(?=[A-Z])/).join("-").toLowerCase()

        let firstL = prop[1].charAt(0)
        let lastL = prop[1].charAt(prop[1].length - 1)
        
        if(firstL === "{" && lastL === "}") {
          prop[1] = prop[1].split('')
          prop[1].shift()
          prop[1].pop()
          newProp = prop[1].join('')
          important = true
        }
      }

      if(prop[0] != 'selector') {
        
        propStr += prop[0] + ': ' + newProp + (important ? ' !important' : '') + ';\n'
      }

    })

    styleSheet.insertRule(selector + '{' + propStr + '}', styleSheet.cssRules.length)
  })

}
// STYLE