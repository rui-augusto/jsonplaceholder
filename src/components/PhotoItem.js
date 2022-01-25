import { Link } from 'react-router-dom';

export const PhotoItem = (props) => {
    return (
        <Link to = {`../../photo/${props.data.id}`}>
            <img 
                src = {props.data.url} 
                alt = {props.data.title} 
                width = "150px"
            />
        </Link>
    );
}