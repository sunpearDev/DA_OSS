import React, { Component } from 'react'
import '../css/BrowserPage.css'
import axios from "axios";

import GameCard from "../components/GameCard";

export default class Browser extends Component {
    constructor(props) {
        super(props)
        this.showGames = this.showGames.bind(this)
        this.showPages = this.showPages.bind(this)
        this.getData=this.getData.bind(this)
        this.state = {
            types: [],
            games: [],
            typeSelected: 0,
            pages: [],
            sort:0
        }
    }
    handleChange = e => {
        this.setState({sort:e.target.value})
        console.log(e.target.value)
        axios
            .post("http://localhost:5000/games/sort/" + this.state.typeSelected + "/" + e.target.value )
            .then((res) => {
                this.setState({ games: res.data });
                alert("Load successfully.")
            })
            .catch((err) => console.log(err));
    }
    async showGames(e) {
        var types = document.querySelectorAll('.BrowserPage > div:last-child > div')
        types.forEach(type => {
            type.style.border = "0"
        })
        e.target.style.border = "1px solid white"
        this.setState({ typeSelected: e.target.getAttribute("name") })
        let idType = e.target.getAttribute('name')
        await axios
            .get("http://localhost:5000/types/" + idType)
            .then((res) => {
                this.setState({ games: res.data });
                alert("Load successfully.")
            })
            .catch((err) => console.log(err));
        this.showPages()
        axios.post("http://localhost:5000/games/sort/"+idType+"/0/1").then(res=>{
            this.setState({games: res.data})
            alert("Load successfully.")
        })
    }
    async componentDidMount() {
        await axios
            .get("http://localhost:5000/types/get/names")
            .then((res) => {
                this.setState({ types: res.data });
            })
            .catch((err) => console.log(err));
        console.log(this.state.types)
        await axios
            .get("http://localhost:5000/games/")
            .then((res) => {
                this.setState({ games: res.data });
                alert("Load successfully.")
            })
            .catch((err) => console.log(err));
       this.showPages(await this.state.games)
       axios.post("http://localhost:5000/games/sort/0/0/1").then(res=>{
            this.setState({games: res.data})
            alert("Load successfully.")
        })
    }
    showPages(games) {
        let abc = []
        console.log(games)
        for (var i = 0; i < this.state.games.length; i += 4) {
            abc.push(i)
        }
        this.setState({ pages: abc })
        console.log(this.state.pages)
    }
     getData(e) {
        let page=e.target.getAttribute("name")
        axios.post("http://localhost:5000/games/sort/"+this.state.typeSelected+"/"+this.state.sort+"/"+page).then(res=>{
            this.setState({games: res.data})
        })
    }
    render() {

        return (
            <div className="BrowserPage">
                <div>
                    <select id="combo" onChange={this.handleChange}>
                        <option value={0}>All</option>
                        <option value={1}>Alphabet</option>
                        <option value={2}>Date released</option>
                        <option value={3}>Low to high price</option>
                        <option value={4}>High to low price</option>
                    </select>
                    <div className="row">
                        {this.state.games.map(game => 
                            
                            (
                            <GameCard key={game._id}
                                id={game._id}
                                name={game.name}
                                image={"https://res.cloudinary.com/amadas/image/upload/v1607146111/" + game.images[0]}
                                publisher={game.publisher}
                                price={game.price}
                                discount={game.discount} />
                        ))}
                    </div>
                    {this.state.pages.map((page => (<a key={page} name={page/4+1} onClick={(e)=>this.getData(e)} >{page/4+1}</a>)))}
                </div>


                <div>
                    <h3>CATEGORIES</h3>
                    <hr />
                    {this.state.types.map((type) => (<div key={type._id} name={type._id} onClick={this.showGames}>{type.name}</div>))}

                </div>
            </div>
        )
    }
}
