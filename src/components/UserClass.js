import React from "react";
import UserContext from "../utils/UserContext";


class UserClass extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { name, location, contact } = this.props;
        return (
            <div className="user-card">
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: {contact}</h4>
            <UserContext.Consumer>
                {(data) => console.log(data) }
            </UserContext.Consumer>
        </div>
        )
    }
}

export default UserClass;