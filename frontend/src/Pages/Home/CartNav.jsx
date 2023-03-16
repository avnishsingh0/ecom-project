import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Bag from "../../Components/Bag";
const CartNav = () => {
  return (
    <>
      <Box
        border={"0px solid red"}
        h={"3.5rem"}
        display={"flex"}
        alignItems={"center"}
        m={"auto"}
        mb={"1.8rem"}
        justifyContent={"space-between"}
      >
        <Box>
          <Image
            w={"28%"}
            src={
              "data:image/png;base64,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"
            }
          />
        </Box>
        <Box
          w={{ base: "55%", sm: "40%", md: "35%", lg: "20%" }}
          ml={{ base: "-8rem", sm: "-5rem", md: "-5rem", lg: "" }}
          border={"0px solid red"}
          display={"flex"}
          justifyContent={"space-around"}
          color={"#a9a9a9"}
          fontWeight={"bold"}
        >
          <Link to={"/cart/bag"}>Bag</Link>
          <Link to={"/cart/address"}>Address</Link>
          <Link to={"/cart/payment"}>Payment</Link>
        </Box>

        <Image
          w={{ base: "18%", sm: "18%", md: "15%", lg: "10%" }}
          src="https://st2.depositphotos.com/44162236/43265/v/600/depositphotos_432658838-stock-illustration-100-secure-grunge-vector-icon.jpg"
        />
      </Box>
      <hr />
      {/* <Bag/> */}
    </>
  );
};

export default CartNav;
