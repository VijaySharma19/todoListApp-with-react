import React, { Component } from 'react'

export class TodoItem extends Component {
    

    getStyle = () =>{
        return {
            padding: '10px',
            margin : '0px',
            borderBottom: '1px solid white',
            fontSize : '20px',
            textDecoration : this.props.TodoItem.isDone ? 'line-through' : 'none',
            backgroundColor : '#f4f4f4'
        }
    }

    

    render() {
        const buttonStyle ={
            backgroundColor : 'red', 
            color : "white",

            padding : '3px 5px',
            float : 'right',
            cursour : 'pointer',
            borderRadius : '50%'
        }
        const { id, title } = this.props.TodoItem
        return (
        <p style={this.getStyle()}>
            <input type="checkbox" onChange = {this.props.makeChange.bind(this,id)} />{" "} 
            {title}  
            <button style={buttonStyle} onClick={this.props.removeTodo.bind(this,id)}>X</button>
             
        </p>
        )
    }
}

export default TodoItem
