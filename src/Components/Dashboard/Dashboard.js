import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import './Dashboard.css'
import House from '../House/House';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            houses: []
        }
    }

    componentDidMount(){
        axios.get('/api/houses').then((response) => {
            this.setState({houses: response.data})
        })
        .catch(err => console.log(err))
    }

    render() {
        let key = 0;
        const housesMapped = this.state.houses.map((house, i) => {
            return(
                <House key={key++} id={house.id} name={house.property_name} address={house.address} city={house.city} state={house.state} zip={house.zip}/>
            )
        })
        return(
            <div id='houses'>
                <h3>Dashboard</h3>
                <Link to='/wizard'><button>Add New Property</button></Link>
                {housesMapped}
            </div>
        )
    }
}