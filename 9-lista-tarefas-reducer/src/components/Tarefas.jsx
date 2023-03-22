import { useContext } from 'react';
import { AppContext } from '../context';
import Tarefa from './Tarefa';
import '../styles/tarefas.css';

let Tarefas = () => {
    let { state } = useContext(AppContext);

    let renderizarTarefas = () => {
        return state.tarefas ? (
            state.tarefas.map((tarefa, index) => {
                return <Tarefa key={index} valor={tarefa} ind={index}></Tarefa>;
            })
        ) : (
            <></>
        );
    };

    return <ul className="list-container">{renderizarTarefas()}</ul>;
};

export default Tarefas;
