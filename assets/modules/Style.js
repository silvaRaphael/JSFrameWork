export default function Style(params) {

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

      propStr += prop[0] + ': ' + newProp + (important ? ' !important' : '') + ';\n'
    })

    styleSheet.insertRule(selector + '{' + propStr + '}', styleSheet.cssRules.length)
  })

}