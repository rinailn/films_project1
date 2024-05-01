import { Movie } from './Movie';

function Movies(props){
    const { movies = [] } = props;

    return(
        <div className="movies">
            {movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
            ) : (
                <span>OOPS! WE COULDN'T FIND ANYTHING, TRY AGAIN!</span>
            )}
        </div>
    );
}

export { Movies };