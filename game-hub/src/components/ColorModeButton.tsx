import {
  FormLabel,
  HStack,
  Stack,
  Switch,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

const ColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Stack direction="row" position="fixed" top={0} right={0} padding="10px">
      <FormLabel htmlFor="colorswitch" left={2} pr={0}>
        Switch color
      </FormLabel>
      <Switch
        id="colorswitch"
        colorScheme="teal"
        size="lg"
        pl={0}
        onChange={toggleColorMode}
        // position="fixed"
        // top={0}
        // right={0}
        // p={4}
        // pl={0}
      />
    </Stack>
  );
};

export default ColorModeButton;
