import React, { Component } from 'react'
import '../css/AdminPage.css'
import axios from 'axios'

export default class AdminPage extends Component {
    constructor(props) {
        super(props)
        this.showAnnouce = this.showAnnouce.bind(this)
        this.activeOrder = this.activeOrder.bind(this)
        this.state = {
            orders: []
        }
    }
    componentDidMount() {
        if (!sessionStorage || !sessionStorage.getItem("admin_right")) {
            window.location = "/"
        }
        axios.get("https://amadas.herokuapp.com/orders/").then(
            response => this.setState({ orders: response.data })
        )
    }
    showAnnouce() {
        alert("Order is actived.")
    }
    activeOrder(order) {
        axios.put("https://amadas.herokuapp.com/orders/" + order._id).then(res => {
            if (!res.data) {
                alert("Order active successfully.")
            }
            else
                alert("Order false.")
            window.location.reload()
        })
        .catch(err => { alert("Order fail\n" + err + "\n") })
    }
    render() {
        return (
            <div className="AdminPage">
                <div className="row">
                    <div>
                        <div>Functions</div>
                        <hr />
                        <div>Manage order</div>
                    </div>
                    <div>
                        <div>Username</div>
                        <div>Game name</div>
                        <div>Contact date</div>
                        <div>Price</div>
                        <div>Action</div>
                        {Array.isArray(this.state.orders) ? (this.state.orders.map(order => (<>
                            <div>{order.idUser.username}</div>
                            <div>{order.game.name}</div>
                            <div>{order.game.price} $</div>
                            <div>{order.date_contact}</div>
                            {order.status === true ? (<a className="actived" onClick={this.showAnnouce}>Actived</a>) : (<a className="active" onClick={()=>this.activeOrder(order)}>Active</a>)}
                        </>))) :
                            ('')}

                    </div>
                </div>

            </div>
        )
    }
}
