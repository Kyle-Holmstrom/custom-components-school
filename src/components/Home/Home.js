import { NavLink } from 'react-router-dom';

const Home = () => {
    return(
            <div>
                <ul className="homeList">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/comics">Comics</NavLink>
                    </li>
                    <li>
                        <NavLink to="/movies">Movies</NavLink>
                    </li>
                </ul>
            </div>
    )
}

export default Home;