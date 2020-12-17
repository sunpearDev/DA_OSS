import React, { Component } from 'react'
import '../css/OrderPage.css'
import axios from 'axios'

export default class OrderPage extends Component {
    constructor(props) {
        super(props)
        this.getGame = this.getGame.bind(this)
        this.state = {
            game: {}
        }
    }
    async componentDidMount() {
        axios
            .get("https://amadas.herokuapp.com/games/" + this.props.match.params.id)
            .then(result => this.setState({
                game: result.data
            }))


    }
    async getGame() {
        let order = {
            idUser: sessionStorage.getItem("id"),
            game: this.props.match.params.id,
            status: this.state.game.price === 0 ? (true) : (false)
        }
        console.log(order)
        let res = await axios.post("https://amadas.herokuapp.com/orders", order).then().catch(err => alert("Order failed.\n" + err))


        if (res.data) {
            if (res.data.status === true) {
                let library = await axios.get("https://amadas.herokuapp.com/librarys/" + await sessionStorage.getItem("id")).then()
                await sessionStorage.setItem("library", JSON.stringify(library.data[0].games))
            }
            alert("Order successfully.")
            window.location.reload()
            window.location = '/game/' + this.props.match.params.id
        }
        else {
            alert("Order failed.")
        }
    }
    render() {
        return (
            <div className="OrderPage">
                <div className="intro">
                    <div>
                        {this.state.game.price === 0 ? (<>
                            <h2>CHECKOUT</h2>
                            <hr />
                        </>) : (<>
                            <h2>PAYMENT METHOD</h2>
                            <hr />
                            <div className="row">
                                <div>
                                    <img src="data:image/png;base64,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" alt="" />
                                    <div>sunpear.sp@gmail.com</div>
                                </div>
                                <h2>OR</h2>
                                <div>
                                    <img src="https://business.momo.vn/assets/landingpage/img/931b119cf710fb54746d5be0e258ac89-logo-momo.png" alt="" />
                                    <div>0901267750</div>
                                </div>
                            </div>
                            <div className="note">Please send money one of payment to get your game and wait 24h.</div>
                            <div className="note">Contact admin if your game have issues.</div>
                        </>)}
                    </div>
                    <div>
                        <h2>ORDER</h2>
                        <div className="row1">
                            <img src={"/images/" + (Array.isArray(this.state.game.images) === true ? (this.state.game.images[0]) : (this.state.game.images))} alt="" />
                            <div>{this.state.game.name}</div>
                            <div>Price</div>
                            <div>{this.state.game.price} $</div>
                            <div>Discount</div>
                            <div>-{this.state.game.discount} %</div>
                        </div>
                        <hr />
                        <div className="row1">
                            <div>Total</div>
                            <div>{this.state.game.price * (100 - this.state.game.discount) / 100} $</div>
                        </div>
                        <a onClick={this.getGame}>Get</a>
                    </div>
                </div>
            </div>
        )
    }
}
