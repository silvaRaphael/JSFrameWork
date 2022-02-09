import { useEffect, useState } from '../../assets/modules/states.js'
import { View, Text, Image, Button, Column, TextInput, Center } from '../../assets/modules/basicComponents.js'
import Style from '../../assets/modules/Style.js'

export default function Home() {

  const [ num, setNum ] = useState(0)
  const [ name, setName ] = useState("")

  return (
    Column({
      children: [
        Text({
          style: {
            color: "red",
            fontWeight: "bold"
          },
          child: `THE NUMBER IS ${num}`
        }),
        Button({
          child: "ADD 1",
          onPressed: () => {
            setNum(num + 1)
          }
        }),
        Button({
          child: "REMOVE 1",
          onPressed: () => {
            setNum(num - 1)
          }
        }),
        TextInput({
          placeHolder: "NOME",
          type: "text",
          name: "nome",
          value: name,
          onBlur: ({value}) => setName(value),
        }),
        Text({
          type: "span",
          style: {
            color: "blue",
            fontSize: "20px",
          },
          child: name
        })
      ]
    })
  )
}