import { useContext } from 'react';
import { AppContext } from '../context';
import '../styles/form.css';

let Form = () => {
    let { state, handleSetValue, handleSetNovaTarefa, handleSetTarefaEditada } =
        useContext(AppContext);

    return (
        <form>
            <input
                className="input"
                type="text"
                value={state.value}
                onChange={handleSetValue}
                placeholder="Digite sua tarefa"
            />
            {!state.editar ? (
                <button
                    className="button button-form"
                    onClick={handleSetNovaTarefa}
                >
                    Nova
                </button>
            ) : (
                <button
                    className="button button-form"
                    onClick={handleSetTarefaEditada}
                >
                    Salvar
                </button>
            )}
        </form>
    );
};

export default Form;
