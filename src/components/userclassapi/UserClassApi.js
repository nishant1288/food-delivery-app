import React from "react";

class UserClassApi extends React.Component
{
    constructor(props) {
        super(props);

        this.state = { // creating a state variable
            userInfo : {
                name : 'Dummy Name', //inital value dummy
                location : 'Dombivli',
                image: 'http/avatar/image'
            }
        }

        console.log('Constructor is called')
    }

   
    async componentDidMount()
    {
        console.log('component did mount is called')
        const data = await fetch('https://api.github.com/users/nishant1288');
        const json = await data.json();
        this.setState({
            userInfo : json // updating the state variable using set state
        })
        this.timer = setInterval(() => {
            console.log('Set interval after 2 seonds')
        }, 2000)
        console.log(json)
    }

     componentWillUnmount()
    {
        clearInterval(this.timer)
        console.log('Component will unmount is called')
    }

    componentDidUpdate()
    {
        console.log('component did update is called')
    }

    render()
    {
        console.log('render is called')
        return (
            <div>
                <h3>User Class Api</h3>
                <p>Name : {this.state.userInfo.name}</p>
                <p>Location : {this.state.userInfo.location}</p>
                <img src={this.state.userInfo.avatar_url} />
            </div>
        )
    }
}

export default UserClassApi