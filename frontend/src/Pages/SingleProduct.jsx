import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Box, Image, SimpleGrid } from '@chakra-ui/react';
const SingleProduct = () => {
  // const {id} = useParams();
  // const SingleProduct= useSelector((store)=>store.winterdata)
  
  // let data= SingleProduct.find((el)=>el.id)
  // console.log(data);
  
  return (
    <SimpleGrid display={'flex'}>
      <Box border={'1px solid red'} w={'55%'}  >
      <SimpleGrid columns={[2,2,2,2]} gap={4} p={5}>

        <Image src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10673544/2019/9/24/6b9c7688-7ca2-4d11-9e5b-a3745ecd8f761569310358973-The-Indian-Garage-Co-Men-Shirts-8481569310357131-1.jpg'/>
        <Image src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10673544/2019/9/24/729859d8-cc66-4465-ba81-27028b9d7a461569310358945-The-Indian-Garage-Co-Men-Shirts-8481569310357131-2.jpg'/>
        <Image src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10673544/2019/9/24/66eb9c68-a2d9-41b1-8016-cf769e78d3a11569310358918-The-Indian-Garage-Co-Men-Shirts-8481569310357131-3.jpg'/>
        <Image src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10673544/2019/9/24/0c876b8b-6633-4577-aa3f-89a64d0651e81569310358890-The-Indian-Garage-Co-Men-Shirts-8481569310357131-4.jpg'/>
        <Image src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10673544/2019/9/24/ec7dcc09-7640-4f17-a49d-69ccce54753c1569310358858-The-Indian-Garage-Co-Men-Shirts-8481569310357131-5.jpg'/>
        <Image src='https://cf-images.ap-southeast-1.prod.boltdns.net/v1/jit/5745608584001/fa2bf46e-f698-433e-b18a-e492e6d9dbc3/main/1280x720/21s56ms/match/image.jpg'/>
        </SimpleGrid>
      </Box>
      <Box border={'1px solid red'} w={'45%' } ></Box>
    </SimpleGrid>
  )
}

export default SingleProduct