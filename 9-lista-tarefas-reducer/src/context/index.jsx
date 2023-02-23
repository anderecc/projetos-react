import { createContext, useEffect, useReducer } from 'react';
import {
    novaTarefa,
    setValueInput,
    editarTarefa,
    setTarefaEditada,
    setExcluirTarefa,
    getTarefas,
    removeMensagem,
} from '../store/actions/actions';
import reducer, { initialState } from '../store/reducers/reducer';
export let AppContext = createContext();

let AppProvider = ({ children }) => {
    let [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        dispatch(getTarefas());
        if (state.mensagem) {
            setTimeout(() => {
                dispatch(removeMensagem());
            }, 2000);
        }
    }, [state.mensagem]);

    let handleSetValue = (e) => {
        return dispatch(setValueInput(e));
    };

    let handleSetNovaTarefa = (e) => {
        return dispatch(novaTarefa(e));
    };

    let handleEditarTarefa = (ind) => {
        return dispatch(editarTarefa(ind));
    };

    let handleSetTarefaEditada = (e) => {
        return dispatch(setTarefaEditada(e));
    };

    let handleExcluirTarefa = (ind) => {
        return dispatch(setExcluirTarefa(ind));
    };

    return (
        <AppContext.Provider
            value={{
                state,
                handleSetValue,
                handleSetNovaTarefa,
                handleEditarTarefa,
                handleSetTarefaEditada,
                handleExcluirTarefa,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
