import React, { Component } from 'react'
import {connect} from "react-redux";
import {fetchApts} from "../actions/houseActions";

class Apartments extends Component {

    componentWillMount()
    {
        this.props.fetchApts();
    }

    viewPics = (city, state) => {

      document.querySelector(".picModal").style.display = "block";
      document.querySelector(".modalID").innerHTML = city;
      document.querySelector(".modalID2").innerHTML = state;
    }

    moreInfo = () => {

      document.querySelector(".infoModal").style.display = "block";
      document.querySelector(".modalID").innerHTML = "wdvcwv";
      document.querySelector(".modalID2").innerHTML = "state";

    }

    closeButton = () => {
      document.querySelector(".picModal").style.display = "none";
      document.querySelector(".infoModal").style.display = "none";
    }

    

  render() {

    const postItem = this.props.houses.map(
        apt => (
            <div className="houseContainer">
                <img src={apt.pic} alt="" className="houseContainerPic"/>

              <div className="houseContainerInfo">
                <h2>${apt.priceInfo.minPrice}{"-$"}{apt.priceInfo.maxPrice}{"/Per Month"}</h2>
                <p>{apt.address.city}{", "}{apt.address.state}</p>
                <p>{`Bedrooms: ${apt.bedrooms.minBed}-${apt.bedrooms.maxBed}`}</p>
                <p>{`Bathrooms: ${apt.bathrooms.minBath}-${apt.bathrooms.maxBath}`}</p>
                <div className="buttonContainer">
                  <button className="houseButton" onClick={this.viewPics.bind(this, apt.address.city, apt.address.state)}>View Pics</button>
                  <button className="houseButton" onClick={this.moreInfo.bind(this, apt.address.city, apt.address.state)}>More Info</button>
                </div>

              </div>

              <div className="clearDiv"></div>

              <div className="picModal">
                <div className="modal-content">
                  <span className="closeBtn" onClick={this.closeButton}>&times;</span>
                  <h1>More Pictures</h1>
                  <p className="modalID"></p>
                  <p className="modalID2"></p>
                </div>
              </div>

              <div className="infoModal">
                <div className="modal-content">
                  <span className="closeBtn" onClick={this.closeButton}>&times;</span>
                  <h1>More Info</h1>
                  <p className="modalID"></p>
                  <p className="modalID2"></p>
                </div>
              </div>

          
            </div>
        )
    )

    return (
      <div>
        <h1 className="pageTitle">Apartments For Rent</h1>
        {postItem}
      </div>
    )
  }
}

const mapPropsToState = (state) => ({
    houses:state.houses.aptItems
})

export default connect(mapPropsToState, {fetchApts}) (Apartments)
