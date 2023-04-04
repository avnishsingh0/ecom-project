import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const SucessMSg = ({massage}) => {
  return (
    <Alert status='success'>
    <AlertIcon />
    {massage}
  </Alert>
  )
}

export default SucessMSg