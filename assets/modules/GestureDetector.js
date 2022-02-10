export default function GestureDetector(params) {

  let parameters = Object.entries(params)

  parameters = parameters.map(param => {
    if (param[0] != "child") {
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