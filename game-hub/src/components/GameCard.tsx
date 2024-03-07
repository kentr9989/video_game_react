import React from "react";
import { Game } from "../hooks/useGames";
import { Card, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image></Image>
    </Card>
  );
};

export default GameCard;
