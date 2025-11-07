import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
export default function Todo() {
    let [task, settask] = useState([{task :"No task", id: uuidv4()}])
    let [text, settext] = useState("")
    function sett(event) {
        settext(event.target.value)
    }
    function seta(){
        settask([...task, {task:text, id : uuidv4()}])
    }
    function del(id)
    {
         settask(task.filter((num)=>num.id!=id))
    }

    return (
        <>
            <h1>Todo List</h1>
            <h2>Add Tasks</h2>
            <input type="text" value={text} onChange={sett}/>
            <button onClick={seta}>Add</button>
            <ul>
              {  task.map((todo) =>{
                    return(
                    <li key={todo.id}>{todo.task} <button style={{margin:5}} onClick={()=>del(todo.id)}>Delete</button></li>
                    )
                }
                )
                
            }
            </ul>
        </>
    )


}