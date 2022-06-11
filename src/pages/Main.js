import { Link } from 'react-router-dom';
import classes from './Main.module.css';

const Main = () => {
	return (
		<div className={classes.container}>
			<h2>Log in as</h2>
			<div>
				<Link to='/userone'>User 1</Link>
			</div>
			<div>
				<Link to='/usertwo'>User 2</Link>
			</div>
		</div>
	)
}

export default Main
