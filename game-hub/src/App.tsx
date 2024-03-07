import { Grid, GridItem, Hide, Show } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

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
      </GridItem>
      <GridItem
        pl="2"
        bg="green.200"
        area={"aside"}
        display={{ base: "none", md: "block" }}
      >
        Aside
      </GridItem>
      <GridItem pl="3" bg="green.300" area={"main"} w={"100%"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
