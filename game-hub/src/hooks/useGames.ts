import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import axios, {AxiosError} from 'axios';

export interface Game {
    [x: string]: any;
    parent_platforms: any;
    id: number;
    name: string;
    background_image: string;
    metacritic: number;
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
    const [isLoading,setLoading] = useState(false);

    useEffect( () =>  {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchGamesResponse>("/games", { signal : controller.signal })
        .then((res) => {
            console.log(res.data);
            setGames(res.data.results);
            setLoading(false);
        })
        .catch((err) => {
            if (axios.isCancel(err)) return;
            setError(err.message);
            setLoading(false);
        });
      return () => controller.abort();
    }, []);
    
    return { games, errors , isLoading} ;
}

export default useGames;