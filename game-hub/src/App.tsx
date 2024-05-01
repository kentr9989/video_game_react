import { Grid, GridItem, Hide, Show } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ColorModeButton from "./components/ColorModeButton";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

import PlatformSelector from "./components/PlatformSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  
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
      <GridItem pl="1" area={"header"}>
        <NavBar />
        <ColorModeButton></ColorModeButton>
      </GridItem>
      <GridItem
        pl="2"
        area={"aside"}
        display={{ base: "none", md: "block" }}
        paddingX={5}
      >
        <GenreList
          boldSelectedGenre={selectedGenre}
          onSelectedGenre={(genre) => setSelectedGenre(genre)}
        ></GenreList>
      </GridItem>
      <GridItem pl="3" area={"main"} w={"100%"}>
         <PlatformSelector ></PlatformSelector>
        <GameGrid filterGameBasedOnGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;

