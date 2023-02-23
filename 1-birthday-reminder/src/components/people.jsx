import '../styles/people.css';

function People({ name, age, image, id }) {
    return (
        <li className="people" key={id}>
            <img src={image} alt={`${name}-pic`} className="image" />
            <div className="container-name">
                <p>
                    Name: <strong>{name}</strong>
                </p>
                <p>Age: {age}</p>
            </div>
        </li>
    );
}

export default People;
