import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class step1 extends Component {
    constructor() {
        super();
        this.state = {
            houses: []
        }
    }

    handleName = (e) => {
        this.setState({name: e.target.value});
    }

    handleAddress = (e) => {
        this.setState({address: e.target.value});
    }

    handleCity = (e) => {
        this.setState({city: e.target.value});
    }

    handleState = (e) => {
        this.setState({state: e.target.value});
    }

    handleZip = (e) => {
        this.setState({zip: e.target.value});
    }

    handleSubmit = () => {
        axios.post('/api/houses', {
            property_name: this.state.name, 
            address: this.state.address, 
            city: this.state.city, 
            state: this.state.state, 
            zip: this.state.zip
        })
    }

    render() {
        return (
            <form id='add-property'>
                    <label> Property Name:
                        <input type='text' name='name' 
                        value={this.state.name}
                        onChange={this.handleName} />
                    </label>
                    <label> Address:
                        <input type='text' name='address' 
                        value={this.state.address}
                        onChange={this.handleAddress} />
                    </label>
                    <label> City:
                        <input type='text' name='city' 
                        value={this.state.city}
                        onChange={this.handleCity} />
                    </label>
                    <label> State:
                        <input type='text' name='state' 
                        value={this.state.state}
                        onChange={this.handleState} />
                    </label>
                    <label> Zip Code:
                        <input type='text' name='zip' 
                        value={this.state.zip}
                        onChange={this.handleZip} />
                    </label>
                    <Link to='/wizard/step2'><button>Next</button></Link>
                </form>
        )
    }
}