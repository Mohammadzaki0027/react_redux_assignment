import React from 'react'
import {Box,Button,Flex, Spacer} from "@chakra-ui/react"
const Navbar = () => {
  return (
<Box>
    <Flex gap="1rem" p="1rem" borderBottom="1px" borderColor="gray.200">
     <Button variant="solid">4D</Button>
     <Spacer></Spacer>
     <Button variant="ghost">Sign In</Button>
     <Button variant="outline">Sign Up</Button>
     <Button variant="solid">Post a Job 🚀</Button>
    </Flex>
</Box>
  )
}

export default Navbar