import React, { Component } from 'react'
import '.App.css';
import {Link} from 'react-router-dom'

export default class Nav extends Component {
    render(){
        return (
            <nav>
                <h3>Nav Page</h3>
                <ul className="nav-links">
                    <Link style={{ textDecoration: 'none' }} to="/"><li>Home</li></Link>
                    <Link style={{ textDecoration: 'none' }} to="/items"><li>ToDo</li></Link>
                    <Link style={{ textDecoration: 'none' }} to="/about"><li>Contact</li></Link>
                </ul>
            </nav>
        )
    }
}