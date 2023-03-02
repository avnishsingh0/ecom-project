import { Avatar, Box, Text } from '@chakra-ui/react';
import React from 'react'
import { AiOutlineStar } from 'react-icons/ai';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const ReviewCards = ({reviews}) => {
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        let stars = reviews.rating;
        return (
          <span key={index}>
            {stars >= index + 1 ? (
              <FaStar className="icon" />
            ) : stars >= number ? (
              <FaStarHalfAlt className="icon" />
            ) : (
              <AiOutlineStar className="icon" />
            )}
          </span>
        );
      });
  return (
    <Box>
        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        <Text>{reviews.name}</Text>
        {ratingStar}
        <span>{reviews.comment}</span>
    </Box>
  )
}

export default ReviewCards