import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import axios, {AxiosError} from 'axios';

export interface Game {
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

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [errors, setError] = useState("");
  
    useEffect( () =>  {
      const controller = new AbortController();

      apiClient
        .get<FetchGamesResponse>("/games", { signal : controller.signal })
        .then((res) => setGames(res.data.results))
        .catch((err) => {
            if (axios.isCancel(err)) return;
            return setError(err.message);
        });
      return () => controller.abort();
    }, []);
    
    return { games, errors} ;
}

export default useGames;