import { Grid, GridItem, Hide, Show } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ColorModeButton from "./components/ColorModeButton";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"header" "main"`,
        md: `"header header" "aside main"`,
      }}
      gap={1}
      gridTemplateRows={{
        base: "70px auto",
        md: "50px auto",
      }}
      gridTemplateColumns={{
        base: "1fr",
        md: "250px 1fr",
      }}
    >
      <GridItem pl="3" area={"header"}>
        <NavBar />
        <ColorModeButton></ColorModeButton>
      </GridItem>
      <GridItem
        pl="2"
        area={"aside"}
        display={{ base: "none", md: "block" }}
      >
        Aside
      </GridItem>
      <GridItem pl="3" area={"main"} w={"100%"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
