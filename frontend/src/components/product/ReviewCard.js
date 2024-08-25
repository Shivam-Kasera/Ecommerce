import React from 'react'
import profilePng from '../../img/profile.png'
import { Rating } from '@material-ui/lab'
const ReviewCard = ({review}) => {
  const options = {
    size: 'normal',
    value: review.rating,
    readOnly: true,
    precision: 0.5
  }
  return (
    <div className="reviewCard">
      <img src={profilePng} alt="User" />
      <p>{review.name}</p>
      <Rating {...options}/>
      <span className='reviewCard-span'>{review.comment}</span>
    </div>
  )
}


export default ReviewCard