import "./user.css";
import { Link, useNavigate } from "react-router-dom";

const User = ({user}) => {
    const {name, id, email, website} = user;
    const navigate = useNavigate();

    const handleViewBtn = () => {
        navigate(`/user/${id}`)
    }

    return (
        <div className="user">
            <h4>Id: {id}</h4>
            <h3>Name: {name}</h3>
            <h3>Email: {email}</h3>
            <p>Website: {website}</p>
            <Link to={`/user/${id}`}>
                <button className="mb" >Show details</button>
            </Link>
            <button onClick={handleViewBtn}>View details</button>
        </div>
    );
};

export default User;