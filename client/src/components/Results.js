import React, { Component } from 'react'
import EachRestaurant from './EachRestaurant';

class Results extends Component {
    
    // {console.log(this.props.restaurants[3])}
    render() {
        return this.props.restaurants.map((store) => (
                <EachRestaurant store={store}/>
            ));
        
    }
}

export default Results;
