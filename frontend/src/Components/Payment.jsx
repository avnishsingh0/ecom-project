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
  Image,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ToastContainer } from 'react-bootstrap';
import PaymentMethod from './PaymentMethod';
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
      <CartNav step1 step2 step3/>
   
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
                      <Box onClick={handleToggle} style={activeStyle} p={1}>
                        Cash On Delivery
                      </Box>
                      <Box
                        mt={5}
                        onClick={handleToggle}
                        style={defaultStyle}
                        p={3}
                      >
                        PhonePe/PayPal
                        
                      </Box>
                      <Box mt={4} style={defaultStyle} p={1}>
                      Credit/Debit
                      </Box>
                      <Box mt={4} style={defaultStyle} p={1}>
                        Pay-tm/Wallets
                      </Box>
                      <Box mt={4} style={defaultStyle} p={1}>
                        Net Banking
                      </Box>
                      <Box mt={4} style={defaultStyle} p={1}>
                        EMI/Pay Later
                      </Box>
                    </Box>
                  ) : (
                    <Box marginTop={[0, 0, 0]} >
                      <Box onClick={handleToggle} style={defaultStyle} p={1}>
                        Cash On Delivery
                      </Box>
                      <Box
                        mt={4}
                        onClick={handleToggle}
                        style={activeStyle}
                        p={1}
                      >
                        PhonePe/PayPal
                      </Box>
                      <Box mt={4} style={defaultStyle} p={1}>
                      Credit/Debit
                      </Box>
                      <Box mt={4} style={defaultStyle} p={1}>
                        Pay-tm/Wallets
                      </Box>
                      <Box mt={4} style={defaultStyle} p={1}>
                        Net Banking
                      </Box>
                      <Box mt={4} style={defaultStyle} p={1}>
                        EMI/Pay Later
                      </Box>
                    </Box>
                  )}
                  {toggle ? (
                    <Box p={1}>
                      <Stack border={"0px solid"} textAlign="left" spacing={4}>
                        <FormControl>
                          <Stack spacing={4}>
                            <Text marginBottom={"30px"} fontWeight={"700"} textAlign={'center'}>
                              Pay On Delivery (Cash/UPI)
                            </Text>
                            <Text fontSize={"12px"} color={"gray"}>
                              You can pay via Cash or UPI enabled app at the
                              time on delivery. Ask executive for these options
                            </Text>
                            <Button
                              background={"#ff3f6c"}
                              color="#fff"
                              _hover={{
                                backgroundColor: "#fff36c",
                              }}
                            >
                              Place Order
                            </Button>
                          </Stack>
                        </FormControl>
                      </Stack>
                    </Box>
                  ) : (
                    <Box p={8}>
                      <PaymentMethod/>
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