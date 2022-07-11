import React from 'react'

const  TodoList = (props) => {
    // const {text,onSelect} = props
    return (
        <>
            <li className="list-group-item d-flex justify-content-between align-items-center mb-3">
                {props.text}
                <button className="btn btn-border-none" 
                    onClick = {() => {
                        props.onSelect(props.id);
                    }}>
                    <span className="badge bg-danger rounded-pill">X</span> 
                </button>
            </li>

          </>
    )
}

export default TodoList

