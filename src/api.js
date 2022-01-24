import { axios } from 'axios';

const BASE = 'https://jsonplaceholder.typicode.com';
// const http = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com/'
// });

export const api = {
    /* pegando resposta dos albums*/
    getAlbums: async () => {
        let response = await fetch(`${BASE}/albums`);
        return response.json();
    },
    getAlbum: async (props) => {
        let response = await fetch(`${BASE}/albums/${props.id}`);
        return response.json();
    },
    getPhotos: async (props) => {
        let response = await fetch(`${BASE}/albums/${props.id}/photos`);
        return response.jsonn();
    },
    getPhoto: async (props) => {
        let response = await fetch(`${BASE}/photos/${props.id}`);
        return response.json();
    }
}