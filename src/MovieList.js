import { Movie } from "./App.js";

export function MovieList({ movies }) {
    return (
        <div className="movie-list">
            {movies.map(({ name, poster, rating, summary }) => (

                < Movie name={name} poster={poster} rating={rating} summary={summary} />
            ))}


        </div >
    );
}
