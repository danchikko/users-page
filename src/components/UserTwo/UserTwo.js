import { useState } from "react";
import Navigation from "./Layout/Navigation";
import UserForm from "./UserForm";
import UserItem from "./UserItem";
import classes from './UserTwo.module.css'

const UserTwo = () => {
    const [state, setState] = useState([])
    console.log(state)
    const onAddData = (el) => {
        setState((prevState) => {
            return [el, ...prevState]
        })
    }

    const onDelete = (id) => {
        setState(state.filter((el) => el.id !== id))
        console.log(id)
    }

    return (
        <div className={classes.container}>
            <Navigation />
            <h2 className={classes.content}>Welcome !</h2>
            <UserForm onAddData={onAddData} />
            <UserItem state={state} onDelete={onDelete}/>
        </div>
    )
}

export default UserTwo;