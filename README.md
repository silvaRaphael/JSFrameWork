
# Componentes

### Render Components
```javascript
// Renderiza um componente em tela
render(Component);
```

### State Components
```javascript
// Componente com mudança de estado
Statefull({
  key: ComponentName,
  child: Component
})

// State só funciona dentro do Statefull
const [ state, setState ] = State(initialState, ComponentName)

// Effect só funciona dentro do Statefull
Effect(Function, Array(variables to listen for change), ComponentName)

Effect(() => {
  console.log('Hello');
}, [/* se vazio executa apenas uma vez */], ComponentName);
```

### Container Components
```javascript
View({
  className: String,
  id: String,
  ?child: Component,
  ?children: Array(Components),
  crossAxis: Bool,
  style: Object,
  hover: Object,
  animated: Object
})

Container({
  className: String,
  id: String,
  ?child: Component,
  ?children: Array(Components),
  crossAxis: Bool,
  style: Object,
  hover: Object,
  animated: Object
})

Grid({
  className: String,
  id: String,
  ?child: Component,
  ?children: Array(Components),
  crossAxis: Bool,
  rows: Number,
  columns: Number,
  gap: String(px),
  rowGap: String(px),
  columnGap: String(px),
  style: Object,
  hover: Object,
  animated: Object
})

Center({
  className: String,
  id: String,
  child: Component,
  style: Object,
  hover: Object,
  animated: Object
})

Row({
  className: String,
  id: String,
  ?child: Component,
  ?children: Array(Components),
  crossAxis: Bool,
  style: Object,
  hover: Object,
  animated: Object
})

Column({
  className: String,
  id: String,
  ?child: Component,
  ?children: Array(Components),
  crossAxis: Bool,
  style: Object,
  hover: Object,
  animated: Object
})

Expanded({
  className: String,
  id: String,
  ?child: Component,
  ?children: Array(Components),
  crossAxis: Bool,
  style: Object,
  hover: Object,
  animated: Object
})
```
### Text/Clickable Components
```javascript
Text({
  ?type: String(!p,span,h1...h6),
  contenteditable: Bool,
  className: String,
  id: String,
  child: Component,
  style: Object,
  hover: Object,
  animated: Object
})

Button({
  className: String,
  id: String,
  child: Component,
  style: Object,
  hover: Object,
  animated: Object
})

Select({
  name: String,
  value: String || Number,
  className: String,
  id: String,
  children: Array(Components(Option)),
  style: Object,
  hover: Object,
  animated: Object
})

Option({
  selected: Bool,
  value: String || Number,
  child: Component
})

TextInput({
  type: String(text,number,date...),
  ?rows: Number,
  ?checked: Bool,
  className: String,
  id: String,
  autocomplete: String,
  name: String,
  value: String || Number,
  placeholder: String,
  style: Object,
  hover: Object,
  animated: Object
})

GestureDetector({
  ?onSomeEvent: Function,
  child: Component
})

Link({
  className: String,
  id: String,
  to: String(path),
  ?child: Component,
  ?children: Array(Components),
  ?preventDefault: Bool,
  style: Object,
  hover: Object,
  animated: Object
})
```

### Image/Icon Components
```javascript
Image({
  className: String,
  id: String,
  alt: String,
  source: String(imgPath),
  sizeMode: String(objectFit),
  size: Array(width(Number || String(px || %)), height(Number || String(px || %))),
  style: Object,
  hover: Object,
  animated: Object
})

Icon({
  name: String(fontAweasome className),
  color: String,
  size: Number || String(px || %),
  zIndex: Number || String,
  opacity: Number
})
```

### Styling Components
```javascript
Style({
  selector: String(className, id, ...),
  backgroundColor: 'red',
  ...
})

Animated({
  selector: String(className, id, ...),
  type: String(property to animate, backgroundColor, width, ...),
  time: Number(animation duration),
  values: Array(start to end),
  count: Number(iteration count),
  transition: String(linear, ease, ...),
  direction: String(normal, alternate, reverse, ...),
  ?onload: Bool
})
```



## Uso/Exemplos

```javascript
import { render } from "../assets/modules/hooks.js";
import { Router, RouterLink } from "../assets/modules/Router.js";
import { Center, Column, Text } from "../assets/modules/index.js";
import { Colors, Fonts, Sizes } from "../config/config.js";

function Home() {
  return Center({
    style: {
      height: '100vh',
      backgroundColor: Colors.bodyColor
    },
    child: Column({
      children: [
        Text({
          style: {
            color: Colors.textColor,
            fontFamily: Fonts.primary,
            fontWeight: '500',
            fontSize: Sizes.title
          },
          child: 'Home Page',
        }),
        Text({
          child: 'Comece seu projeto em src/main.js'
        }),
      ]
    })
  });
}

function Error() {
  return Center({
    style: {
      height: '100vh',
      backgroundColor: Colors.bodyColor
    },
    child: Column({
      children: [
        Text({
          style: {
            color: Colors.textColor,
            fontFamily: Fonts.primary,
            fontWeight: '500',
            fontSize: Sizes.title
          },
          child: 'Página não Encontrada!',
        }),
        RouterLink({
          to: '/',
          child: 'Ir para Home'
        })
      ]
    })
  });
}

export default function AppRoutes() {
  return Router({
    routes: [
      { component: Home, path: '/' },
      { component: Error, path: '/error' },
    ]
  });
}

render(AppRoutes());
```
