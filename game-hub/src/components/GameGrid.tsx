import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { list, Image } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  playtime: number;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const { games, errors } = useGames();
  return (
    <ul>
      {games.map((game) => (
        <li key={game.id}>
          {game.name}
          <Image
            src={game.background_image}
            alt="backgroun image"
            w="100px"
            h="60px"
          />
        </li>
      ))}
    </ul>
  );
};

export default GameGrid;
