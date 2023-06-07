import { ReactElement } from 'react';
import style from './Button.module.scss';

interface ButtonProps {
    children: ReactElement | string
    type?: "button" | "submit" | "reset" | undefined
}
const Button = ( {children, type}: ButtonProps) => {
    return ( 
        <button className={style.botao} type={type}>
            {children}
        </button>
     );
}
 
export default Button;