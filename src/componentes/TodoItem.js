import { useState } from "react"

const TodoItem = ({todoObj, onEdit}) => {

    const [editObj, setEditObj] = useState ("")

    const editStatus = (e) => {

        onEdit (todoObj.id, {
            task : todoObj.task,
            student : todoObj.student,
            isCompleted : e.target.checked
        })
    }

    const onSubmit = (res) => {
        console.log(res)
        setEditObj(res)
    }

/*  const handleSubmit = (id,obj) => {
        setEditObj(id)
        setEditObj(obj)    
    } */

    return(
        <div>
            <form onSubmit={(onSubmit)}>
            <h1>{todoObj.task}</h1>
            <p>{todoObj.student}</p>
            <h3>{todoObj.id}</h3>
            <input 
            type="checkbox" 
            onChange={editStatus} 
            checked={todoObj.isCompleted} />
            <button onClick={() => onEdit(todoObj.id)}>Editar</button>
            </form>
        </div>
    )
}

export default TodoItem