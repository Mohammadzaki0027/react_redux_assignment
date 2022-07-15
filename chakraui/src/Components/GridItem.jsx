import { Box } from '@chakra-ui/react'
import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
const Griditem = () => {
    let items=Array(12).fill(0).map((e,i)=>i+1)
    console.log(items);
  return (
   <Box>
<SimpleGrid columns={{
    base:1,
    sm:2,
    md:3,
    lg:4,
    xl:5,
   
}} >
{items.map((e)=>{
    return  <Box key={e}>{e}</Box>
})}
</SimpleGrid>
   </Box>
  )
}

export default Griditem