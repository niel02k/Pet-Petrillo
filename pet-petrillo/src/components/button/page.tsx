import styles from '@/components/button/button.module.css';
import { LucideIcon } from 'lucide-react';


interface ButtonProp {
 texto:string;
 icon?:LucideIcon;
 corFundo?: string;
 corFundoHover?:string
 corText?:string;

}

export function Button({
 texto,
 icon:Icon,
 corFundo ='#rgb(11, 255, 88)',
 corFundoHover,
 corText

}: ButtonProp){


    return(
        <>
      
            <button className={styles.button} style={{'background-color':corFundo, 'background-color-hover':corFundoHover, 'color':corText} as React.CSSProperties}>
             {texto}
            </button>
     
        </>
    );
}