import {
  Button,
  Checkbox,
  FormControl,
  Radio,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savePaymentMethod } from "../Redux/Cart/action";

const PaymentMethod = () => {
    const dispatch = useDispatch();
    const navigate= useNavigate()
    const [paymentMethod, setPaymentMethod] = useState("paypal");
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        navigate("/cart/placeholder");
      };
  return (
    <div>
      <Stack border={"0px solid"} spacing={4}>
      <form onSubmit={submitHandler}>
        <FormControl >
          <Stack spacing={4}>
            <Text marginBottom={"10px"} fontWeight={"700"} textAlign={"center"}>
              Payment to PayPal
            </Text>

            <Radio
              colorScheme="red"
              defaultChecked
              id="paypal"
              name="paymentMethod"
              value="paypal"
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              Radio
            </Radio>
            <Text fontSize={"12px"} color={"gray"}>
              You can pay via Cash or UPI enabled app at the time
            </Text>
            <Button
              background={"#ff3f6c"}
              color="#fff"
              _hover={{
                backgroundColor: "#fff36c",
              }}
              type="submit"
            >
              Place Order
            </Button>
          </Stack>
        </FormControl>
        </form>
      </Stack>
    </div>
  );
};

export default PaymentMethod;
