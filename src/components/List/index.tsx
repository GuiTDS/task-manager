import ITarefa from '../../types/ITarefa';
import Item from './Item';
import style from './List.module.scss';

const List = ({tarefas}: {tarefas: ITarefa[]}) => {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    );
}

export default List;