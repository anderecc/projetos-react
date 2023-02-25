export default function Button(props) {
    return (
        <button
            className={`keypad-button ${props.classes ?? ''}`}
            onClick={() => props.func(props.label)}
        >
            {props.label}
        </button>
    );
}
