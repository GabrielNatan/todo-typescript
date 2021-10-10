import {useState} from "react"
import {Container} from "./styles"
import {Item} from "../../types/items"

type Props ={
    item: Item
}
export const ListItem = ({item}:Props)=>{
    const [isChecked, setIsChecked] = useState(item.done)
    return(
        <Container done={isChecked}>
            <input 
                type="checkbox" 
                checked={isChecked}
                onChange={(e)=> setIsChecked(e.target.checked)}
            />
            <label>
                {item.name}
            </label>
        </Container>
    )
} 