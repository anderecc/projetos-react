import Tarefa from './Tarefa';

export default function Tarefas(props) {
    return (
        <div className="tarefas">
            <ul>
                <Tarefa tarefa="terminar todo-app" />
                <Tarefa tarefa="terminar todo-app" />
                <Tarefa tarefa="terminar todo-app" />
                <Tarefa tarefa="terminar todo-app" />
            </ul>
            <div className="tarefas-func">
                <p>5 para completar</p>
                <button>Limpar completas</button>
            </div>
        </div>
    );
}
