import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import styled from "styled-components";
import '../CSS/SingleProduct.css'

import { Box, Button, Image, SimpleGrid, Text } from '@chakra-ui/react';
const SingleProduct = () => {

  // const {id} = useParams();
  // const SingleProduct= useSelector((store)=>store.winterdata)
  
  // let data= SingleProduct.find((el)=>el.id)
  const imgs = [
    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10673544/2019/9/24/6b9c7688-7ca2-4d11-9e5b-a3745ecd8f761569310358973-The-Indian-Garage-Co-Men-Shirts-8481569310357131-1.jpg",
    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10673544/2019/9/24/729859d8-cc66-4465-ba81-27028b9d7a461569310358945-The-Indian-Garage-Co-Men-Shirts-8481569310357131-2.jpg",
    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10673544/2019/9/24/66eb9c68-a2d9-41b1-8016-cf769e78d3a11569310358918-The-Indian-Garage-Co-Men-Shirts-8481569310357131-3.jpg",
    "https://cf-images.ap-southeast-1.prod.boltdns.net/v1/jit/5745608584001/fa2bf46e-f698-433e-b18a-e492e6d9dbc3/main/1280x720/21s56ms/match/image.jpg"
  ]
  const [mainImage, setMainImage] = useState(imgs[0]);

  
  console.log(mainImage)
  return (
    <Box >
    
    <SimpleGrid columns={[1,1,2,2]}>
      <Box border={'1px solid red'}   >
      <Image borderRadius={10} src={mainImage} w={250} m={'auto'} mt={5}/>
      <SimpleGrid columns={[2,4,4,4]} gap={4} p={5} m={'auto'}>
       {
        imgs.map((curLem,index)=>{
          return (
            <Image cursor={'pointer'} w={130} borderRadius={10} src={curLem} onClick={() => setMainImage(curLem)}/>
          )
        })
       }
        </SimpleGrid>
      </Box>



      <Box border={'1px solid red'}>
        <Text>Carlton London sports</Text>
        <Text>Women Olive Green T-Strap Flats</Text>
        <Text>Women Olive Green T-Strap Flats</Text>
        <hr/> 
        <Text>₹747  MRP ₹1699  (56% OFF)</Text>
        <span>inclusive of all taxes</span>
        <Text>SELECT SIZE (Euro Size)</Text>
        <Button >ADD TO BAG</Button> 
        <Button ml={2}>WISHLIST</Button>
        <hr/>
      </Box>
    </SimpleGrid>
    </Box>
  )
}

export default SingleProduct















