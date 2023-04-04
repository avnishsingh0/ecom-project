import React from 'react'
import {Alert, AlertIcon} from '@chakra-ui/react'
const Alerts = () => {
  return (
    <Alert status='error'>
    <AlertIcon />
    Password do not macth
  </Alert>
  )
}

export default Alerts