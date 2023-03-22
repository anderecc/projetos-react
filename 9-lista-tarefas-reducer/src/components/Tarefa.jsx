import { useContext } from 'react';
import { AppContext } from '../context';
import '../styles/tarefa.css';

let Tarefa = ({ valor, ind }) => {
    let { handleEditarTarefa, handleExcluirTarefa } = useContext(AppContext);
    return (
        <li key={ind} className="tarefa-container">
            <p className="tarefa">{valor}</p>
            <div>
                <button
                    className="button button-editar"
                    onClick={() => handleEditarTarefa(ind)}
                >
                    Editar
                </button>
                <button
                    className="button button-excluir"
                    onClick={() => handleExcluirTarefa(ind)}
                >
                    Excluir
                </button>
            </div>
        </li>
    );
};

export default Tarefa;
