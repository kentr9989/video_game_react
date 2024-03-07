import React from "react";
import { Stack, HStack, VStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image
        src={logo}
        boxSize="60px"
        mt={"-1.5"}
        borderRadius="full"
        objectFit="cover"
      />
      <Text as="b" fontSize="xl">
        {" "}
        Nav Bar
      </Text>
    </HStack>
  );
};

export default NavBar;
