import React from 'react'
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
  } from '@chakra-ui/react'
  import styled from 'styled-components'
const Admin = () => {
  return (
    <WinterWrapper>
   <FormControl>
    <FormLabel>Image</FormLabel>
    <Input type="url"/>
    <FormLabel>Brand</FormLabel>
    <Input type="text"/>
    <FormLabel>Price</FormLabel>
    <Input type="number"/>
    <FormLabel>Description</FormLabel>
    <Input type="text"/>
    <FormLabel>Select Gender</FormLabel>
    <Input type="url"/>

    <RadioGroup>
        <HStack spacing="24px">
            <Radio value='men'>Men</Radio>
            <Radio value='female'>Women</Radio>
            <Radio value='kids'>kids</Radio>
        </HStack>
    </RadioGroup>
    <Button>Add Product</Button>
   </FormControl>
   </WinterWrapper>
  )
}

const WinterWrapper= styled.div`
padding:40px;
width:50%;
margin:auto
`

export default Admin