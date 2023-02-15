import React from 'react'
import {Box, Image, Text} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
const WinterCard = ({winterdata}) => {
  const navigate = useNavigate();
  return (
    <Box onClick={() => navigate(`/detalspage/${winterdata.id}`)} cursor={'pointer'} >
      <Image objectFit={'cover'} w={210}  src={winterdata.image}/>
      <Text fontWeight={'bold'}>{winterdata.brand}</Text>
      <Text fontSize={'md'}>{winterdata.title}</Text>
      <Text  fontSize={'md'} fontWeight={600}>RS.{winterdata.price}  
      <Text ml={2} fontSize={'xs'} fontWeight={400} as='del'>Rs. 1999  </Text>
      <span style={{fontSize:'12px', marginLeft:'8px'}}>(60% OFF)</span>
      </Text>
    </Box>  
  )
}

export default WinterCard