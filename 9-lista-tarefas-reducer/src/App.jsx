import { useEffect } from 'react';
import { useContext } from 'react';
import Form from './components/Form';
import Tarefas from './components/Tarefas';
import { AppContext } from './context';
import './styles/app.css';

function useTitle(title) {
    useEffect(() => {
        document.title = title;
    }, [title]);
}

function App() {
    useTitle('React Lista de Tarefas');
    let { state } = useContext(AppContext);

    return (
        <>
            <h1 className="title">
                Lista de Tarefas com React com os Hooks 'useContext, useReducer'
            </h1>
            <div className="app">
                <h3>Insira sua tarefa</h3>
                {state.mensagem === 'nova-tarefa' ? (
                    <p className="mensagem verde">Tarefa Adicionada</p>
                ) : state.mensagem === 'tarefa-editada' ? (
                    <p className="mensagem verde">Tarefa Editada</p>
                ) : state.mensagem === 'tarefa-excluida' ? (
                    <p className="mensagem vermelho">Tarefa Excluida</p>
                ) : (
                    <></>
                )}
                <Tarefas></Tarefas>
                <Form></Form>
            </div>
        </>
    );
}

export default App;
