import styled from "styled-components";
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getWinterData } from '../Redux/Winter/action'
import WinterCard from './WinterCard'
import { Box, SimpleGrid } from "@chakra-ui/react";
import { useLocation, useSearchParams } from "react-router-dom";
import Loading from "./Loader";
const WinterList = () => {
  const {winterReducer}= useSelector((store)=>store)
  const {isLoading}=winterReducer
  const winter=winterReducer.winterdata
  const dispatch = useDispatch();
  const location = useLocation()
  const [searchParams] = useSearchParams()
  React.useEffect(() => {
    if(location || winter.length===0 ){
      const getWinterParams={
        params: {
          category: searchParams.getAll('category'),
          brand: searchParams.getAll('brand')
        }
      }
      dispatch(getWinterData(getWinterParams));
    } 
  }, [winter.length, dispatch, location.search]);
  if (isLoading) {
    return <Loading/>;
  }
  return (
    <Box mt={"3.5rem"}>
    <SimpleGrid  columns={[2,2,3,4]} gap={5} >
      {winter.length>0 &&
        winter.map((el)=>{
          return <WinterCard key={el._id} winterdata={el}/>
        })}
        </SimpleGrid>
    </Box>
  )
}
export default WinterList
