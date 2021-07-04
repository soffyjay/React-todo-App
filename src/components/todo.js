import React from 'react';

const Todo = ({text,todo, todos, setTodos}) =>{

    //To delete a todo item

    const handleDelete=()=>{
      setTodos(todos.filter(item=>item.id !== todo.id))
    }

const handleComplete =() =>{
    setTodos(todos.map(el=>{
        if(el.id===todo.id){
            return{...el, completed:!el.completed
            }
        }
        return el;
    }))
}
    return(
    <div className= "todo">
        <li className ={`todo-item ${todo.completed ? "completed" : ''} `}> {text}</li>
        <button className="complete-btn" onClick={handleComplete}><i className="fas fa-check"></i></button>
        <button className="trash-btn" onClick={handleDelete}><i className="fas fa-trash"></i></button>
     </div>
    );
}

export default Todo;