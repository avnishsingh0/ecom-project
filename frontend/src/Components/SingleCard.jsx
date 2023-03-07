import { Box, Flex, Image, Select, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { handleQuantity, handleRemove } from '../Redux/Cart/action'

const SingleCard = ({card}) => {
    console.log(card)
    const [quantity, setQty] = useState(card.quantity);
    const dispatch = useDispatch();
    const handleQuanityChange = () => {
        dispatch(handleQuantity(card.id, card.price, quantity));
      };
    
      const handleRemoveItem = () => {
        dispatch(handleRemove(card.id));
      };
    console.log(quantity)
  return (
    <Box>
        <Flex
    mt={2}
    key={card.id}
    p={"0.5rem"}
    boxShadow={
      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"
    }
  >
    <Box  border={"0px solid red"} w={"25%"}>
      <Image src={card.image}/>
    </Box>
    <Box
      ml={3}
      textAlign={"justify"}
      border={"0px solid red"}
      w={"85%"}
    >
      <Text>{card.title}</Text>
      <Text>{card.title}</Text>
      <Text color={"#a9a9a9 "} fontWeight={"600"} fontSize={"12px"}>
        Sold by: Omnitech Retail
      </Text>
      <Flex>
        <Select
          mt={2}
          fontWeight={"600"}
          fontSize={"14px"}
          w={{ base: "40%", sm: "40%", md: "46%", lg: "30%" }}
          h={"1.5rem"}
          bg={"#f5f5f6"}
        >
          <option>Size: M</option>
          <option>Size: L</option>
          <option>Size: XL</option>
          <option>Size: XXL</option>
        </Select>
        <Select
          mt={2}
          ml={2}
          fontWeight={"600"}
          fontSize={"14px"}
          w={{ base: "40%", sm: "40%", md: "46%", lg: "30%" }}
          h={"1.5rem"}
          bg={"#f5f5f6"}
          onChange={(e) => setQty(e.target.value)}
                  onClick={handleQuanityChange}
        >
          <option value="1">Qty: 1</option>
          <option value="2">Qty: 2</option>
          <option value="3">Qty: 3</option>
        </Select>
      </Flex>
      <Flex gap={2} mt={2}>
        <Text fontWeight={"600"}>₹{card.price}</Text>
        <Text color={"#a9a9a9 "}>
          ₹{card.price}
        </Text>
        <Text color={"red"}>₹65% OFF</Text>
      </Flex>
    </Box>
    <Box cursor={"pointer"}>
      <AiOutlineClose />
    </Box>
  </Flex>
    </Box>
    
  )
}

export default SingleCard