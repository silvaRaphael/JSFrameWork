import { render } from "./hooks.js";
import ComponentsStyle from "./ComponentsStyle.js";

// CONTAINERS
export function View({ className, id, child, children, crossAxis, style, hover }) {

  let type = 'div'

  let element = document.createElement(type)

  if(className && typeof(className) == 'string') element.className = className

  if(id && typeof(id) == 'string') element.id = id
  
  if(child) {
    render(child, element)
  } else if(children) {
    children.forEach(item => {
      render(item, element)
    });
  }

  element.dataset.view = ''

  if(crossAxis) element.dataset.column = ''

  if(style && typeof style == 'object' ||
  hover && typeof hover == 'object') {

    let identifier = `${type}${Math.floor(Math.random() * 9999999) + 9999}`
    
    element.classList.add(identifier)
  
    if(style && typeof style == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(style)

      newStyle.unshift(["selector", `.${identifier}`])
      
      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if(hover && typeof hover == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(hover)
      
      newStyle.unshift(["selector", `.${identifier}:hover`])
      
      newStyle.map(item => styleParams[item[0]] = item[1])
      
      Style(styleParams)
    }
  }
  
  return element
}

export function Container({ className, id, child, children, crossAxis, style, hover }) {

  let type = 'div'

  let element = document.createElement(type)

  if(className && typeof(className) == 'string') element.className = className

  if(id && typeof(id) == 'string') element.id = id
  
  if(child) {
    render(child, element)
  } else if(children) {
    children.forEach(item => {
      render(item, element)
    });
  }

  element.dataset.container = ''

  if(crossAxis) element.dataset.column = ''

  if(style && typeof style == 'object' ||
  hover && typeof hover == 'object') {

    let identifier = `${type}${Math.floor(Math.random() * 9999999) + 9999}`
    
    element.classList.add(identifier)
  
    if(style && typeof style == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(style)

      newStyle.unshift(["selector", `.${identifier}`])
      
      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if(hover && typeof hover == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(hover)
      
      newStyle.unshift(["selector", `.${identifier}:hover`])
      
      newStyle.map(item => styleParams[item[0]] = item[1])
      
      Style(styleParams)
    }
  }
  
  return element
}

export function Grid({ className, id, child, children, crossAxis, style, hover, rows, columns, gap, rowGap, columnGap }) {

  let type = 'div'

  let element = document.createElement(type)

  if(className && typeof(className) == 'string') element.className = className

  if(id && typeof(id) == 'string') element.id = id

  if(child) {
    render(child, element)
  } else if(children) {
    children.forEach(item => {
      render(item, element)
    });
  }

  element.dataset.grid = ''

  if(style && typeof style == 'object' ||
  hover && typeof hover == 'object' ||
  rows ||
  columns ||
  gap ||
  rowGap ||
  columnGap) {

    let identifier = `${type}${Math.floor(Math.random() * 9999999) + 9999}`
    
    element.classList.add(identifier)

    if(gap) {
      Style({
        selector: `.${identifier}`,
        gap: gap ? gap.toString() : '0'
      })
    }

    if(rowGap) {
      Style({
        selector: `.${identifier}`,
        rowGap: rowGap ? rowGap.toString() : '0'
      })
    }

    if(columnGap) {
      Style({
        selector: `.${identifier}`,
        columnGap: columnGap ? columnGap.toString() : '0'
      })
    }
    
    if(rows) {
      Style({
        selector: `.${identifier}`,
        gridTemplateRows: `repeat( ${rows}, 1fr )`,
      })
    }

    if(columns) {
      Style({
        selector: `.${identifier}`,
        gridTemplateColumns: `repeat( ${columns}, 1fr )`,
      })
    }
  
    if(style && typeof style == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(style)

      newStyle.unshift(["selector", `.${identifier}`])
      
      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if(hover && typeof hover == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(hover)
      
      newStyle.unshift(["selector", `.${identifier}:hover`])
      
      newStyle.map(item => styleParams[item[0]] = item[1])
      
      Style(styleParams)
    }
  }
  
  return element
}

export function Center({ className, id, child, children, style, hover }) {

  let type = 'div'

  let element = document.createElement(type)

  if(className && typeof(className) == 'string') element.className = className

  if(id && typeof(id) == 'string') element.id = id
  
  if(child) render(child, element)
  
  element.dataset.center = ''

  if(style && typeof style == 'object' ||
  hover && typeof hover == 'object') {

    let identifier = `${type}${Math.floor(Math.random() * 9999999) + 9999}`
    
    element.classList.add(identifier)
  
    if(style && typeof style == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(style)

      newStyle.unshift(["selector", `.${identifier}`])
      
      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if(hover && typeof hover == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(hover)
      
      newStyle.unshift(["selector", `.${identifier}:hover`])
      
      newStyle.map(item => styleParams[item[0]] = item[1])
      
      Style(styleParams)
    }
  }

  return element
}

export function Row({ className, id, child, children, crossAxis, style, hover }) {

  let type = 'div'

  let element = document.createElement(type)

  if(className && typeof(className) == 'string') element.className = className

  if(id && typeof(id) == 'string') element.id = id
  
  if(child) {
    render(child, element)
  } else if(children) {
    children.forEach(item => {
      render(item, element)
    });
  }

  element.dataset.row = ''

  if(crossAxis) element.dataset.column = ''

  if(style && typeof style == 'object' ||
  hover && typeof hover == 'object') {

    let identifier = `${type}${Math.floor(Math.random() * 9999999) + 9999}`
    
    element.classList.add(identifier)
  
    if(style && typeof style == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(style)

      newStyle.unshift(["selector", `.${identifier}`])
      
      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if(hover && typeof hover == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(hover)
      
      newStyle.unshift(["selector", `.${identifier}:hover`])
      
      newStyle.map(item => styleParams[item[0]] = item[1])
      
      Style(styleParams)
    }
  }

  return element
}

export function Column({ className, id, child, children, crossAxis, style, hover }) {

  let type = 'div'

  let element = document.createElement(type)

  if(className && typeof(className) == 'string') element.className = className

  if(id && typeof(id) == 'string') element.id = id
  
  if(child) {
    render(child, element)
  } else if(children) {
    children.forEach(item => {
      render(item, element)
    });
  }

  element.dataset.column = ''

  if(crossAxis) element.dataset.row = ''

  if(style && typeof style == 'object' ||
  hover && typeof hover == 'object') {

    let identifier = `${type}${Math.floor(Math.random() * 9999999) + 9999}`
    
    element.classList.add(identifier)
  
    if(style && typeof style == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(style)

      newStyle.unshift(["selector", `.${identifier}`])
      
      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if(hover && typeof hover == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(hover)
      
      newStyle.unshift(["selector", `.${identifier}:hover`])
      
      newStyle.map(item => styleParams[item[0]] = item[1])
      
      Style(styleParams)
    }
  }

  return element
}
// CONTAINERS


// TEXT
export function Text({ type, className, id, child, style, hover }) {

  let elemType = 'p'
  
  if(type && typeof(type) == 'string') {
    type = type
  }

  let element = document.createElement(elemType)
  
  if(className && typeof(className) == 'string') element.className = className

  if(id && typeof(id) == 'string') element.id = id

  if(child) render(child, element)

  if(style && typeof style == 'object' ||
  hover && typeof hover == 'object') {

    let identifier = `${type}${Math.floor(Math.random() * 9999999) + 9999}`
    
    element.classList.add(identifier)
  
    if(style && typeof style == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(style)

      newStyle.unshift(["selector", `.${identifier}`])
      
      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if(hover && typeof hover == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(hover)
      
      newStyle.unshift(["selector", `.${identifier}:hover`])
      
      newStyle.map(item => styleParams[item[0]] = item[1])
      
      Style(styleParams)
    }
  }

  return element
}
// TEXT


// INPUT / BUTTON / LINK / CLICK / LIST / ICONTEXT
export function TextInput({ type, className, id, child, children, crossAxis, style, hover, rows, name, value, placeHolder,  }) {

  let elemType = 'input'
  
  if(type && typeof type == 'string' && type.toLowerCase() == 'textarea') elemType = 'textarea'

  let element = document.createElement(type)

  if(className && typeof(className) == 'string') element.className = className

  if(id && typeof(id) == 'string') element.id = id

  if(type == 'textarea') if(rows) element.rows = rows

  if(type && typeof type == 'string' && type.toLowerCase() !== 'textarea') element.type = type

  if(name && typeof(name) == 'string') element.name = name
  
  if(value && typeof(value) == 'string') element.value = value

  if(placeHolder && typeof(placeHolder) == 'string') element.placeholder = placeHolder

  if(style && typeof style == 'object' ||
  hover && typeof hover == 'object') {

    let identifier = `${type}${Math.floor(Math.random() * 9999999) + 9999}`
    
    element.classList.add(identifier)
  
    if(style && typeof style == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(style)

      newStyle.unshift(["selector", `.${identifier}`])
      
      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if(hover && typeof hover == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(hover)
      
      newStyle.unshift(["selector", `.${identifier}:hover`])
      
      newStyle.map(item => styleParams[item[0]] = item[1])
      
      Style(styleParams)
    }
  }
  
  return element
}

export function GestureDetector(events) {

  let parameters = Object.entries(events)

  parameters = parameters.map(param => {
    if (param[0] != "child" && param[0] != "children") {
      param[0] = param[0].slice(2, param[0].length).toLowerCase()
      return param
    }
  })

  parameters.forEach(event => {
    if(event) {
      events.child.addEventListener(event[0], e => event[1](e))
    }
  })

  events.child.dataset.pointer = ''

  return events.child
}

export function Button({ className, id, child, style, hover }) {

  let type = 'button'

  let element = document.createElement(type)

  if(className && typeof(className) == 'string') element.className = className

  if(id && typeof(id) == 'string') element.id = id

  if(child) render(child, element)

  if(style && typeof style == 'object' ||
  hover && typeof hover == 'object') {

    let identifier = `${type}${Math.floor(Math.random() * 9999999) + 9999}`
    
    element.classList.add(identifier)
  
    if(style && typeof style == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(style)

      newStyle.unshift(["selector", `.${identifier}`])
      
      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if(hover && typeof hover == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(hover)
      
      newStyle.unshift(["selector", `.${identifier}:hover`])
      
      newStyle.map(item => styleParams[item[0]] = item[1])
      
      Style(styleParams)
    }
  }

  return element
}

export function Link({ className, id, navigate, target, child, children, preventDefault, style, hover }) {

  let type = 'a'

  let element = document.createElement(type)

  if(className && typeof(className) == 'string') element.className = className

  if(id && typeof(id) == 'string') element.id = id
  
  if(navigate && typeof(navigate) == 'string') {
    element.href = navigate
  }
  if(target && typeof(target) == 'string') {
    element.target = target
  }

  if(child) {
    render(child, element)
  } else if(children) {
    children.forEach(item => {
      render(item, element)
    });
  }

  if(preventDefault) element.onclick = (e) => { e.preventDefault() } 

  if(style && typeof style == 'object' ||
  hover && typeof hover == 'object') {

    let identifier = `${type}${Math.floor(Math.random() * 9999999) + 9999}`
    
    element.classList.add(identifier)
  
    if(style && typeof style == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(style)

      newStyle.unshift(["selector", `.${identifier}`])
      
      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if(hover && typeof hover == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(hover)
      
      newStyle.unshift(["selector", `.${identifier}:hover`])
      
      newStyle.map(item => styleParams[item[0]] = item[1])
      
      Style(styleParams)
    }
  }

  return element
}

export function List({ title, children, align, size, titleStyle, style }) {
  
  return (
    Column({
      style: {
        width: size ? size : '100%',
        alignItems: align ? align : 'flex-start',
        ...style
      },
      children: [
        title ? Text({
          type: 'span',
          style: titleStyle ? titleStyle : '',
          child: title
        }) : '',
        Column({
          style: {
            alignItems: align ? align : 'flex-start',
            margin: '.5rem 0 1rem'
          },
          children: children ? children : ''
        })
      ]
    })
  )
}

export function IconText({ icon, iconStyle, text, textStyle, align, spacing, style, hover }) {

  spacing = typeof spacing == 'number' ? `${spacing}px` : spacing
  
  return (
    Row({
      style: {
        margin: '0 .25rem 0',
        alignItems : align ? align : 'flex-start',
        transition: '.2s',
        ...style
      },
      hover: hover ? hover : '',
      children: [
        typeof icon == 'string' ?
        Image({
          source: icon,
          style: {
            width: '.8rem',
            marginRight: spacing ? spacing : '8px',
            ...iconStyle
          },
        }) :
        Center({
          style: { marginRight: spacing ? spacing : '8px', },
          child: icon
        }),
        typeof text == 'object' ? text :
        Text({
          child: text,
          style: textStyle ? textStyle : ''
        })
      ]
    })
  )
}
// INPUT / BUTTON / LINK / CLICK / LIST / ICONTEXT


// SEPARATOR
export function Line({ width, separator, height, color }) {

  let type = 'hr'

  let element = document.createElement(type)

  let identifier = `${type}${Math.floor(Math.random() * 9999999) + 9999}`
    
  element.classList.add(identifier)

  Style({
    selector: `.${identifier}`,
    borderWidth: '0',
    width: `calc(${width ? width : '100%'} - ${separator ? separator : '0'})`,
    height: height ? height : '1px',
    margin: `${separator ? separator : '0'} 0`,
    backgroundColor: color ? color : '#1b1b1b',
  })

  return element
}
// SEPARATOR


// IMAGE / ICON
export function Image({ className, id, alt, source, sizeMode, size, style, hover }) {

  let type = 'img'

  let element = document.createElement(type)

  if(className && typeof(className) == 'string') element.className = className

  if(id && typeof(id) == 'string') element.id = id

  if(alt && typeof(alt) == 'string') element.alt = alt
  
  if(source && typeof(source) == 'string') element.src = source

  if(sizeMode && typeof(sizeMode) == 'string') {
    element.style.objectFit = sizeMode
  }

  if(size && typeof(size) == 'object') {
    if(typeof(size[0]) == 'number') {
      element.width = size[0]
    } else {
      element.style.width = size[0]
    }
    if(typeof(size[1]) == 'number') {
      element.height = size[1]
    } else {
      element.style.height = size[1]
    }
  }

  if(style && typeof style == 'object' ||
  hover && typeof hover == 'object') {

    let identifier = `${type}${Math.floor(Math.random() * 9999999) + 9999}`
    
    element.classList.add(identifier)
  
    if(style && typeof style == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(style)

      newStyle.unshift(["selector", `.${identifier}`])
      
      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if(hover && typeof hover == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(hover)
      
      newStyle.unshift(["selector", `.${identifier}:hover`])
      
      newStyle.map(item => styleParams[item[0]] = item[1])
      
      Style(styleParams)
    }
  }

  return element
}

export function Icon({ name, color, size, zIndex, opacity }) {

  let type = 'i'

  let element = document.createElement(type)

  element.className = name.split(' ').length == 1 ? 'fas ' : ''

  if(name && typeof(name) == 'string') element.className += name

  if(color && typeof color == 'string' || size || zIndex || opacity) {

    let identifier = `${type}${Math.floor(Math.random() * 9999999) + 9999}`
    
    element.classList.add(identifier)

    let styleParams = { selector: `.${identifier}` }

    if(color) styleParams.color = color

    if(size) styleParams.fontSize = typeof(size) == 'number' ? `${size}px` : size
    
    if(zIndex) styleParams.zIndex = zIndex.toString()

    if(opacity) styleParams.opacity = `${opacity}`

    Style(styleParams)

  }

  return element
}
// IMAGE / ICON


// STYLE
export function Style(params) {

  let rules = [Object.entries(params)]
    
  const elementStyle = document.querySelector("#style")
    
  let styleSheet = elementStyle.sheet

  if(params) {
    if(params.fonts) {
      if(params.fonts.length > 0) {
        params.fonts.forEach(font => {
          styleSheet.insertRule(font)
        })
      }
    } else {
      rules.forEach(rule => {
        if(rule.length > 1) {

          let j = 1
          let selector = rule[0][1]
          let propStr = ''
    
          if (Array.isArray(rule[1][0])) {
            rule = rule[1]
            j = 0
          }
    
          rule.forEach((prop, index) => {
    
            if(prop[1]) {
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
            }
          })
    
          styleSheet.insertRule(selector + '{' + propStr + '}', styleSheet.cssRules.length)
        }
      })
    }
  }
}
// STYLE