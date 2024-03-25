import "./user.css"
import { useState } from "react"

const User = (props) => {
    const {name, about} = props
    console.log(props)
    const [count, setCount] = useState(0);
    const [countTwo] = useState(1)
    return (
        <div className="user">
            <h2>Functional Component</h2>
            <h3>Count is {count}</h3>
            <button onClick={() => {setCount(count+1)}} >Increase</button>
            <button onClick={() => {setCount(count-1)}} >Decrease</button>
            <h3>Count Two is {countTwo}</h3>
            <p>Name : {name}</p>
            <p>About : {props.about}</p>
        </div>
    )
}

export default User;