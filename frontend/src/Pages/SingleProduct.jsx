import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../CSS/SingleProduct.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { BiDetail, BiPurchaseTag } from "react-icons/bi";
import axios from "axios";
import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  ListItem,
  SimpleGrid,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";
import SizeProduct from "../Components/SizeProduct";
import ReviewCards from "../Components/ReviewCards";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Winter/action";
import Navbar from "./Navbar";
const SingleProduct = () => {
  const { id } = useParams();
  const [single, setSingle] = useState({});
  const [sizes, setSizes] = useState("5(44.5)");
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/Winter/${id}`)
      .then((r) => {
        setSingle({ ...r.data });
      })
      .catch((e) => {});
  }, [setSingle]);
  const toast = useToast();
  const handleAddToCart = () => {
    dispatch(addToCart({ ...single }));
    toast({
      position: "top",
      title: "Add to cart.",
      status: "success",
      duration: 9000,
      isClosable: true,
    })
  };

  

  const { product_img } = single;
  const size = ["#ff755a", "#aecfed", "#0000ff", "#e42529"];
  const imgs = [
    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10673544/2019/9/24/6b9c7688-7ca2-4d11-9e5b-a3745ecd8f761569310358973-The-Indian-Garage-Co-Men-Shirts-8481569310357131-1.jpg",
    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10673544/2019/9/24/729859d8-cc66-4465-ba81-27028b9d7a461569310358945-The-Indian-Garage-Co-Men-Shirts-8481569310357131-2.jpg",
    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10673544/2019/9/24/66eb9c68-a2d9-41b1-8016-cf769e78d3a11569310358918-The-Indian-Garage-Co-Men-Shirts-8481569310357131-3.jpg",
    "https://cf-images.ap-southeast-1.prod.boltdns.net/v1/jit/5745608584001/fa2bf46e-f698-433e-b18a-e492e6d9dbc3/main/1280x720/21s56ms/match/image.jpg",
  ];
  const [mainImage, setMainImage] = useState(imgs[0]);
  let reviews = single.rewiew;
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    let stars = single.rating;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="icon" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <AiOutlineStar className="icon" />
        )}
      </span>
    );
  });

  return (
    <>
    <Navbar/>
    <Box>
      <SimpleGrid columns={[1, 1, 2, 2]} p={5}>
        <Box>
          <Image borderRadius={10} src={mainImage} w={250} m={"auto"} mt={5} />
          <SimpleGrid columns={[2, 4, 4, 4]} gap={4} p={5} m={"auto"}>
            {imgs.map((curLem, index) => {
              return (
                <Image
                  key={index}
                  cursor={"pointer"}
                  w={130}
                  borderRadius={10}
                  src={curLem}
                  onClick={() => setMainImage(curLem)}
                />
              );
            })}
          </SimpleGrid>
        </Box>
        <Box p={5} w={"90%"} border={"0px solid red"}>
          <Text fontWeight={"bold"} fontSize={"xl"}>
            {single.title}
          </Text>
          <Text fontSize={"xl"}>{single.titledetails}</Text>

          <Box display={"flex"} mt={5} mb={2}>
            {ratingStar}
            <Text ml={4}>({reviews} customer reviews)</Text>
          </Box>
          <hr />

          <Text mt={3} fontWeight={"bold"} fontSize={"sl"}>
            ₹{single.price} MRP
            <Text as="del" fontWeight={"400"} ml={1} mr={1}>
              ₹1699
            </Text>{" "}
            <span>(56% OFF)</span>
          </Text>
          <Text color="teal" fontWeight={"500"} mt={2} mb={2}>
            inclusive of all taxes
          </Text>
          <Box display={"flex"}>
            <Text mr={2}> Status: </Text>
            <Text
              fontWeight={"bold"}
              color={single.Stock < 1 ? "red" : "green"}
            >
              {single.Stock < 1 ? "OutOfStock" : "InStock"}
            </Text>
          </Box>
          <Text fontWeight={"bold"} mb={5} mt={2}>
            SELECT COLOR
          </Text>
          <SizeProduct size={size} />
          <HStack mt={7} mb={5}>
            <Button
              colorScheme="red"
              leftIcon={<AiOutlineShoppingCart />}
              onClick={
                handleAddToCart
                
              }
            >
              ADD TO BAG
            </Button>
            <Button colorScheme="teal" leftIcon={<AiOutlineHeart />}>
              WISHLIST
            </Button>
          </HStack>
          <hr />
          <Box display={"flex"} mt={4}>
            <Text fontWeight={"500"} mr={3}>
              DELIVERY OPTIONS
            </Text>
            <Text mt={1}>
              <TbTruckDelivery />
            </Text>
          </Box>
          <InputGroup size="md" w={"15rem"} mt={5}>
            <Input />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" bg={"white"} color={"pink.500"}>
                Check
              </Button>
            </InputRightElement>
          </InputGroup>
          <Text mt={3} fontSize={"13px"}>
            Please enter PIN code to check delivery time & Pay on Delivery
            Availability
          </Text>
          <Text mt={5}>Try & Buy might be available</Text>
          <Text mt={2}>100% Original Products</Text>
          <Text mt={2}>Pay on delivery might be available</Text>
          <Text mt={2}>Easy 30 days returns and exchanges</Text>
          <Box display={"flex"} mt={4}>
            <Text fontWeight={"bold"} mr={3}>
              BEST OFFERS{" "}
            </Text>
            <Text mt={1}>
              <BiPurchaseTag className="dil-font" />
            </Text>
          </Box>
          <Box display={"flex"} mt={4}>
            <Text fontWeight={"bold"}>Best Price:</Text>
            <Text ml={2} fontWeight={"bold"} color={"orange"}>
              Rs. {single.price - 200}
            </Text>
          </Box>
          <UnorderedList mt={4}>
            <ListItem>Coupon code: MYNTRA200</ListItem>
            <ListItem>
              Coupon Discount: Rs. 175 off (check cart for final savings)
            </ListItem>
            <ListItem>
              Applicable on: Orders above Rs. 799 (only on first purchase)
            </ListItem>
          </UnorderedList>
          <Text
            mb={6}
            mt={3}
            fontSize={"13px"}
            fontWeight={"bold"}
            color={"pink.500"}
          >
            View Eligible Products
          </Text>
          <hr />
          <Box display={"flex"} mt={4}>
            <Text fontWeight={"bold"} mr={3}>
              PRODUCT DETAILS{" "}
            </Text>
            <Text mt={1}>
              <BiDetail className="dil-font" />
            </Text>
          </Box>
          <Text mt={4}>Colour: maroon</Text>
          <Text>Ethnic motifs printed</Text>
          <Text>Round neck</Text>
          <Text>Three-quarter, regular sleeves</Text>
          <Text>Straight shape with regular style</Text>
          <Text>Thread work detail</Text>
          <Text>Calf length with straight hem</Text>
          <Text>Machine weave regular silk</Text>
          <Text fontWeight={"bold"} mt={3} mb={3}>
            Size & Fit
          </Text>
          <Text>The model (height 5'8) is wearing a size S</Text>
          <Text fontWeight={"bold"} mt={3} mb={2}>
            Material & Care
          </Text>
          <Text>100% VISCOSE MACHIN WASH</Text>
          <Text fontWeight={"bold"} mt={3}>
            Specifications
          </Text>
          <TableContainer mt={5} w={"80%"}>
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>Sleeve Length</Th>
                  <Th>Shape</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Three-Quarter Sleeves</Td>
                  <Td>Straight</Td>
                </Tr>
                <Tr>
                  <Td>Round Neck</Td>
                  <Td>Ethnic Motifs </Td>
                </Tr>
                <Tr>
                  <Td>Regular</Td>
                  <Td>Side Slits</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Text mt={3} mb={3} fontWeight={"bold"} color={"red"}>
            See more
          </Text>
          <hr />
          <Text fontWeight={"bold"} mt={2}>
            RATINGS
          </Text>
          {single.reviews && single.reviews[0] ? (
            <Box>
              {single.reviews &&
                single.reviews.map((reviews) => (
                  <ReviewCards reviews={reviews} />
                ))}
            </Box>
          ) : (
            <Text>Not reviews yet</Text>
          )}
        </Box>
      </SimpleGrid>
    </Box>
    </>
  );
};

export default SingleProduct;
