import { Link } from "react-router-dom";

const Photo = ({photo}) => {
    const {url, thumbnailUrl, title, id} = photo;
    return (
        <div className="user">
            <p>id: {id}</p>
            <h4>title: {title}</h4>
            <h5>URL: {url}</h5>
            <p>Thumb: {thumbnailUrl}</p>
            <Link to={`/photo/${id}`}>
                <button>View details</button>
            </Link>
        </div>
    );
};

export default Photo;