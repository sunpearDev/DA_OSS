import React, { Component } from "react";
import GameCard from "./GameCard";
import axios from "axios";
import "../css/GameRow.css";

export default class GameRow extends Component {
  constructor(props) {
    super(props);

    this.state = { Games: [] };
  }
  componentDidMount() {
    axios
    .get("https://amadas.herokuapp.com/games/")
    .then((res) => {
      this.setState({ Games: res.data });
    })
    .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="GameRow" >
        <p className="title">{this.props.title}</p>
        <div className="row">
          {this.state.Games.map((game) => {
            return (
            <GameCard
              key={game._id}
              id={game._id}
              name={game.name}
              image={"https://res.cloudinary.com/amadas/image/upload/v1607146111/" + game.images[0]}
              publisher={game.publisher}
              price={game.price}
              discount={game.discount}
            />
          )})}
        </div>
      </div>
    );
  }
}
