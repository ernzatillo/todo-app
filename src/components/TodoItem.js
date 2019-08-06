import React from "react"

function TodoItem(props){

    return(
        <div>
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id) } 
            />    
                
                <p style={{ textDecorationLine: props.item.completed && 'line-through' }}> { props.item.text }</p>
            <hr />           
        </div>

    )
}


export default TodoItem