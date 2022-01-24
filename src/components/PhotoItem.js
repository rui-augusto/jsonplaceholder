import { Link } from 'react-router-dom';

export const PhotoItem = (props) => {
    return (
        <div>
            <img src = {props.data.thumbnailUrl} alt = {props.data.title}/>
        </div>
    );
}