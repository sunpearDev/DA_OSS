import React, { Component } from 'react'
import '../css/LibraryPage.css'
import GameCard from '../components/GameCard'
import axios from "axios"

export default class LibraryPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            games: []
        }
    }
    async componentDidMount() {
        if (sessionStorage && sessionStorage.getItem("username")) {
            console.log(sessionStorage.getItem('id'))
            axios
                .get("http://localhost:5000/librarys/" + await sessionStorage.getItem("id"))
                .then((res) => {
                    console.log(sessionStorage.getItem('id'))
                    this.setState({ games:res.data[0].games });
                })
                .catch((err) => console.log(err));
        }
        else {
            window.location = '/login'
        }


    }
    render() {
        return (
            <div className="LibraryPage">
                <p className="title">Your Library</p>
                <div className="row">
                    {this.state.games.length == 0 ? (<p>There is not game in your library.</p>) : (this.state.games.map((game) => (
                        <GameCard
                            key={game._id}
                            id={game._id}
                            name={game.name}
                            image={"https://res.cloudinary.com/amadas/image/upload/v1607146111/" +  game.images[0]}
                            publisher={game.publisher}
                            price={game.price}
                            discount={game.discount}
                        />
                    )))

                    }
                </div>
            </div>
        )
    }
}
