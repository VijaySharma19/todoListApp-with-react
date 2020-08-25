import React from 'react';
import { BrowserRouter as Router ,Route } from 'react-router-dom'
import Todos from './components/todos'
import Header from './components/layout/header'
import AddTodo from './addTodo'
import About from './paths/about'

import axios from 'axios'
import './App.css';

class  App extends React.Component {

  state ={
    
    todos : [

    ]
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((res)=>{
        this.setState({todos : res.data})
      })
  }

  // Check the completed todos
  makeChange=(id)=>{
    this.setState({ todos : this.state.todos.map((todo)=>{
      if(todo.id===id){
        todo.isDone = !todo.isDone
      }
      return todo;
    })})
  }

  // Delete Todos
  removeTodo=(id)=>{
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(()=>{
        this.setState({ todos : [...this.state.todos.filter(todo => todo.id!==id)]})
      })
  }

  // Add new Todos
  addTodos = (title)=>{
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title : title,
      isDone : false
    }).then((res)=>{
      this.setState({todos : [...this.state.todos,res.data]})
    })
  }

  render(){
    
     return (
         <Router>
           <div className="App">
            <Header >

            </Header>
            <Route  exact path='/' render={props=>(
              <React.Fragment>
                <AddTodo
                    addTodo= {this.addTodos}
                ></AddTodo>
                  <Todos 
                    todoList = {this.state.todos} 
                    makeChange={this.makeChange }
                    removeTodo= {this.removeTodo}
                  />
              </React.Fragment>
            )} />
            <Route path='/about' component={About}></Route>
          </div>
         </Router>
       );
  }
 }

export default App;
