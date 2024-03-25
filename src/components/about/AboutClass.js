import React from "react"
// or
import { Component } from "react"

import UserClass from "../userclass/UserClass"

class AboutClassOtherWay extends Component { }
// or 
class AboutClass extends React.Component {
    constructor(props) {
        super(props)
        console.log('Parent Constructor')
    }

    componentDidMount() {
        console.log('Parent Component did mount')
    }

    render() {
        console.log("Parent Render")
        return (
            <>
                <h1>About</h1>
                <UserClass name={'First Child Component'} about={'NishRao'} />
                <UserClass name={'Second Child Component'} about={'NishRao'} />
            </>
        )
    }
}

export default AboutClass