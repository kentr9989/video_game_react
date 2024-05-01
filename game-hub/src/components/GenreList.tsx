import React from "react";
import useGenres from "../hooks/useGenres";
import { HStack, List, ListItem, Image, Text, Button } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import { Genre } from "../hooks/useGenres";

interface Props {
  onSelectedGenre: (genre: Genre | null) => void;
  boldSelectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, boldSelectedGenre }: Props) => {
  const { genres } = useGenres();
  return (
    <List>
      <Button
        onClick={() => onSelectedGenre(null)}
        variant="link"
        marginY="10px"
        colorScheme="blue"
      >
        All Games
      </Button>{" "}
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            <Button
              fontWeight={
                genre.id === boldSelectedGenre?.id ? "bold" : "normal"
              }
              onClick={() => onSelectedGenre(genre)}
              fontSize="lg"
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
