import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class homePage extends Component {
  render() {
    return (
      <div>
        <div id="homeContainer">
          <div id="mySidebar">
              <Link to="/houses" className="sideBarList"><p className="sideBarList2">Houses For Sale</p></Link>
              <Link to="/apartments" className="sideBarList"><p className="sideBarList2">Apartments For Rent</p></Link>
              <Link to="/rent/houses" className="sideBarList"><p className="sideBarList2">Houses For Rent</p></Link>
              <Link to="/contact" className="sideBarList"><p className="sideBarList2">Contact Us</p></Link>
          </div>

          <div id="homeImage">
          </div>
        </div>

          <div className="infoBoxes">
            <div className="infoBox">
              <img src="./images/money.png" alt="" className="infoPic"/>
              <h3>Buy Houses</h3>
              <p>Buy Houses Accross the USA</p>
            </div>

            <div className="infoBox">
              <img src="./images/rent.png" alt="" className="infoPic"/>
              <h3>Rent Houses</h3>
              <p>Rent Houses Accross the USA</p>
            </div>

            <div className="infoBox">
              <img src="./images/rent2.png" alt="" className="infoPic"/>
              <h3>Buy Houses</h3>
              <p>Rent Apartments Accross the USA</p>
            </div>
          </div>
          <div className="clearDiv"></div>

        </div>
    )
  }
}
