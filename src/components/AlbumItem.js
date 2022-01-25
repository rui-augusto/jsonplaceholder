import { Link } from 'react-router-dom';

export const AlbumItem = (props) => {
    return (
        <div className = "titleContainer">
            <Link to = {`album/${props.id}`}>
                {props.title}
            </Link>
        </div>
    );
}