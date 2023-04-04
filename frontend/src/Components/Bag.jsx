import {
  Box,
  Button,
  Collapse,
  Flex,
  Image,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { MdOutlineEventAvailable } from "react-icons/md";
import React, { useEffect } from "react";
import CartNav from "../Pages/Home/CartNav";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Cart/action";
import SingleCard from "./SingleCard";

const Bag = () => {
  const dispatch = useDispatch();
  const { onOpen } = useDisclosure();
  const { id } = useParams();
  const qty = window.location.search
    ? Number(window.location.search.split("=")[1])
    : 1;
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  const cart = useSelector((state) => state.cartReducer);
  const { cartItems } = cart;

  return (
    <>
      <CartNav step1 />
      <SimpleGrid
        columns={[1, 1, 2, 2]}
        w={{ base: "95%", sm: "95%", md: "90%", lg: "75%" }}
        m={"auto"}
        gap={1}
        mt={5}
      >
        <Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            h={"4.5rem"}
            alignItems={"center"}
            p={"1rem"}
            boxShadow={
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"
            }
          >
            <Box fontSize={"14px"}>
              Deliver to: <b>843302</b>
            </Box>
            <Button colorScheme="red" variant="outline" borderRadius={"0px"}>
              CHANGE ADDRESS
            </Button>
          </Box>
          <Box
            p={"1rem"}
            boxShadow={
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"
            }
            mt={2}
          >
            <Flex>
              <Text mt={1}>
                <MdOutlineEventAvailable />
              </Text>
              <Text ml={3} fontWeight={"500"}>
                Available Offers
              </Text>
            </Flex>
            <Collapse startingHeight={20} in={show}>
              <UnorderedList>
                <ListItem ml={1}>Lorem ipsum dolor sit amet</ListItem>
                <ListItem ml={1}>Consectetur adipiscing elit</ListItem>
                <ListItem ml={1}>Integer molestie lorem at massa</ListItem>
                <ListItem ml={1}>Facilisis in pretium nisl aliquet</ListItem>
              </UnorderedList>
            </Collapse>
            <Text
              size="sm"
              onClick={handleToggle}
              mt="2px"
              color={"red"}
              cursor={"pointer"}
              fontWeight={"500"}
            >
              Show {show ? "Less" : "More"}
            </Text>
          </Box>
          {cartItems.length > 0 &&
            cartItems.map((el) => {
              return <SingleCard key={el._id} card={el} />;
            })}
        </Box>
        <Box
          border={"0px solid red"}
          p={"1rem"}
          w={{ base: "100%", sm: "95%", md: "90%", lg: "75%" }}
        >
          <Text fontWeight={"600"}>COUPONS</Text>
          <Flex justifyContent={"space-between"} mt={"1rem"} mb={"1rem"}>
            <Text mt={1} fontSize={"19px"}>
              <BiPurchaseTagAlt />
            </Text>
            <Text ml={"-7rem"} fontWeight={"600"}>
              Apply Coupons
            </Text>
            <Button
              colorScheme="red"
              variant="outline"
              borderRadius={"0px"}
              h={"2rem"}
              onClick={onOpen}
            >
              APPLY
            </Button>
          </Flex>
          <hr />
          <Text fontSize={"12px"} fontWeight={"600"} mt={"1rem"}>
            GIFTING & PERSONALISATION
          </Text>
          <Flex
            bg={"#fff1ec"}
            alignItems="center"
            borderRadius={"5px"}
            mt={"1rem"}
            mb={"1rem"}
          >
            <Image
              ml={3}
              w={"11%"}
              src={
                "https://constant.myntassets.com/checkout/assets/img/gift-big.webp"
              }
            />
            <Box ml={4}>
              <Text fontWeight={"600"}>Buying for a loved one ?</Text>
              <Text fontWeight={"400"} fontSize={"13px"}>
                Gift wrap and personalised message on card, Only for 25
              </Text>
              <Text fontWeight={"bold"} fontSize={"11.5px"} color={"red"}>
                ADD GIFT WRAP
              </Text>
            </Box>
          </Flex>
          <hr />
          <Text mt={"1rem"} fontWeight={"600"} fontSize={"12px"}>
            PRICE DETAILS ({cartItems.reduce((acc, item) => acc + item.qty, 0)}{" "}
            items)
          </Text>
          <Flex justifyContent={"space-between"} mt={2} fontSize={"14px"}>
            <Text>Total MRP </Text>
            <Text>
              ₹{" "}
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2) *
                2 -
                10}
            </Text>
          </Flex>
          <Flex justifyContent={"space-between"} mt={2} fontSize={"14px"}>
            <Text>Discount on MRP </Text>
            <Text color={"green"}>
              -₹{" "}
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2) + 10}
            </Text>
          </Flex>
          <Flex justifyContent={"space-between"} mt={2} fontSize={"14px"}>
            <Text>Coupon Discount </Text>
            <Text color="red">Apply Coupon</Text>
          </Flex>
          <Flex
            justifyContent={"space-between"}
            mt={2}
            fontSize={"14px"}
            mb={3}
          >
            <Text>Convenience Fee </Text>
            <Text color="green">Free</Text>
          </Flex>
          <hr />
          <Flex justifyContent={"space-between"} mt={2} fontSize={"16px"}>
            <Text fontWeight={"600"}>Total Amount</Text>
            <Text fontWeight={"600"}>
              ₹{" "}
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </Text>
          </Flex>
          <Link to="/cart/address">
            <Button w={"100%"} mt={3} borderRadius={"0"} colorScheme="red">
              PLACE ORDER
            </Button>
          </Link>
        </Box>
        <Box></Box>
      </SimpleGrid>
    </>
  );
};

export default Bag;
