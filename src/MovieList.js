import { Movie } from "./App.js";

export function MovieList({ movies, setMovieList }) {
    return (
        <div className="movie-list">
            {movies.map(({ name, poster, rating, summary }, index) => (

                < Movie deleteButton={

                    <p onClick={() => {

                        const deleteIndex = index;
                        //remove the move with delete index..
                        //in other words allow other movies except deleteIndex(index)
                        const remainingMovies = movies.filter((mv, idx) => deleteIndex !== idx)
                        console.log(movies, remainingMovies)
                        setMovieList(remainingMovies);
                    }}>Delete</p>}
                    name={name}
                    poster={poster}
                    rating={rating}
                    summary={summary} />
            ))}


        </div >
    );
}
