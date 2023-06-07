import { useState } from "react";
import Button from "../Button";
import style from './Form.module.scss';
import ITarefa from "../../types/ITarefa";

interface FormProps {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

const Form = ({setTarefas}: FormProps) => {
    const[novaTarefa, setNovaTarefa] = useState('');
    const[tempo, setTempo] = useState('00:00:00');

    function adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setTarefas(tarefasAntigas => [...tarefasAntigas, {tarefa: novaTarefa, tempo: tempo}]);
    }
    return (
        <form className={style.novaTarefa} onSubmit={event => adicionarTarefa(event)}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    value={novaTarefa}
                    onChange={event => setNovaTarefa(event.target.value)}
                    placeholder="O que você quer estudar?"
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                    <input
                        type="time"
                        name="tempo"
                        id="tempo"
                        value={tempo}
                        onChange={event => setTempo(event.target.value)}
                        step="1"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
            </div>
            <Button type='submit'>
                Adicionar
            </Button>
        </form>
    );
}

export default Form;