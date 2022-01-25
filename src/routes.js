import { useRoutes } from 'react-router-dom';

import { Home } from "./screens/Home";
import { Album } from "./screens/Album";
import { Photo } from "./screens/Photo"

export const MainRoutes = () => {
    return useRoutes([
        {path: '/', element: <Home /> },
        {path: '/album/:id', element: <Album />},
        {path: '/photo/:id', element: <Photo />}
    ]);
}