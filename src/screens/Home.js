import { useState, useEffect, Fragment } from 'react';
import { api } from "../api";
import { AlbumItem } from "../components/AlbumItem";

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
            {albums.map((item, index) => (
                <AlbumItem 
                    id = {item.id} 
                    title = {item.title} 
                    key = {index}
                />
            ))}
        </Fragment>
    );
}