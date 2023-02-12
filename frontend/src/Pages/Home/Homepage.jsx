import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import ImageSlider from '../Carosel/Carousel'
import Slider from './Slider'
import LargeWithNewsletter from './Footer'
import { SlideData } from '../Carosel/SlideData'
const Homepage = () => {
  return (
    <>
    <Box w="100%" p={0}>
      <ImageSlider slides={SlideData} />
    </Box>
    <Slider/>
    <Box>
    <Text textAlign={"center"} fontSize={"20px"} fontWeight={"bold"} mt={5}>Crazy Deals</Text>
    </Box> 
    <Box m={1} gap={5}>
      <SimpleGrid  columns={[2,5,5,8]} gap={2} >
      <Image  objectFit={"cover"} src='https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/18/41c29228-75d1-4066-9c24-ff56bdfc3ad11674035149925-Shae_by_Sassafras-_Juniper_and_more.png'/>
      <Image  objectFit={"cover"} src='https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/18/de3e3e3d-b05e-43fa-af9b-e21e060d6c491674035149880-Sangria-_Libas_-_more.png'/>
      <Image  objectFit={"cover"} src='https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/18/541307f0-ec39-47cf-b447-8635db93e4721674033754450-Kalamandir-_Chennai_SIlks__-_more_.png'/>
      <Image  objectFit={"cover"} src='https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/18/9beedda0-c6ea-481b-8130-7955dce58eba1674035150161-W-_Aurelia_-_more.png'/>
      <Image  objectFit={"cover"} src='https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/18/af12a492-90fa-471b-96ca-bc9a0c2db3821674035149638-Nayo-_Ahika_-_more.png'/>
      <Image  objectFit={"cover"} src='https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/18/7f8acedc-7065-479a-ac87-6c07be20cfac1674033754768-Mango-_M-S.png'/>
      <Image  objectFit={"cover"} src='https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/18/7f8acedc-7065-479a-ac87-6c07be20cfac1674033754768-Mango-_M-S.png'/>
      <Image  objectFit={"cover"} src='https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/18/7f8acedc-7065-479a-ac87-6c07be20cfac1674033754768-Mango-_M-S.png'/>
      </SimpleGrid>
      <Text textAlign={"center"} fontSize={"20px"} mt={7} mb={5} fontWeight={"bold"}>Most Loved Brands</Text>
      <SimpleGrid  columns={[2,5,5,8]}  >
      <Image  objectFit={"cover"} src='https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/19/9c6510a6-56f9-425e-825b-fd93a5351e8f1674113146096-Shirts.jpg'/>
      <Image  objectFit={"cover"} src='https://assets.myntassets.com/w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/19/5e9d922f-8c8f-4ea5-81ac-6b213dff44d71674110077899-Trousers.jpg'/>
      <Image  objectFit={"cover"} src='https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/19/585ef304-a1cd-4fcf-a7cc-9028a352aa8c1674110077773-Sports-Shoes.jpg'/>
      <Image  objectFit={"cover"} src='https://assets.myntassets.com/w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/19/bdd83867-6653-4805-bb5c-f48b94ce42221674110077522-Flats.jpg'/>
      <Image  objectFit={"cover"} src='https://assets.myntassets.com/w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/19/6cb393ef-b6c5-49ca-9386-57674c2b40711674110077839-Tops-_-Tees.jpg'/>
      <Image  objectFit={"cover"} src='https://assets.myntassets.com/w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/19/f7b5fd9f-972b-46ed-8c4b-bdac2b7099391674110077488-Casual-Shoes.jpg'/>
      <Image  objectFit={"cover"} src='https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/19/3b8125cb-1e7e-4b6a-bcea-7cf19cc696941674110077451-Activewear.jpg'/>
      <Image  objectFit={"cover"} src='https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/19/1e793ead-e553-4064-926c-6059e1078cd41674110077684-Kurtas.jpg'/>
      <Image  objectFit={"cover"} src='https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/19/8b43f054-f225-42e2-afb7-f4dbf576040a1674110077726-Sarees.jpg'/>
      <Image  objectFit={"cover"} src='https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/19/9c6510a6-56f9-425e-825b-fd93a5351e8f1674113146096-Shirts.jpg'/>
      <Image  objectFit={"cover"} src='https://assets.myntassets.com/w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/19/5e9d922f-8c8f-4ea5-81ac-6b213dff44d71674110077899-Trousers.jpg'/>
      <Image  objectFit={"cover"} src='https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/19/b590eeb5-6112-4056-85ae-9742659fbf5b1674110077528-Flip-Flops.jpg'/>
      <Image  objectFit={"cover"} src='https://assets.myntassets.com/w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/19/08169246-9320-4d7c-b44b-cb5dcc9eec4e1674110077649-Jeans_Unisex.jpg'/>
      <Image  objectFit={"cover"} src='https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/19/5d703f4c-10d3-4cc3-95a2-e79378ff49511674110077496-Dresses.jpg'/>
      <Image  objectFit={"cover"} src='https://assets.myntassets.com/w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/19/82093c45-e222-419c-ad88-5dae229c99d11674110077673-Kurta-Sets.jpg'/>
      <Image  objectFit={"cover"} src='https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/19/e5c1f086-3b7b-4cf6-8e37-a15eaa6de3a71674110077909-T-Shirts.jpg'/>
      </SimpleGrid>
      <Text textAlign={"center"} fontSize={"20px"} mt={7} mb={5} fontWeight={"bold"}>Top Picks of the week</Text>
    <SimpleGrid columns={[1,2,2,3]} gap={5} mb={10}>

      <Image borderRadius={15} src='https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fc5dc6c75-a49e-4028-b3a3-3bbbc63e49d6.jpg&w=1920&q=75'/>
      <Image borderRadius={15} src='https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fae700fcf-b911-452c-a916-f9994a15d20c.gif&w=1920&q=75'/>
      <Image borderRadius={15} src='https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F42badecf-d09d-47c4-a0cb-145f789a3b0f.jpg&w=1920&q=75'/>
    </SimpleGrid>
    <hr/>
    </Box>
    <LargeWithNewsletter/>
    </>

)}

export default Homepage