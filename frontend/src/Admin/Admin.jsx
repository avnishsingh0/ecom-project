import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  RadioGroup,
  HStack,
  Radio,
  Button,
  Select,
} from "@chakra-ui/react";
import {useDispatch} from 'react-redux'
import styled from "styled-components";
import { addProduct } from "../Redux/Admin/action";

let initalState = {
  image: "",
  brand: "",
  price: "",
  title: "",
  category: "",
};
const Admin = () => {
  const [admin, setAdmin] = useState(initalState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setAdmin((prev) => {
      return { ...prev, [name]: name === "price" ? +value : value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(admin));
    setAdmin(initalState);
  };
  return (
    <WinterWrapper>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <FormControl>
          <FormLabel>Image</FormLabel>
          <Input
            type="url"
            name="image"
            value={admin.image}
            onChange={(e) => handleChange(e)}
          />
          <FormLabel>Brand</FormLabel>
          <Input type="text"
           name="brand"
           value={admin.brand}
           onChange={(e) => handleChange(e)}
            />
          <FormLabel>Price</FormLabel>
          <Input type="number" 
          name="price" 
          value={admin.price}
          onChange={(e)=>handleChange(e)}
           />
          <FormLabel>Title</FormLabel>
          <Input type="text" 
          name="title"
            value={admin.title}
            onChange={(e)=>handleChange(e)}
          />
           <FormLabel>Category</FormLabel>
          <Input type="text" 
          name="category"
            value={admin.category}
            onChange={(e)=>handleChange(e)}
          />
          <FormLabel>Select Gender</FormLabel>
          <Select name="gender" onChange={(e)=>handleChange(e)}>
            <option value="">Select Gender</option>
            <option value="male">Men</option>
            <option value="female">Women</option>
            <option value="kids">Kids</option>
          </Select>
          <Button type="submit">Add Product</Button>
        </FormControl>
      </form>
    </WinterWrapper>
  );
};

const WinterWrapper = styled.div`
  padding: 40px;
  width: 50%;
  margin: auto;
`;

export default Admin;
