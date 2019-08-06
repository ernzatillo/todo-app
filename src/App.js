import React from "react"
import TodoItem from "./components/TodoItem"
import todosData from "./todosData"

// function App(){
//   const todoItems = todosData.map(item => <TodoItem key={item.id} item={item} />)
//   return(
//     <div className="todo-list">
//       <h1>TODO LIST</h1>
//       { todoItems }
//     </div>
//   )

// }

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      todos: todosData  //loads the imported todosData file
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    //console.log("changed!", id)

    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return (todo)
      })
      return {
        todos: updatedTodos
      }
    })
    
   }

  render(){
    const todoItems = this.state.todos.map( item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
    return(
      <div>
          <h1>Todo List</h1>
          {todoItems}


      </div>
    )
  }


}

export default App

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from "react"
// import "./App.css"

// function App(){
//   const name = "Ernz"

//   const date = new Date()
//     const hours = date.getHours()
//   let timeOfDay

//   if(hours < 12){
//     timeOfDay = "Morning"
//   }else if(hours >=12 && hours < 17){
//     timeOfDay = "Afternoon"
//   }else{
//     timeOfDay = "Night"
//   }

//   const styles = {
//     color:"green", 
//     backgroundColor: "gray"
//   }
      

//   return(
//     <div>
//       <p>{timeOfDay}</p>
//       <h1 style={styles}>{`Hi ${name}! Please pick one`}</h1>
//       <h1 className="h1-main">Todo App!</h1>
//       <div>
//         <input type="checkbox"/>
//         <label>Checkbox 1</label>
//       </div>
//       <div>
//         <input type="checkbox" name="check2"/>
//         <label for="check2">Checkbox 2</label>
//       </div>
//       <div>
//         <input type="checkbox" name="check3"/>
//         <label for="check3">Checkbox 3</label>
//       </div>
//       <div>
//         <input type="checkbox" name="check4"/>
//         <label for="check4">Checkbox 4</label>
//       </div>
//     </div>
//   )
// }


