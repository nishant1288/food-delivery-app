import React from "react";
import UserClassChild from "./UserClassChild";
class UserClass extends React.Component {
    constructor( props ) {
        super( props )

        this.state = {
            count : 0,
            countTwo : 1
        }

        console.log(this.props.name+' contructor')
    }

    componentDidMount() {
        console.log(this.props.name+' component did mount')
    }

    render() {
        console.log(this.props.name+' render')
        const {count, countTwo} = this.state
        return (
            <div className="user">
                <h2>Class Component</h2>
                <h3>Count is {this.state.count}</h3>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                        countTwo: this.state.countTwo + 1
                    })
                }} >Increase</button>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count - 1,
                        countTwo: this.state.count - 1
                    })
                }} >Decrease</button>
                <h3>Count Two is {countTwo}</h3>
                <p>Name : {this.props.name}</p>
                <p>About : {this.props.about}</p>
                <UserClassChild name = {'user class child'} />
            </div>
        )
    }
}

export default UserClass;