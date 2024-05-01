import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import axios, {AxiosError} from 'axios';

interface Platform {
    id : number; 
    name : string; 
    slug : string;

}

interface FetchPlatformsResponse {
    count: number;
    results: Platform[];
}

const usePlatforms = () => {
    const [platforms,setPlatform] = useState<Platform[]>([]);
    const [errors, setError] = useState("");
    const [isLoading,setLoading] = useState(false);

    useEffect( () =>  {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchPlatformsResponse>("/platforms/lists/parents", { signal : controller.signal })
        .then((res) => {
        setPlatform(res.data.results);
            setLoading(false);
        })
        .catch((err) => {
            if (axios.isCancel(err)) return;
            setError(err.message);
            setLoading(false);
        });
      return () => controller.abort();
    }, []);
    
    return { platforms, errors , isLoading} ;
};

export default usePlatforms;