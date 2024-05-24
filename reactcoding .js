//show array items

import React from "react";
import "./style.css";

export default function App() {
  const users = [
    { name: "John Doe", id: 1 },
    { name: "Jane Doe", id: 2 },
    { name: "Billy Doe", id: 3 }
  ];
  return (
    <div>
      {
        users.map(item => {
          return(
            <ul>
              <li key={item.id}>{item.name}</li>
              </ul>
          )
        })
      }
     
    </div>
  );
}
//hide and show
import React, {useState} from "react";
import "./style.css";

export default function App() {
  const[show, setShow] = useState(true)
  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? "hide" :"show"}</button>
     {show && "Toogle the button"}
    </div>
  );
}
//data binding twoway

import React, {useState} from "react";
import "./style.css";

export default function App() {
  const[data, setData] = useState('')
  return (
    <div>
      <input type="text" name="name" value={data} onChange={(e) => setData(e.target.value)}/>
      {
        data
      }
    </div>
  );
}
// disable button
import React, {useState} from "react";
import "./style.css";

export default function App() {
  const[data, setData] = useState('')
  return (
    <div>
      <input type="text" name="name" value={data} onChange={(e) => setData(e.target.value)}/>
      <button disabled={data.length<1}>Submit</button>
      {
        data
      }
    </div>
  );
}
//Update the parent state

import React, {useState} from "react";
import "./style.css";

const Child = ({setValue}) => {
  return(
    <div>
        <button onClick={() => setValue("I am from child")}>child button</button>
      </div>
  )
}
export default function App() {
  const[value, setValue] = useState("i am parent")
  return(
    <div>
      {value}
      <Child setValue={setValue}/>
      </div>
  )
}
//Dynamically add child components (React Children)

import React, {useState} from "react";

const Child = () => {
  return <div>This is child component</div>
}
const Parent = ({children}) => {
  return(
    <div>
      {children}
      </div>
  )
}
const App = () => {
  return(
    <>
    <Parent>
      <Child />
      </Parent>
    </>
  )
  }
export default App

//Add two numbers

import React, {useState} from "react";

const App = () => {
  const[number1, setNumber1]= useState()
  const[number2, setNumber2]= useState()
  const[total, setTotal] = useState(0)
  const calculateSum = () => {
      setTotal(number1 + number2)
  }
  return(
    <>
   <input type="text" onChange={e => setNumber1(+e.target.value)}/>
   <input type="text" onChange={e => setNumber2(+e.target.value)}/>
   <button onClick={calculateSum}>Total</button>
   <p>Total is {total || ""}</p>
    </>
  )
  }
export default App

// Write a functional component called Navbar that renders a navigation bar with links. It should receive an array of links as a prop, and each link should be displayed as an anchor tag within a list item.

import React from 'react';

function Navbar({ links }) {
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

//react accordion and tabs
// life cycles
import React, { useState, useEffect } from 'react';

const App = () => {
  const[show, setShow] = useState(true)
  useEffect(() => {
    console.log("component did mount")
  }, [])
  useEffect(() => {
    //console.log("component did update")
    return () => {
      console.log("unmount")
    }
  }, [show])
  const toggleHandle = () => {
    setShow(!show)
  }
  return(
<div>
  <p>{show ? "Toggle the Text" : null}</p>
  <button onClick={toggleHandle}>Toggle text</button>
  </div>
  )
}
export default App

//React lazy
import React, { useState, useEffect, Suspense } from 'react';

const About = React.lazy(() => import('../About'))

const App = () => {
  
  return(
<div>
  <Suspense fallback= {<div>loading</div>}>
    <About />
    </Suspense>
  </div>
  )
}
export default App

//Hoc
import React, { useState, useEffect } from 'react';

const Hoc = (Component) => {
    return(
      class extends React.Component{
        state = {auth:false}
        render(){
          return(
            <>
            { this.state.auth ? <Component /> : <h1>Please login</h1>}
            </>
          )
        }
      }
    )
}
export default Hoc

// Error Boundary

import React from "react";



class ErrorBoundary extends React.Component{
      constructor(props){
        super(props)
        this.state = {error:null
      }
    }
      componentDidCatch(error) {
        this.setState({error:error})
      }
      render(){
       
          if(this.state.error){
            return <Errorpage />
          }
        
        return this.props.children
      }
}
export default ErrorBoundary

//fetch data and arrange ascending and descending order


import React, {useState, useEffect} from 'react'

const App = () => {
  const[data, setData] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setData(data))
    .catch(error => console.log(error))
  }, [])
  const handlerAscending = () => {
      const users = [...data].sort((a,b) => a.username.localeCompare(b.username))
      setData(users)
  }
  const handlerDescending = () => {
    const users = [...data].sort((a,b) => b.username.localeCompare(a.username))
    setData(users)
}
  return(
    <div>
       <button onClick={() => handlerAscending()}>Ascending</button>
      <button onClick={() => handlerDescending()}>Descending</button>
      {
        data && data.map((item, index) => (
          <div key={item.id}>
            <p>{item.username}</p>
            </div>
        ))
      }
     
      </div>
  )
}
export default App

