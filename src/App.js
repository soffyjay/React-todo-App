import React,{ useState, useEffect } from 'react';
import './App.css';

//Importing Components
import Form from './components/form';
import TodoList from './components/todoList';

function App() {

  
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status,setStatus] = useState('All');
  const [filteredTodos, setFilteredTodos] =useState([]);

  useEffect(()=>{
    getLocalTodos()
  }, [])

  useEffect(()=>{
   filterHandler()
   saveToLocalTodos()
  },[todos, status])

  const filterHandler=()=>{
    switch(status){
      case 'completed':setFilteredTodos(todos.filter(item=>item.completed===true))
      break;
      case 'uncompleted':setFilteredTodos(todos.filter(item=>item.completed===false))
      break;
      default: setFilteredTodos(todos)
      break;


    }
    
  }
 const saveToLocalTodos=()=>{
   if (localStorage.getItem('todos')===null){
     localStorage.setItem('todos', JSON.stringify([]));
   } else {localStorage.setItem('todos', JSON.stringify(todos))
  }
 }

 const getLocalTodos=()=>{
  if (localStorage.getItem('todos')===null){
    localStorage.setItem('todos', JSON.stringify([]));
  } else {localStorage.setItem('todos', JSON.stringify(todos))
 }

 }
  return (
    <div className="App">
      <header>
      <h1>Soffy's To do List</h1>
      </header>
      <Form todos={todos} inputText = {inputText}  setTodos={setTodos} setInputText = {setInputText}
      setStatus={setStatus} />
      <TodoList filteredTodos={filteredTodos}  setTodos ={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
