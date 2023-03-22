import '../styles/item.css';

let Item = ({ props }) => {
    let { id, img, title, desc, price } = props;

    return (
        <li className="item-container">
            <div className="image-container">
                <img className="image" src={img} alt={`${title} ${id}`} />
            </div>
            <div className="infos-container">
                <p className="item-title">
                    {title} <span className="item-price">$ {price}</span>
                </p>
                <hr />
                <p className="item-description">{desc}</p>
            </div>
        </li>
    );
};

export default Item;
