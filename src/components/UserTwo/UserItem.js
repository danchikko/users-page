import classes from './UserItem.module.css'

const UserItem = (props) => {
	const deleteChangeHandler = (id) => {
		props.onDelete(id)
	}

	return (
		<ul className={classes.lists}>
			{props.state.map((el) => {
				return (
					<li className={classes.list} key={el.id}>
						<div className={classes.img}>
							<img src={el.img} alt='img' />
						</div>
						<p>
							{el.name} {el.lastName}
						</p>
						<button onClick={() => deleteChangeHandler(el.id)}>
							Delete
						</button>
					</li>
				)
			})}
		</ul>
	)
}

export default UserItem
