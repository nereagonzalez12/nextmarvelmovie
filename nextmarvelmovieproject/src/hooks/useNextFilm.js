import { useEffect, useState } from "react";
import { getNextFilm } from '../services/nextFilmService';

export function useNextFilm() {
    const [film, setFilm] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getNextFilm()
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
        console.log(film);
    }, []);

    return { film, loading };
}