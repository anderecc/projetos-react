export default function Tarefa(props) {
    return (
        <li>
            <input type="checkbox" name="tarefa" id="tarefa" />
            <p>{props.tarefa}</p> <button>X</button>
        </li>
    );
}
