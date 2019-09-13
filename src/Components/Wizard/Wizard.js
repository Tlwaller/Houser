import React, {Component} from 'react';
import axios from 'axios';
import {Link, Route} from 'react-router-dom';
import step1 from './../step 1/step1';
import step2 from './../step 2/step2';
import step3 from './../step 3/step3';

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

    render() {
        return(
            <div>
                <h3>Wizard</h3>
                <Link to='/'><button>Back</button></Link>
                <Route path='/wizard/step1' component='step1'/>
                <Route path='/wizard/step2' component='step2'/>
                <Route path='/wizard/step3' component='step3'/>
            </div>
        )
    }
}