import { Box,  Flex, HStack, Select } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from "../Styles/Navbar.module.css";
import React from "react";
const link = [
  
  { to: "/FantacyCenter", element: "FantacyCenter" },
  { to: "/Criclytics", element: "Criclytics" },
  { to: "/Schedule", element: "Schedule" },
  { to: "/Series", element: "Series" },
  { to: "/News", element: "News" },
  { to: "/Video", element: "Video" },
  { to: "/Player", element: "Player" },
  { to: "/Team", element: "Team" },
];
const Navbar = () => {
  return (
    <Box className={styles.Navbarbox} >
      <Flex justifyContent="space-around" className={styles.navflex} >
        <HStack spacing="40px"  >
          <Box>
            <Link to="/">
              <img src="https://www.cricket.com/cricket.com.svg" alt="" />
            </Link>
          </Box>
          {link.map((e) => (
            <Box key={e.to}>
              <Link to={e.to} className={styles.link}>
                {e.element}
              </Link>
            </Box>
          ))}
          <Box>
            <Select placeholder="More" width="55%" className={styles.selectatg}>
              <option value="option1">Stadium</option>
              <option value="option2">Ranking</option>
              <option value="option3">Archive</option>

              <option value="option2">Record</option>
              <option value="option3">Season Fantacy</option>
              <option value="option3">Profile</option>
            </Select>
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
