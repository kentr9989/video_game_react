import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { Game } from "./useGames";
import axios, {AxiosError} from 'axios';

export interface Genre {
    id : number;
    name : string;
    image_background : string;
    slug : string;
}

interface FetchGenresResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres,setGenres] = useState<Genre[]>([]);
    const [errors, setError] = useState("");
    const [isLoading,setLoading] = useState(false);

    useEffect( () =>  {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchGenresResponse>("/genres", { signal : controller.signal })
        .then((res) => {
        setGenres(res.data.results);
            setLoading(false);
        })
        .catch((err) => {
            if (axios.isCancel(err)) return;
            setError(err.message);
            setLoading(false);
        });
      return () => controller.abort();
    }, []);
    
    return { genres, errors , isLoading} ;
};

export default useGenres;