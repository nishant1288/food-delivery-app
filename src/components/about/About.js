import UserClass from "../userclass/UserClass";
import User from "../users/User";

const About = () => {
    return (
        <>
            <h1>About</h1>
            <User name={'Nishant Krishna Ghadigaonkar'} about={'Rao Veer'} /><br></br>

            <UserClass name={'NishRao Krishna'} about={'NishRao'} />
        </>
    )
}

export default About;