import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();
    console.log(users)
    return (
        <div>
            <h4>Users: {users.length}</h4>
            <div className="">
                {
                    users.map(user=> <User user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;