import { useLoaderData, useNavigate } from "react-router-dom";

const PhotoDetail = () => {
    const photo = useLoaderData();
    const navigate = useNavigate();
    const {id, title, url} = photo;

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <h3>This is photo detail page</h3>
            <p>Photo id: {id}</p>
            <h5>Title: {title}</h5>
            <h6>Url: {url}</h6>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PhotoDetail;