import Home from '../Home/Home.js';
import Girl from '../Girl/Girl.js'
import './Comics.css';

const Comics = () => {
    return(
        <>
        <Home />
        <div className="comicContent">
            <Girl />
                <h1>Comics</h1><br/>
                <h3>Top 3</h3><br/>
                <ul>
                    <li>
                        Micky Maus by Egmont Ehapa
                    </li><br/>
                    <li>
                        The Beano by DC Thomson
                    </li><br/>
                    <li>
                        The Amazing Spider-Man by Stan Lee
                    </li>
                </ul>
        </div>
        </>
    )
}

export default Comics;