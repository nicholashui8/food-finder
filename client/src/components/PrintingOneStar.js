import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'
import { faStarHalf as halfStar } from '@fortawesome/free-solid-svg-icons'
export class PrintingOneStar extends Component {
    render() {
        if(this.props.num === 1){
            return <FontAwesomeIcon icon={solidStar} />
        }
        else{
            if(this.props.num === 0.5){
                return <FontAwesomeIcon icon={halfStar} />
            }
            else{
                if(this.props.num === 0){
                    return <FontAwesomeIcon icon={emptyStar} />
                }
            }
            
        }
        
    }
}

export default PrintingOneStar
