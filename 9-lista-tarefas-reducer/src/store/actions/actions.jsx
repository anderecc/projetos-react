export let setValueInput = (e) => {
    return { type: 'SET-VALUE-INPUT', payload: e.target.value };
};

export let novaTarefa = (e) => {
    e.preventDefault();
    return { type: 'SET-NOVA-TAREFA' };
};

export let editarTarefa = (index) => {
    return { type: 'EDITAR-TAREFA', payload: index };
};

export let setTarefaEditada = (e) => {
    e.preventDefault();
    return { type: 'SET-TAREFA-EDITADA' };
};

export let setExcluirTarefa = (index) => {
    return { type: 'EXCLUIR-TAREFA', payload: index };
};

export let getTarefas = () => {
    return { type: 'GET-TAREFAS' };
};

export let removeMensagem = () => {
    return { type: 'REMOVE-MENSAGEM' };
};
