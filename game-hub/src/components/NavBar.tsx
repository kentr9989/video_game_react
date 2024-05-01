import React from "react";
import { Stack, HStack, VStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image
        src={logo}
        boxSize="40px"
        mt={"-1"}
        borderRadius="full"
        objectFit="cover"
      />
      <Text fontSize="15">
        {" "}
        Game hub 
      </Text>
    </HStack>
  );
};

export default NavBar;
