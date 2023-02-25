import BotaoTema from './BotaoTema';
import Filtros from './Filtros';
import NovaTarefa from './NovaTarefa';
import Tarefas from './Tarefas';

export default function TodoLight(props) {
    return (
        <div className="todoLight">
            <div className="todoHeader">
                <p className="logo">Todo</p>
                <BotaoTema />
            </div>
            <NovaTarefa />
            <Tarefas />
            <Filtros />
        </div>
    );
}
