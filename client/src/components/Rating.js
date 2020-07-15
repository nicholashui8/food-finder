import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'
import { faStarHalfAlt as halfStar } from '@fortawesome/free-solid-svg-icons'
import PrintingOneStar from './PrintingOneStar'

class Rating extends Component {

    render() {
        let rating = this.props.rating
        let icons = '';
        let starArray = [];
        for(let i = 0; i < 5; i++ ){
            if(rating - 1 >= 0){
                //print full star
                rating-=1;
                //return <FontAwesomeIcon icon={solidStar} />
                starArray.push(<FontAwesomeIcon icon={solidStar} />)
            }
            else{
                if(rating - 0.5 >= 0){
                    //print half star
                    rating-=0.5;
                    //return <FontAwesomeIcon icon={halfStar} />
                    starArray.push(<FontAwesomeIcon icon={halfStar} />)
                }
                else{
                    //print empty star
                    //return <FontAwesomeIcon icon={emptyStar} />
                    starArray.push(<FontAwesomeIcon icon={emptyStar} />)
                }
            }
        }
        return starArray;
    }
}

export default Rating;
/*
        let rating = this.props.rating
        if(rating === 5){
            return  <div><FontAwesomeIcon icon={solidStar} /> <FontAwesomeIcon icon={solidStar} /> <FontAwesomeIcon icon={solidStar} /> <FontAwesomeIcon icon={solidStar} /> <FontAwesomeIcon icon={solidStar} /></div>
        }
        if(rating === 4.5){
            return  <div><FontAwesomeIcon icon={solidStar} /> <FontAwesomeIcon icon={solidStar} /> <FontAwesomeIcon icon={solidStar} /> <FontAwesomeIcon icon={solidStar} /> <FontAwesomeIcon icon={halfStar} /></div>
        }
        if(rating === 4){
            return  <div><FontAwesomeIcon icon={solidStar} /> <FontAwesomeIcon icon={solidStar} /> <FontAwesomeIcon icon={solidStar} /> <FontAwesomeIcon icon={solidStar} /> <FontAwesomeIcon icon={emptyStar} /> </div>
        }
        if(rating === 3.5){
            return  <div><FontAwesomeIcon icon={solidStar} /> <FontAwesomeIcon icon={solidStar} /> <FontAwesomeIcon icon={solidStar} /> <FontAwesomeIcon icon={halfStar} /> <FontAwesomeIcon icon={emptyStar} /> </div>
        }
        if(rating === 3){
            return  <div><FontAwesomeIcon icon={solidStar} /> <FontAwesomeIcon icon={solidStar} /> <FontAwesomeIcon icon={solidStar} /><FontAwesomeIcon icon={emptyStar} /> <FontAwesomeIcon icon={emptyStar} />  </div>
        }
        if(rating === 2.5){
            return  <div><FontAwesomeIcon icon={solidStar} /> <FontAwesomeIcon icon={solidStar} /> <FontAwesomeIcon icon={halfStar} /><FontAwesomeIcon icon={emptyStar} /> <FontAwesomeIcon icon={emptyStar} />  </div>
        }
        if(rating === 2){
            return  <div> <FontAwesomeIcon icon={solidStar} /> <FontAwesomeIcon icon={solidStar} /><FontAwesomeIcon icon={emptyStar} /> <FontAwesomeIcon icon={emptyStar} /> <FontAwesomeIcon icon={emptyStar} />  </div>
        }
        if(rating === 1.5){
            return  <div> <FontAwesomeIcon icon={solidStar} /> <FontAwesomeIcon icon={halfStar} /><FontAwesomeIcon icon={emptyStar} /> <FontAwesomeIcon icon={emptyStar} /> <FontAwesomeIcon icon={emptyStar} />  </div>
        }
        if(rating === 1){
            return  <div> <FontAwesomeIcon icon={solidStar}/> <FontAwesomeIcon icon={emptyStar} /> <FontAwesomeIcon icon={emptyStar} /> <FontAwesomeIcon icon={emptyStar} /> <FontAwesomeIcon icon={emptyStar} />  </div>
        }
        if(rating === 0.5){
            return  <div> <FontAwesomeIcon icon={halfStar}/> <FontAwesomeIcon icon={emptyStar} /> <FontAwesomeIcon icon={emptyStar} /> <FontAwesomeIcon icon={emptyStar} /> <FontAwesomeIcon icon={emptyStar} />  </div>
        }
        if(rating === 0){
            return  <div> <FontAwesomeIcon icon={emptyStar} /> <FontAwesomeIcon icon={emptyStar} /><FontAwesomeIcon icon={emptyStar} /> <FontAwesomeIcon icon={emptyStar} /> <FontAwesomeIcon icon={emptyStar} />  </div>
        }
        */