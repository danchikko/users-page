import { Link } from 'react-router-dom'

const Main = () => {
	return (
		<div>
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
