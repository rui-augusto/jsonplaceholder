import { useRoutes } from 'react-router-dom';

import { Home } from "./screens/Home";
import { Album } from "./screens/Album";
export const MainRoutes = () => {
    return useRoutes([
        {path: '/', element: <Home /> },
        {path: '/album/:id', element: <Album/ >}
    ]);
}