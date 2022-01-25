import { useState, useEffect } from 'react';
import { api } from "../api";
import { useParams, useNavigate } from 'react-router-dom';
import { PhotoItem } from "../components/PhotoItem";

export const Album = () => {
    const idParams = useParams();
    const navigate = useNavigate();
    const [album, setAlbum] = useState([]);
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        if (idParams){
            loadAlbum();
            loadPhotos();
        }
    }, []);

    const loadAlbum = async () => {
        const json = await api.getAlbum(idParams);
        setAlbum(json);
    }

    const loadPhotos = async () => {
        const json = await api.getPhotos(idParams);
        setPhotos(json);
    }
    
    const handleBackButton = () => {
        navigate(-1);
    }

    return (
        <div>
            <h2>{album.title}</h2>
            {photos.map((item, index) => (
                <PhotoItem 
                    data = {item}
                    key = {index}
                />
            ))}
            <button onClick = {handleBackButton}>Voltar</button>
        </div>
    );
}
