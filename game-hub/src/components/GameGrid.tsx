import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { list, Image, Text, SimpleGrid, Flex, Grid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";

export interface Platform {
  platform: any;
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  playtime: number;
  parent_platforms: { platform: Platform }[];
  genres: Genre[];
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

interface Props {
  filterGameBasedOnGenre: Genre | null;
}

const GameGrid = ({ filterGameBasedOnGenre }: Props) => {
  const { games, errors, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  const filteredGames = filterGameBasedOnGenre
    ? games.filter((game) =>
        game.genres?.some(
          (genre: Genre) => genre.id === filterGameBasedOnGenre.id
        )
      )
    : games;
  console.log(filteredGames);
  return (
    <>
      {errors && <Text>{errors}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding="15px" spacing={10}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardSkeleton key={skeleton}></GameCardSkeleton>
          ))}
        {filteredGames.length === 0 && (
          <Flex height="80vh" width="60vw" justifyContent="center" alignItems="center">
            <Text  fontSize="xl" >
              No result found
            </Text>
          </Flex>
        )}
        {filteredGames.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
