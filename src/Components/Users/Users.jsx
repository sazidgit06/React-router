import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import "./Users.css"

const Users = () => {
    const users = useLoaderData();
    console.log(users)
    return (
        <div>
            <h4>Users: {users.length}</h4>
            <div className="grid">
                {
                    users.map(user=> <User user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;