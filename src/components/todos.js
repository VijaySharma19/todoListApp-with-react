import React from 'react';
import TodoItem from './TodoItem'

class  todos extends React.Component {
    
 render(){
      
    return (this.props.todoList.map((todo)=>{
        return <TodoItem 
            key={todo.id} 
            TodoItem = {todo}
            makeChange={this.props.makeChange} 
            removeTodo= {this.props.removeTodo}
            
         />
    }));
 }
}

export default todos;