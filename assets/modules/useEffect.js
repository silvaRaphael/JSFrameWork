const effects = []
let effectIndex = 0
let executions = 1

export default function useEffect(toExec, deps) {

  let dependencies = !deps ? [] : deps

  let index = effectIndex

  effects[index] = {
    "executions": executions,
    "dependencies": dependencies,
    "function": toExec
  }

  if(effects[index].dependencies.length == "0") {
    effects[index].executions == 1 && effects[index].function()
  }

  executions++
  effectIndex++
}