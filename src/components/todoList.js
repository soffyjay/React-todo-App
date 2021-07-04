import React from 'react';
//Components import

import Todo from './todo';

const TodoList =({todos, filteredTodos, setTodos}) =>{
    return(
        <div className="todo-container">
      <ul className="todo-list">
      {filteredTodos.map(todo=>(
        <Todo key={todo.id} todos ={todos} setTodos ={setTodos} text={todo.text}
        todo={todo}/>
      ))}
      </ul>
    </div>

    )
}

export default TodoList;