import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import {Todoitem} from "./MyComponents/Todoitem";
import { AddTodo} from "./MyComponents/AddTodo";
import { About} from "./MyComponents/About";
import React, { useState,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null)
  initTodo=[];
  else
  initTodo=JSON.parse(localStorage.getItem("todos"));

  const onDelete = (todo)=>{
    console.log(" I am onDelete of todo ",todo);
    setTodos(todos.filter((item)=>{
      return item!==todo;
    }))
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const [todos, setTodos] = useState(initTodo);

  const addTodo=(title,desc)=>{
    let sno;
    if(todos.length==0){
      sno=1;
    }
    else{
      sno=todos[todos.length-1].sno+1;
    }
    let myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo]);
  }
    useEffect(() => {
      localStorage.setItem("todos",JSON.stringify(todos));
    }, [todos])
  return (
    <>
      <Header title="To-do List" searchBar= {true}/>
      {/* <Header title="To-do List" /> */}
      {/* <Header title="My to-do list" searchBar={false}/> */}

      {/* <Router>

      <Routes> */}
          {/* <Route exact path="/" render={()=>{
            return(
              <> */}
                  <AddTodo addTodo={addTodo}/>
                  <Todos todos={todos} onDelete={onDelete}/>
              {/* </>
            )
          }}/> */}

          
          {/* <Route exact path="/about" component={About}></Route> */}
      {/* </Routes>
      </Router> */}

      <Footer/>
      {/* //<Todoitem/> */}
x    </>
  );
}

export default App;
