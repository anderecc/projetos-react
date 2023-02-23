export let initialState = {
    tarefas: [],
    editar: false,
    value: '',
    index: '',
    mensagem: '',
};

let reducer = (state: initialState, action) => {
    switch (action.type) {
        case 'GET-TAREFAS':
            let getTarefas = JSON.parse(localStorage.getItem('tarefas'));
            return getTarefas
                ? {
                      ...state,
                      tarefas: JSON.parse(localStorage.getItem('tarefas')),
                  }
                : { ...state };
        case 'SET-VALUE-INPUT':
            return { ...state, value: action.payload };

        case 'SET-NOVA-TAREFA':
            if (state.value.length !== 0 && state.value.trim()) {
                localStorage.setItem(
                    'tarefas',
                    JSON.stringify([...state.tarefas, state.value])
                );
                return {
                    ...state,
                    tarefas: JSON.parse(localStorage.getItem('tarefas')),
                    value: '',
                    mensagem: 'nova-tarefa',
                };
            } else {
                return { ...state };
            }

        case 'EDITAR-TAREFA':
            return {
                ...state,
                value: state.tarefas[action.payload],
                editar: true,
                index: action.payload,
            };

        case 'SET-TAREFA-EDITADA':
            if (state.value.length !== 0 && state.value.trim()) {
                state.tarefas[state.index] = state.value;
                let novasTarefas = [...state.tarefas];
                localStorage.setItem(
                    'tarefas',
                    JSON.stringify([...novasTarefas])
                );

                return {
                    ...state,
                    tarefas: JSON.parse(localStorage.getItem('tarefas')),
                    editar: false,
                    value: '',
                    mensagem: 'tarefa-editada',
                };
            } else {
                let novasTarefas = state.tarefas.filter(
                    (tarefa, index) => index !== state.index
                );
                localStorage.setItem(
                    'tarefas',
                    JSON.stringify([...novasTarefas])
                );

                return {
                    ...state,
                    tarefas: JSON.parse(localStorage.getItem('tarefas')),
                    editar: false,
                    value: '',
                    mensagem: 'tarefa-excluida',
                };
            }

        case 'EXCLUIR-TAREFA':
            let novasTarefas = state.tarefas.filter(
                (tarefa, index) => index !== action.payload
            );
            localStorage.setItem('tarefas', JSON.stringify([...novasTarefas]));
            return {
                ...state,
                tarefas: JSON.parse(localStorage.getItem('tarefas')),
                mensagem: 'tarefa-excluida',
            };

        case 'REMOVE-MENSAGEM':
            return { ...state, mensagem: '' };

        default:
            return { ...state };
    }
};

export default reducer;
