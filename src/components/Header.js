import React, { Component } from 'react'
import {Link} from "react-router-dom"


export default class Header extends Component {
    
  render() {
    return (
      <div>
        <header>
          <div className="container">
            <h1 id="logo">WEST COAST CRIBS</h1>

            <nav>
              <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/services"><li>Services</li></Link>
                <Link to="/about"><li>About</li></Link>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    )
  }
}
