import React, {Component} from 'react';
import 'react-router-dom';
import './House.css'
import axios from 'axios';

export default class House extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            address: this.props.address,
            city: this.props.city,
            state: this.props.state,
            zip: this.props.zip
        }
    }

    deleteHouse = () => {
        console.log(this.props.id);
        axios.delete(`/api/houses/${this.props.id}`)
    }

    render() {
    return(
            <div>
                <h3>House</h3>
                <section className='house'>
                    <h3>Property Name: {this.state.name}</h3>
                    <h3>Address: {this.state.address}</h3>
                    <h3>City: {this.state.city}</h3>
                    <h3>State: {this.state.state}</h3>
                    <h3>Zip: {this.state.zip}</h3>
                    <button id='delete-btn' onClick={this.deleteHouse}>Ⓧ</button>
                </section>
            </div>
        )
    }
}