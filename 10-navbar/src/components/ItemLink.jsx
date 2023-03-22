import { Link } from 'react-router-dom';

let ItemLink = ({ url, text, classNa, targ }) => {
    return (
        <li>
            <Link className={classNa} to={url} target={targ ? '_blank' : ''}>
                {text}
            </Link>
        </li>
    );
};

export default ItemLink;
