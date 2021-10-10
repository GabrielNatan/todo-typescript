import { useState, useEffect } from "react";
import { Area, Container, Header } from "./App.styles"
import { Item } from "./types/items"
import { ListItem } from "./Components/ListItem"
import { AddArea } from "./Components/AddArea";
function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Comprar pc", done: false },
    { id: 2, name: "Comprar pc", done: true },
  ])

  const handleAddTask = (taskName:string) =>{
      let newList = [...list]
      newList.push({
        id: list.length + 1,
        name:taskName,
        done:false
      })

      setList(newList)
  }

  return (
    <Container >
      <Area >
        <Header>Lista de Tarefas</Header>
        <AddArea onEnter={handleAddTask}/>
        {list.map((item, index) => {
          return (
            <ListItem key={item.id} item={item} />
          )
        })

        }
      </Area>
    </Container>
  );
}

export default App;
