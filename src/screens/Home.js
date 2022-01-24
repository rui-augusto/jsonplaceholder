import { useState, useEffect, Fragment } from 'react';
import { api } from "../api";
import { AboutItem } from "../components/AboutItem";
import { Link } from 'react-router-dom';

export const Home = () => {
    const [albums, setAlbums] = useState([]);
    
    useEffect(() => {
        loadAlbum();
    }, []);

    const loadAlbum = async () => {
        let json = await api.getAlbums();
        setAlbums(json);
    }
    
    return (
        <Fragment>
            {/* <button onClick = {loadAlbum}>Carregar</button> */}
            {albums.map((item, index) => (
                <AboutItem 
                    id = {item.id} 
                    title = {item.title} 
                    key = {index}
                />
            ))}
        </Fragment>
    );
}