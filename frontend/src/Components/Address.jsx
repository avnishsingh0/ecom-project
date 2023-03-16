import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import CartNav from "../Pages/Home/CartNav";

const Address = () => {
  const grandtotal=100;
  const totalItems=4;
  return (
    <>
      <CartNav />
      <SimpleGrid
        columns={[1, 1, 2, 2]}
        w={{ base: "95%", sm: "95%", md: "90%", lg: "70%" }}
        gap={1}
        m={"auto"}
        mt={5}
      >
        <Box
          boxShadow={
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"
          }
          p={"1rem"}
        >
          <form>
            <FormControl>
              <FormLabel fontWeight={'bold'} fontSize={'12px'}>CONTACT DETAILS</FormLabel>
              <Input mt={'1rem'} placeholder="Name*"/>
              <Input mt={'1rem'} placeholder="Mobile No*"/>
              <FormLabel fontWeight={'bold'} fontSize={'12px'} mt={'2rem'}>ADDRESS</FormLabel>
              <Input mt={'1rem'} placeholder="Pin Code*"/>
              <Input mt={'1rem'} placeholder="Address (House No, Building, Street, Area)*"/>
              <Input mt={'1rem'} placeholder="Locality / Town*"/>
              <Link to={"/cart/payment"}>

              <Button w={'100%'} mt={3} borderRadius={'0'} colorScheme='red'>ADD ADDRESS</Button>
              </Link>
            </FormControl>
          </form>
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
  );
};

export default Address;
