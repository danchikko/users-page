import {Link} from 'react-router-dom';
import classes from './Navigation.module.css'

const Navigation = () => {
    return (
        <header className={classes.header}>
            <Link to="/"><div className={classes.login}>Login</div></Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/all">All</Link>
                    </li>
                    <li>
                        <Link to="/user2">User 2</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;