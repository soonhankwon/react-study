import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);

    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
    }
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            <h1>Detail</h1>
            <h2>Title: {movie.title}</h2>
            <li>Year: {movie.year}</li>
            <li>Rating: {movie.rating}</li>
        </div>
    );
}

export default Detail;