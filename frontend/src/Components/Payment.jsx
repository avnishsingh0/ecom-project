import React, { useState } from 'react'
import CartNav from '../Pages/Home/CartNav'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
const Payment = () => {
  const grandtotal=100;
  const totalItems=4;
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const activeStyle = {
    fontSize: "14px",
    fontWeight: "700",
    borderLeft: "5px solid #ff3f6c",
    cursor: "pointer",
    marginTop: "none",
    color: "#ff3f6c",
    backgroundColor: "#fff",
  };
  const defaultStyle = {
    backgroundColor: "#f4f4f5",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    marginTop: "none",
  };
  return (
    <>
      <CartNav/>
      <SimpleGrid
        columns={[1, 1, 2, 2]}
        w={{ base: "95%", sm: "95%", md: "90%", lg: "70%" }}
        gap={1}
        m={"auto"}
        mt={5}
      >
        <Box
        >
          <Heading textAlign={"left"} fontSize="16px" p={"10px 0"}>
                  Choose Payment Mode
                </Heading>
                <HStack
                  boxShadow={
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"
          }
                  justifyContent={"space-between"}
                  
                >
                  {toggle ? (
                    <Box
                      marginTop={[0, 0, 0]}
                      
                    >
                      <Box onClick={handleToggle} style={activeStyle} p={4}>
                        Cash On Delivery
                      </Box>
                      <Box
                        mt={2}
                        onClick={handleToggle}
                        style={defaultStyle}
                        p={4}
                      >
                        Credit/Debit Card
                      </Box>
                      <Box mt={2} style={defaultStyle} p={4}>
                        PhonePe/Google
                      </Box>
                      <Box mt={2} style={defaultStyle} p={4}>
                        Pay-tm/Wallets
                      </Box>
                      <Box mt={2} style={defaultStyle} p={4}>
                        Net Banking
                      </Box>
                      <Box mt={2} style={defaultStyle} p={4}>
                        EMI/Pay Later
                      </Box>
                    </Box>
                  ) : (
                    <Box marginTop={[0, 0, 0]} >
                      <Box onClick={handleToggle} style={defaultStyle} p={4}>
                        Cash On Delivery
                      </Box>
                      <Box
                        mt={2}
                        onClick={handleToggle}
                        style={activeStyle}
                        p={4}
                      >
                        Credit/Debit Card
                      </Box>
                      <Box mt={2} style={defaultStyle} p={4}>
                        PhonePe/Google
                      </Box>
                      <Box mt={2} style={defaultStyle} p={4}>
                        Pay-tm/Wallets
                      </Box>
                      <Box mt={2} style={defaultStyle} p={4}>
                        Net Banking
                      </Box>
                      <Box mt={2} style={defaultStyle} p={4}>
                        EMI/Pay Later
                      </Box>
                    </Box>
                  )}
                  {toggle ? (
                    <Box pl={4}>
                      
                    </Box>
                  ) : (
                    <Box textAlign={"left"} pl={4}>
                      
                    </Box>
                  )
                  }
                </HStack>
        </Box>

        <Box
          
          p={"1rem"}
        >
          <Text mt={'1rem'} fontWeight={'600'} fontSize={'12px'}>PRICE DETAILS ({totalItems} items)</Text>
          <Flex justifyContent={'space-between'} mt={2} fontSize={'14px'}>
            <Text>Total MRP </Text>
            <Text>₹ {grandtotal*2}</Text>
          </Flex>
          <Flex justifyContent={'space-between'} mt={2} fontSize={'14px'}>
            <Text>Discount on MRP </Text>
            <Text color={'green'}>-₹ {grandtotal}</Text>
          </Flex>
          <Flex justifyContent={'space-between'} mt={2} fontSize={'14px'}>
            <Text>Coupon Discount </Text>
            <Text color="red">Apply Coupon</Text>
          </Flex>
          <Flex justifyContent={'space-between'} mt={2} fontSize={'14px'} mb={3}>
            <Text>Convenience Fee </Text>
            <Text color="green">Free</Text>
          </Flex>
          <hr/>
          <Flex justifyContent={'space-between'} mt={2} fontSize={'16px'}>
            <Text fontWeight={'600'}>Total Amount</Text>
            <Text fontWeight={'600'}>₹ {grandtotal}</Text>
          </Flex>
        </Box>
      </SimpleGrid>
    </>
  )
}

export default Payment