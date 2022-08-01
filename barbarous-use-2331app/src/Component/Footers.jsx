import React from "react";
import styles from "../Styles/Navbar.module.css";
import { Box, Flex, HStack } from "@chakra-ui/react";
const Footers = () => {
  return (
    <Box 
    
    className={styles.footermainbox}
  >
      <Flex>
        <Flex>
          <HStack spacing="40px" marginTop="50px" marginLeft="50px">
            <Box verticalAlign="center">
              <img src="https://www.cricket.com/cricket.com.svg" alt="" />
              <h1 className={styles.live} >Cricket Live Never Before</h1>
            </Box>
          </HStack>
        </Flex>
        <Flex>
          <HStack spacing="40px" marginTop="50px" marginLeft="50px">
            <Box verticalAlign="center">
              <h1 className={styles.h1hover} >Term of Use</h1>
            </Box>
            <Box verticalAlign="center">
              <h1 className={styles.h1hover}>Privacy Policy</h1>
            </Box>
            <Box verticalAlign="center">
              <h1 className={styles.h1hover}>Cookies Policy</h1>
            </Box>
          </HStack>
        </Flex>
     <Flex marginLeft="100px">
          <HStack spacing="40px" marginTop="50px" marginLeft="50px">
            <Box verticalAlign="center">
          
            </Box>
            <Box verticalAlign="center">
              <h1 className={styles.live}>@ 2020 cricket.com | All rights reserved</h1>
            </Box>
        
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footers;
