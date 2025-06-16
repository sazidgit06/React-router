import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const navigate = useNavigate();
    const {id, name, website, email} = user;

    const handleBackBtn = () => {
        navigate(-1);
    }
    return (
        <div>
            <h3>This is user details page</h3>
            <p>UserId:        {id}  </p>
            <p>User Name:     {name}  </p>
            <p>User Website:  {website}  </p>
            <p>User Email:    {email}  </p>
            <button onClick={handleBackBtn}>Go back</button>
        </div>
    );
};

export default UserDetails;