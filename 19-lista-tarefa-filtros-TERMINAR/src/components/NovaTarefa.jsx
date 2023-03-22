import { useState } from 'react';

export default function NovaTarefa(props) {
    const [tarefa, setTarefa] = useState({});

    return (
        <div className="novaTarefa">
            <input type="text" placeholder="Criar uma nova tarefa" />
            <button>Criar</button>
        </div>
    );
}
