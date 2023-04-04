import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Img, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartNav from "../Pages/Home/CartNav";
import { createOrder } from "../Redux/Orders/action";

const PlaceHolder = () => {
  const cart = useSelector((state) => state.cartReducer);
  const { cartItems } = cart;
  const { shippingAdress } = cart;

  const dispatch = useDispatch();
  const orderCreate = useSelector((state) => state.orderCreateReducer);

  const navigate = useNavigate();
  const { success } = orderCreate;

  const addDecimal = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };
  cart.itemsPrice = addDecimal(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  cart.shippingPrice = addDecimal(cart.cartItems > 500 ? 0 : 50);
  cart.taxPrice = addDecimal(Number((0.15 * cart.itemsPrice).toFixed(2)));
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2);
  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAdress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };
  useEffect(() => {
    if (success) {
      navigate(`/cart/confirm`);
    }
  }, [success]);

  return (
    <Box>
      <CartNav step1 step2 step3 step4 />
      <Box textAlign="center">
        <SimpleGrid
          columns={[1, 1, 2, 3]}
          pt={"3rem"}
          m={"auto"}
          p={"1rem"}
          gap={3}
        >
          <Box
            boxShadow={
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"
            }
            textAlign={"justify"}
            pl={"1rem"}
          >
            <Text mt={"1rem"}>Delivering to:</Text>
            <Text fontWeight={"bold"} mt={"1rem"}>
              {shippingAdress.name} | {shippingAdress.mobile}
            </Text>
            <Text>
              {shippingAdress.address}, {shippingAdress.locality}
            </Text>
            <Text fontWeight={"500"}>Payment Method :- Paypal</Text>
            <Button
              mt={"1rem"}
              mb={"1rem"}
              rightIcon={<ChevronRightIcon />}
              colorScheme="red"
              variant="outline"
            >
              ORDER DETAILS
            </Button>
          </Box>

          <Box
            boxShadow={
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"
            }
            textAlign={"justify"}
            pl={"1rem"}
          >
            <Text fontWeight={"bold"} mt={"1rem"}>
              ORDER ITEMS
            </Text>

            {cartItems.length === 0 ? (
              <Text>Your Cart is Empty</Text>
            ) : (
              <Box>
                {cartItems.map((item, index) => (
                  <Box
                    key={index}
                    justifyContent={"space-around"}
                    display={"flex"}
                    mt={2}
                  >
                    <Box w={"10%"} border={"0px solid"}>
                      <Img objectFit={"cover"} src={item.image} />
                    </Box>
                    <Link to={`/detalspage/${item.product}`}>
                      <Box
                        border={"0px solid"}
                        mt={3}
                        fontWeight={"500"}
                        fontSize={"10px"}
                      >
                        {item.name}
                      </Box>
                    </Link>
                    <Box
                      border={"0px solid"}
                      mt={3}
                      fontWeight={"500"}
                      fontSize={"10px"}
                    >
                      {item.qty} X ₹{item.price} = ₹{item.price}
                    </Box>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
          <Box
            boxShadow={
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"
            }
            textAlign={"justify"}
            pl={"1rem"}
          >
            <Text fontWeight={"bold"} mt={"1rem"}>
              Order Summary
            </Text>
            <Flex textAlign={"justify"} mt={2} fontSize={"14px"}>
              <Text fontWeight={"500"}>Items </Text>
              <Text fontWeight={"500"} ml={"10rem"}>
                ₹ {cart.itemsPrice}
              </Text>
            </Flex>
            <Flex mt={2} fontSize={"14px"}>
              <Text fontWeight={"500"}>Shipping </Text>
              <Text fontWeight={"500"} ml={"8.7rem"}>
                ₹ {cart.shippingPrice}
              </Text>
            </Flex>
            <Flex mt={2} fontSize={"14px"}>
              <Text fontWeight={"500"}>Tax </Text>
              <Text fontWeight={"500"} ml={"11rem"}>
                ₹ {cart.taxPrice}
              </Text>
            </Flex>
            <Flex mt={2} fontSize={"14px"}>
              <Text fontWeight={"500"}>Total </Text>
              <Text fontWeight={"500"} ml={"10.5rem"}>
                ₹ {cart.totalPrice}
              </Text>
            </Flex>
          </Box>
        </SimpleGrid>
        <Button
          type="button"
          w={{ base: "95%", sm: "95%", md: "50%", lg: "30%" }}
          mt={3}
          borderRadius={"0"}
          colorScheme="red"
          disabled={cart.cartItems === 0}
          onClick={placeOrderHandler}
        >
          PLACE ORDER
        </Button>
      </Box>
    </Box>
  );
};

export default PlaceHolder;
