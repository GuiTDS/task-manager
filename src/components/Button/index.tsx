import { ReactElement } from 'react';
import style from './Button.module.scss';

interface ButtonProps {
    children: ReactElement | string
}
const Button = ( props: ButtonProps) => {
    return ( 
        <button className={style.botao}>
            {props.children}
        </button>
     );
}
 
export default Button;