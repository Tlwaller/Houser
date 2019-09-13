import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Wizard extends Component {
    constructor() {
        super();
        this.state = {
            name: this.name,
            address: this.address,
            city: this.city,
            state: this.state,
            zip: this.zip
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
        return(
            <div>
                <h3>Wizard</h3>
                <Link to='/'><button>Back</button></Link>
                <form id='add-property' onSubmit={this.handleSubmit}>
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
                    <input type='submit' value='submit'/>
                </form>
            </div>
        )
    }
}