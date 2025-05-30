import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="about">
            <h1>About</h1>
            <h2>This is simple React Application for food management plateform</h2>

            <User name={"Abhishek Dubey"} location={"Bangalore"} contact={"abhishek@gmail.com"}/>

            <UserClass name={"Abhishek Dubey Class"} location={"Bangalore"} contact={"abhishek@gmail.com"}/>
        </div>
    )
}

export default About;