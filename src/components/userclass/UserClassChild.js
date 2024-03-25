import React from "react";

class UserClassChild extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.props.name+'constructor called')
    }

    componentDidMount()
    {
        console.log(this.props.name+'component did mount called')
    }

    render() {
        console.log(this.props.name+'render called')
        return (
            <div>
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}

export default UserClassChild