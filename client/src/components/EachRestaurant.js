import React, { Component, Suspense } from 'react'
import Rating from './Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'
import { faStarHalf as halfStar } from '@fortawesome/free-solid-svg-icons'

class EachRestaurant extends Component {
    
    render() {
        return (
            <div style={eachBox} >
                <div style={imageContainerStyle}>
                    <img style={imageStyle}src={this.props.store.image_url}></img>
                </div>
                <div style={descriptionStyle}>
                    <div style={nameAndRatingStyle}>
                        <div style={nameStyle}>
                            <h2 style={textStyle}>{this.props.store.name}</h2>
                        </div>
                        <div style={ratingStyle}>
                            <Rating rating={this.props.store.rating}/>
                        </div>
                    </div>
                    <h3 style={textStyle}>{this.props.store.phone}</h3>
                    <h3 style={textStyle}>{this.props.store.location.address1}</h3>
                </div>  
            </div>
        )
    }
}

const eachBox = {
    minWidth: '900px',
    marginLeft: '20px',
    marginTop: '25px',
    marginBottom: '15px',
    border: 'solid grey 0.4px',
    backgroundColor: '#FF6961',
    height: '355px',
    borderRadius: '10px',
    marginRight: '20px',
    fontFamily:'\'Source Sans Pro\', sans-serif',
    display: 'flex',
    boxShadow : '2px 2px 2px 2px #C8C8C8',
    overflow: 'hidden',
    color: 'white',
}

const imageContainerStyle = {
    borderRadius: '10px',
    flex: '0.75',
    overflow: 'hidden',
    minWidth: '350px',
}
const descriptionStyle = {
    flex: '3',
}
const imageStyle = {
    marginTop: '20px',
    marginLeft: '20px',
    height: '90%',
    width: '90%',
    borderRadius: '10px',
}
const nameAndRatingStyle = {
    borderRadius: '10px',
    width: '100%',
    height: '40%',
    backgroundColor: '#FF6961',
    display: 'flex',
    margin: '0',
}

const textStyle = {
    paddingLeft: '15px',
    
}
const nameStyle = {
    borderRadius: '10px',
    flex: '0.5',
    backgroundColor: '#FF6961',
    minWidth: '300px',
    overflow: 'hidden',
}
const ratingStyle = {
    paddingTop: '10px',
    fontSize: '25px',
    flex: '4',
}
export default EachRestaurant