// theme change

import React, { useState } from 'react';

const themes = {
  light: {
    backgroundColor: "white",
    color:"black"
  },
  dark: {
    backgroundColor: "black",
    color:"white"
  },
  blue: {
    backgroundColor: "lightblue",
    color:"blue"
  },
  green: {
    backgroundColor: "lightgreen",
    color:"green"
  },
}

function App() {
  const[theme, setTheme] = useState("light")
  const handlerChangetheme = (newTheme) => {
    setTheme(newTheme)
  }
  return (
   <div style={themes[theme]}>
     <div className="buttonmodes">
       {Object.keys(themes).map(themename => {
        return  <button onClick={() => handlerChangetheme(themename)}>{themename.charAt(0).toUpperCase() + themename.slice(1)} Mode</button>
       })}
       </div>
     <p>Sample text here pasted</p>
     </div>
  )
}

export default App;


// todo list
import React, {useState} from "react"


const App = () => {
  const[todos, setTodos] = useState([]);
  const [inputValue, setInputValue]= useState('');
  const[editIndex, setEditIndex] = useState(null)

  const addTodo = () => {
    if(inputValue.trim() !== ""){
      if(editIndex !== null){
        let newTodos = [...todos]
        newTodos[editIndex] = inputValue
        setTodos(newTodos)
        setInputValue('')
        setEditIndex(null)
      }
      else{
        setTodos([...todos, inputValue]);
        setInputValue('')
      }
    }

  }
  const removeTodo = (index) => {
    let newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }
  const editTodo = (index) => {
    setInputValue(todos[index])
    setEditIndex(index)
  }
  
  return(
    <div>
      <h2>Todo List</h2>
      <input type="text" name="name" value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <button onClick={addTodo}>{editIndex !== null ? "Update Todo" : "Add Todo"}</button>
        <ul>
          {
            todos.map((todo, index) => (
              <li key={index}>{todos}
              <button onClick={() => removeTodo(index)}>Remove</button>
              <button onClick={() => editTodo(index)}>Edit</button>
              </li>
            ))
          }
          </ul>
      </div>
  )
}
export default App


//import React, {useState} from 'react'
const itemPerPage=3;

const App = ({data}) => {
  const[currentPage, setCurrentPage]=useState(1)
  if(!data || !Array.isArray(data) || data.length===0){
    data = Array.from({length:20}, (_, index) => `Item ${index+1}` )
  }
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItem = data.slice(indexOfFirstItem, indexOfLastItem)

  const paginationHandleChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  return(
    <div>
      <h3>Pagination example</h3> 
      {
        currentItem.map((item, index) => (
          <li key={index}>{item}</li>
        ))
      } 
      {
        Array.from({length:Math.ceil(data.length / itemPerPage)}, (_, index) => (
          <button key={index+1} onClick={() => paginationHandleChange(index+1)}>{index+1}</button>
        ))
      }    
      </div>
  )
}
export default App