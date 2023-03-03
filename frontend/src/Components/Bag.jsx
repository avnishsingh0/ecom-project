import {
  Box,
  Button,
  Collapse,
  Flex,
  Image,
  ListItem,
  Select,
  SimpleGrid,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useState } from "react";
import CartNav from "../Pages/Home/CartNav";
import { MdKeyboardArrowUp, MdOutlineEventAvailable } from "react-icons/md";
import {AiOutlineClose} from 'react-icons/ai'
const Bag = () => {
  const t = 100;
  const [values, setValues] = useState(t);
  const handleChange = (e) => {
    const { value } = e.target;
    setValues(t * value);
  };
  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);
  return (
    <>
      <CartNav />
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

          <Flex
          mt={2}
            p={"0.5rem"}
            boxShadow={
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"
            }
          >
            <Box border={'0px solid red'}  w={"25%"}>
              <Image
              //  objectFit={'cover'}
                src={
                  "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/5842076/2018/12/20/353cd269-5498-4aa9-a6ca-c503fcd2f2c61545286560719-HRX-by-Hrithik-Roshan-Men-White-Rapid-Dry-Camo-Training-T-sh-1.jpg"
                }
              />
            </Box>
            <Box ml={3} textAlign={'justify'} border={'0px solid red'} w={'85%'}>
              <Text>HRX by Hrithik Roshan</Text>
              <Text>Men White Rapid  T-shirt</Text>
              <Text color={'#a9a9a9 '} fontWeight={'600'} fontSize={'12px'}>Sold by: Omnitech Retail</Text>
              <Flex>
                <Select mt={2}  fontWeight={'600'} fontSize={"14px"} w={{ base: "40%", sm: "40%", md: "46%", lg: "30%" }} h={'1.5rem'} bg={"#f5f5f6"}>
                  <option>Size: M</option>
                  <option>Size: L</option>
                  <option>Size: XL</option>
                  <option>Size: XXL</option>
                </Select>
                <Select mt={2} ml={2} fontWeight={'600'} fontSize={"14px"} w={{ base: "40%", sm: "40%", md: "46%", lg: "30%" }} h={'1.5rem'} bg={"#f5f5f6"}>
                  <option>Qty: 1</option>
                  <option>Qty: 2</option>
                  <option>Qty: 3</option>
                </Select>
              </Flex>
              <Flex gap={2} mt={2}>
              <Text fontWeight={'600'}>₹659</Text>
              <Text color={'#a9a9a9 '} as={'del'}>₹1099</Text>
              <Text color={'red'}>₹659 OFF</Text>
              </Flex>
            </Box>
            <Box cursor={'pointer'}><AiOutlineClose/></Box>
          </Flex>
          <Flex
          mt={2}
            p={"0.5rem"}
            boxShadow={
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"
            }
          >
            <Box border={'0px solid red'}  w={"25%"}>
              <Image
              //  objectFit={'cover'}
                src={
                  "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/5842076/2018/12/20/353cd269-5498-4aa9-a6ca-c503fcd2f2c61545286560719-HRX-by-Hrithik-Roshan-Men-White-Rapid-Dry-Camo-Training-T-sh-1.jpg"
                }
              />
            </Box>
            <Box ml={3} textAlign={'justify'} border={'0px solid red'} w={'85%'}>
              <Text>HRX by Hrithik Roshan</Text>
              <Text>Men White Rapid  T-shirt</Text>
              <Text color={'#a9a9a9 '} fontWeight={'600'} fontSize={'12px'}>Sold by: Omnitech Retail</Text>
              <Flex>
                <Select mt={2}  fontWeight={'600'} fontSize={"14px"} w={{ base: "40%", sm: "40%", md: "46%", lg: "30%" }} h={'1.5rem'} bg={"#f5f5f6"}>
                  <option>Size: M</option>
                  <option>Size: L</option>
                  <option>Size: XL</option>
                  <option>Size: XXL</option>
                </Select>
                <Select mt={2} ml={2} fontWeight={'600'} fontSize={"14px"} w={{ base: "40%", sm: "40%", md: "46%", lg: "30%" }} h={'1.5rem'} bg={"#f5f5f6"}>
                  <option>Qty: 1</option>
                  <option>Qty: 2</option>
                  <option>Qty: 3</option>
                </Select>
              </Flex>
              <Flex gap={2} mt={2}>
              <Text fontWeight={'600'}>₹659</Text>
              <Text color={'#a9a9a9 '} as={'del'}>₹1099</Text>
              <Text color={'red'}>₹659 OFF</Text>
              </Flex>
            </Box>
            <Box cursor={'pointer'}><AiOutlineClose/></Box>
          </Flex>
           <Flex
          mt={2}
            p={"0.5rem"}
            boxShadow={
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"
            }
          >
            <Box border={'0px solid red'}  w={"25%"}>
              <Image
              //  objectFit={'cover'}
                src={
                  "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/5842076/2018/12/20/353cd269-5498-4aa9-a6ca-c503fcd2f2c61545286560719-HRX-by-Hrithik-Roshan-Men-White-Rapid-Dry-Camo-Training-T-sh-1.jpg"
                }
              />
            </Box>
            <Box ml={3} textAlign={'justify'} border={'0px solid red'} w={'85%'}>
              <Text>HRX by Hrithik Roshan</Text>
              <Text>Men White Rapid  T-shirt</Text>
              <Text color={'#a9a9a9 '} fontWeight={'600'} fontSize={'12px'}>Sold by: Omnitech Retail</Text>
              <Flex>
                <Select mt={2}  fontWeight={'600'} fontSize={"14px"} w={{ base: "40%", sm: "40%", md: "46%", lg: "30%" }} h={'1.5rem'} bg={"#f5f5f6"}>
                  <option>Size: M</option>
                  <option>Size: L</option>
                  <option>Size: XL</option>
                  <option>Size: XXL</option>
                </Select>
                <Select mt={2} ml={2} fontWeight={'600'} fontSize={"14px"} w={{ base: "40%", sm: "40%", md: "46%", lg: "30%" }} h={'1.5rem'} bg={"#f5f5f6"}>
                  <option>Qty: 1</option>
                  <option>Qty: 2</option>
                  <option>Qty: 3</option>
                </Select>
              </Flex>
              <Flex gap={2} mt={2}>
              <Text fontWeight={'600'}>₹659</Text>
              <Text color={'#a9a9a9 '} as={'del'}>₹1099</Text>
              <Text color={'red'}>₹659 OFF</Text>
              </Flex>
            </Box>
            <Box cursor={'pointer'}><AiOutlineClose/></Box>
          </Flex>
        </Box>
        <Box border={"1px solid red"}>a</Box>
      </SimpleGrid>
    </>
  );
};

export default Bag;
