import React, { Component } from 'react'
import '../css/GameDetailPage.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Link} from 'react-router-dom'
import axios from "axios"

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
  

export default class GameDetailPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            price: 0,
            date_released: "",
            types: [],
            miniDiscription: "",
            discription: "",
            discount: 0,
            images: [],
            video: "",
            publisher: "",
            Minimum: {},
            Recommended: {},
            download_link: []
        }
    }

    async componentDidMount() {
        let game = await axios
            .get("https://amadas.herokuapp.com/games/" + this.props.match.params.id)
            .then()
            .catch((err) => alert(err));
        await this.setState({
            name: game.data.name,
            price: game.data.price,
            date_released: game.data.date_released,
            types: game.data.idTypes,
            miniDiscription: game.data.miniDiscription,
            discription: game.data.discription,
            discount: game.data.discount,
            images: game.data.images,
            video: game.data.video,
            publisher: game.data.publisher,
            Minimum: game.data.system_required.Minimum,
            Recommended: game.data.system_required.Recommended,
            download_link: game.data.download_link,
        })
    }



    render() {
        return (
            <div className="gameDetailPage">
                <h2>{this.state.name}</h2>
                <Carousel className="carousel">
                    <div>
                        <iframe width={560} height={315} src={this.state.video} frameBorder={0} allow="accelerometer; disablekb; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </div>
                    {this.state.images.map(image => (<div key={image}><img src={"https://res.cloudinary.com/amadas/image/upload/v1607146111/" + image} alt="" /></div>))}
                </Carousel>
                <div className="intro">
                    <div>{this.state.miniDiscription}</div>
                    <div className="buy_zones">
                        {sessionStorage && sessionStorage.getItem('library') && sessionStorage.getItem('library').includes(this.props.match.params.id) ?
                            (<button className="download">Dowload
                                <div className="dropdown">{this.state.download_link.map(link => (<a key={link} href={link} target="_blank">Link</a>))}</div>
                            </button>) : ((<Link to={sessionStorage && sessionStorage.getItem('username')?('/order/'+this.props.match.params.id):('/login')}>Get</Link>))}
                    </div>
                </div>
                <hr />
                <div className="about">
                    <h2 id="title">About game</h2>
                    <div className="infor">
                        <div>
                            <b>Price</b>
                            <Price price={this.state.price} discount={this.state.discount}/>
                        </div>
                        <div>
                            <b>Publisher</b>
                            <div>{this.state.publisher}</div>
                        </div>
                        <div>
                            <b>Date released</b>
                            <div>{this.state.date_released.toString()}</div>
                        </div>
                        <div>
                            <b>Types</b>
                            <div>{this.state.types.map(type => (type.name + " "))}</div>
                        </div>
                        <div>
                            <b>Platforms</b>
                            <div>Windows</div>
                        </div>
                    </div>
                </div>
                <h2>{this.state.name}</h2>
                <p>{this.state.discription}</p>
                <div className="about">
                    <h2 id="title">System Required</h2>
                    <div className="specifications_zone">
                        <div>
                            <b>Minimum</b>
                            {this.state.Minimum ? (<><div>OS</div>
                                <div>{this.state.Minimum.OS}</div>
                                <div>CPU</div>
                                <div>{this.state.Minimum.Process}</div>
                                <div>GPU</div>
                                <div>{this.state.Minimum.Graphics}</div>
                                <div>RAM</div>
                                <div>{this.state.Minimum.Memory} GB</div>
                                <div>Storage Space</div>
                                <div>{this.state.Minimum.Storage} GB</div></>) :
                                ('There is not minimum specifications')}

                        </div>
                        <div>
                            <b>Recommended</b>
                            {this.state.Recommended ? (<><div>OS</div>
                                <div>{this.state.Recommended.OS}</div>
                                <div>CPU</div>
                                <div>{this.state.Recommended.Process}</div>
                                <div>GPU</div>
                                <div>{this.state.Recommended.Graphics}</div>
                                <div>RAM</div>
                                <div>{this.state.Recommended.Memory} GB</div>
                                <div>Storage Space</div>
                                <div>{this.state.Recommended.Storage} GB</div></>) :
                                ('There is not recommended specifications')}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
