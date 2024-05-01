import {
  FormLabel,
  HStack,
  Stack,
  Switch,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

const ColorModeButton = () => {
  // Use state for color mode
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Stack direction="row" position="fixed" top={0} right={0} padding="10px">
      <FormLabel htmlFor="colorswitch">
        Change color theme
      </FormLabel>
      <Switch
        id="colorswitch"
        colorScheme="teal"
        size="md"
        pl={0}
        onChange={toggleColorMode}
        mt={1}
      />
    </Stack>
  );
};

export default ColorModeButton;
