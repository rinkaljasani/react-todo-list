import React, { useState } from 'react'
import uuid from 'react-uuid'

function TodoForm({addTodo}) {
    const [Todo, setTodo] = useState({
        id:"",
        task:"",
        completed:false,
    });

    function handleInputChange(e){
        setTodo({
            ...Todo,
            task:e.target.value,
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        if(Todo.task.trim()){
            addTodo({
                ...Todo,
                id: uuid(),

            });
            // reset todo 
            setTodo({ ...Todo,task:""});
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={Todo.task} onChange={handleInputChange} name="task"/>
                <button name="submit" >Submit</button>
            </form>
        </div>
    )
}

export default TodoForm
