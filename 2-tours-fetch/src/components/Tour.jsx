import { useState } from 'react';
import '../styles/tour.css';

export default function Tour(props) {
    let [reticences, setReticences] = useState(true);
    function infoReticences() {
        let info = [...props.info];
        info = info.slice(0, 200);
        return info;
    }

    return (
        <li className={`${props.index} li-container`}>
            <img
                src={props.image}
                alt={props.name + 'image'}
                className="image"
            />
            <div className="infos-container">
                <div className="name-price">
                    <h3 className="name">{props.name}</h3>
                    <p className="price">$ {props.price}</p>
                </div>
                {reticences ? (
                    <p className="info">
                        {infoReticences()}...{' '}
                        <button onClick={() => setReticences(false)}>
                            Load more
                        </button>
                    </p>
                ) : (
                    <p className="info">{props.info}</p>
                )}
                <button
                    className="button"
                    onClick={(e) => props.func(props.id)}
                >
                    Not interested
                </button>
            </div>
        </li>
    );
}
