import {useState, KeyboardEvent} from "react"
import {Container} from "./styles"

type Props = {
    onEnter: (taskName:string)=>void
}

export const AddArea = ({onEnter}:Props)=>{
    const [inputText,setInputtext] = useState("")

    const handleKeyUp = (e:KeyboardEvent)=>{
        console.log(e.code)
        if(['Enter' , "NumpadEnter"].includes(e.code) && inputText !== ""){
            onEnter(inputText)
            setInputtext("")
        }
    }

    return(
        <Container>
            <div onClick={()=>{onEnter(inputText);setInputtext("")}} className="image">
                ➕
            </div>
        <input 
            value={inputText}
            onChange={(e)=>setInputtext(e.target.value)}
            type="text"
            placeholder="Adicionar tarefa"
            onKeyUp={handleKeyUp}
        />
        </Container>
    )
}