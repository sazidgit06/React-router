import "./user.css"

const User = ({user}) => {
    const {name, id, email, website} = user;
    return (
        <div className="user">
            <h4>Id: {id}</h4>
            <h3>Name: {name}</h3>
            <h3>Email: {email}</h3>
            <p>Website: {website}</p>
        </div>
    );
};

export default User;