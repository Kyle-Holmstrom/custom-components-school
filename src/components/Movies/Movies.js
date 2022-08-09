import Home from '../Home/Home.js';
import './Movies.css';

const Movies = () => {
    return(
        <div className="movieContainer">
            <Home />
            <h1>Movies</h1>
            <h3>Top 3</h3>
            <ul className="movieList">
                <li>The Shawshank Redemption</li>
                <li>The Godfather</li>
                <li>The Godfather: Part II</li>
            </ul>
        </div>
    )
}

export default Movies;