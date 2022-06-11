import { useState } from 'react';
import classes from './UserForm.module.css';

const UserForm = (props) => {
	const [name, setName] = useState('')
	const [lastName, setLastName] = useState('')
    const [img, setImg] = useState()

    const imageChange = (e) => {
        const [file] = e.target.files;
        setImg(URL.createObjectURL(file))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            id: Math.random(),
            name,
            lastName,
            img,
        }
        props.onAddData(data)
        setName('')
        setLastName('')
    }

	return (
		<form onSubmit={handleSubmit}>
			<div className={classes.control}>
				<label>Your name</label>
				<input
					type='text'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div className={classes.control}>
				<label>Last name</label>
				<input
					type='text'
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
				/>
			</div>
            <div className={classes.controller}>
                <label>Add photo</label>
                <input type="file" onChange={imageChange} />
            </div>
            <button className={classes.button} type='submit'>Add</button>
		</form>
	)
}

export default UserForm;
