import React, { Component } from "react";
import {Link} from "react-router-dom"
import "../css/GameCard.css";

const Price=props=>{
  if (props.price==0)
    return(<div className="Price">FREE</div>)
  else if (props.discount==0)
    return(<div className="Price">{props.price}$</div>)
  else return( <div className="Price">
  <div className="discount">-{props.discount}</div>
  <div className="origin">{props.price}$</div>
  <div className="sale">
    {Math.round((1 - props.discount / 100) * parseInt(props.price)*100)/100}$
  </div>
</div>)
}

export default class GameCard extends Component {

  render() {
    return (
      <Link to={'game/'+this.props.id} className="GameCard">
        <img src={this.props.image} className="Image" />
        <div className="OfferCard">
          <div className="Publisher">{this.props.publisher}</div>
          <div className="Name">{this.props.name}</div>
          <Price price={this.props.price} discount={this.props.discount}/>
        </div>
      </Link>
    );
  }
}
