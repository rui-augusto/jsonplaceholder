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
            loadAlbum(idParams);
            loadPhotos(idParams);
            console.log(photos);
        }
    }, []);

    const loadAlbum = async () => {
        let json = await api.getAlbum(idParams);
        setAlbum(json);
    }

    const loadPhotos = async () => {
        let json = await api.getPhotos(idParams);
        setPhotos(json);
    }
    
    const handleBackButton = () => {
        navigate(-1);
    }

    // const handleClickButton = () => {
    //     loadPhotos();
    // }

    return (
        <div>
            <h2>{album.title}</h2>
            {/* aq */}
            {/* <button onClick = {handleClickButton}>Carregar</button>  */}
            {photos.map((item, index) => {
                    <div>
                        {item.title}
                        <img src = {item.url} alt = {item.title}/>
                    </div>
                })
            }
            <button onClick = {handleBackButton}>Voltar</button>
        </div>
    );
}