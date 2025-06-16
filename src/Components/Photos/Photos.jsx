import { useLoaderData } from "react-router-dom";
import Photo from "../Photo/Photo";

const Photos = () => {
    const photos = useLoaderData();
    return (
        <div>
            <h3>Photos: {photos.length}</h3>
            <div className="grid">
                {
                    photos.map(photo => <Photo photo={photo}></Photo>)
                }
            </div>
        </div>
    );
};

export default Photos;