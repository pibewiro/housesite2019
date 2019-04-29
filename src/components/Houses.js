import React, { Component } from 'react'
import {connect} from "react-redux";
import {fetchHouses} from "../actions/houseActions";
import $ from 'jquery';



window.addEventListener("click", function closeOutside(e){
  if(e.target === document.querySelector(".picModal"))
  {
    document.querySelector(".picModal").style.display = "none";
  }
})

class Houses extends Component {



    componentWillMount()
    {
        this.props.fetchHouses();
    }

    showInfoClick = (id) => {

        $(`.${id}`).toggle();
      
    }

    viewPics = (price) => {

      document.querySelector(".picModal").style.display = "block";
      document.querySelector(".modalID").innerHTML = price;

    }

    closeButton = () => {
      document.querySelector(".picModal").style.display = "none";
    }

 

  render() {

    const postItems = this.props.houses.map(
        house => (
            <div className="houseContainer">
                <img src={`${house.pic}.jpg`} alt="" className="houseContainerPic"/>

              <div className="houseContainerInfo">
                <h2>Price: ${house.priceInfo.price}{" "}<i class="fa fa-caret-down" onClick={this.showInfoClick.bind(this, house.id)}></i></h2>
                <div className={`${house.id} priceInfo`}>
                  <p>Downpayment: {house.priceInfo.downPayment}</p>
                  <p>15 Year Plan: {house.priceInfo.year15}</p>
                  <p>30 Year Plan: {house.priceInfo.year30}</p>
                </div>

                <p>{house.address.city}{", "}{house.address.state}</p>
                <p>{`Bedrooms:${house.accomodation.beds} Bathrooms:${house.accomodation.bath}`}</p>
                <p>SQFT: {house.sqft}</p>
                <button id="modalButton" className="houseButton" onClick={this.viewPics.bind(this, house.priceInfo.price)}>View Pics</button>
              </div>

              <div className="clearDiv"></div>

              <div className="picModal">
                <div className="modal-content">
                  <span className="closeBtn" onClick={this.closeButton}>&times;</span>
                  <h1>More Pictures</h1>
                  <p className="modalID"></p>
                </div>
              </div>


          
            </div>

        )
    )

    return (
      <div>
        <h1 className="pageTitle">Houses For Sale</h1>
        {postItems}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    houses:state.houses.houseItems
}) 


export default connect(mapStateToProps, {fetchHouses}) (Houses)
