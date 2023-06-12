import { useEffect, useState } from 'react';
import { tempoParaSegundos } from '../../common/utils/time';
import ITarefa from '../../types/ITarefa';
import Button from '../Button';
import Clock from './Clock';
import style from './Stopwatch.module.scss';

interface Props {
    selecionado: ITarefa | undefined
}

const Stopwatch = ({selecionado}: Props) => {
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if(selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado])
    return ( 
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            Tempo: {tempo}
            <div className={style.relogioWrapper}>
                <Clock />
            </div>
            <Button>
                Começar
            </Button>
        </div>
     );
}
 
export default Stopwatch;