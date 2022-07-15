import React from "react";
import {
  Input,
  Box,
  Heading,
  Button,
  PinInput,
  PinInputField,
  Stack,
} from "@chakra-ui/react";


import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
const Form = () => {
  const [isloading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState({});
  const[otp,setOtp]=React.useState("")
  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleclick = (e) => {
    e.preventDefault();
console.log(otp)
  };


  return (
    <Box>
      <Heading>Form</Heading>
      <Stack direction="column" gap="0.5rem">
        <Box>
          <Input
            placeholder="enter username"
            width="auto"
            onChange={handlechange}
            name="username"
          />
        </Box>
        <Box>
          <Input
            placeholder="enter password"
            width="auto"
            name="password"
            onChange={handlechange}
          />
        </Box>
        <Box>
          <Button color="teal" isLoading={isloading} onClick={handleclick}>
            Sign Up
          </Button>
        </Box>
      </Stack>

      <PinInput value={otp} onChange={(value)=>{setOtp(value)}}>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>


      <Box>{otp}</Box>

      <Box>
      <Menu>
  <MenuButton as={Button} >
    Actions
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
      </Box>
    </Box>
  );
};

export default Form;
