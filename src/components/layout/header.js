import React from 'react'
import {Link} from 'react-router-dom'
const style = {
    backgroundColor : 'black',
    color : 'white',
    textAlign : 'center', 
    padding: '10px'
}
const linkStyle={
    color : 'white',
    textDecoration : 'none'
}

export default function Header() {

    return (
        <header style={style}>
            <h1>
                Todo List App
            </h1>
            <Link style={linkStyle} to="/">Home</Link> |
            <Link style={linkStyle} to='/about'>About</Link>
        </header>
    )
}

