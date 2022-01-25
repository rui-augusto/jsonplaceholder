import { api } from "../api";
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const Photo = () => {

    const idParams = useParams();
    const navigate = useNavigate();
    const [photo, setPhoto] = useState({});

    useEffect(() => {
        loadPhoto();
    }, []);

    const loadPhoto = async () => {
        const json = await api.getPhoto(idParams);
        setPhoto(json);
    }

    const handleBackButton = () => {
        navigate(-1);
    }
    
    return (
        <div>
            <p>{photo.title}</p>
            <img src = {photo.url} alt = {photo.title}/><br/>
            <button onClick = {handleBackButton}>Voltar</button>
        </div>
    );
}