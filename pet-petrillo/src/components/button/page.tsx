import styles from '@/components/button/button.module.css';



interface ButtonProp {
 texto:string;
Icone?:  React.ComponentType;
 corFundo?: string;
 corFundoHover?:string
 corText?:string;

}

export function Button({
 texto,
 Icone,
 corFundo ='rgb(11, 255, 88)',
 corFundoHover= '#1A5D34',
 corText

}: ButtonProp){



    return(
        <>
      
            <button className={styles.button} style={{'--corFundo':corFundo, '--corFundoHover':corFundoHover, 'color':corText} as React.CSSProperties}>
             {texto} {Icone && <Icone />}
         
            </button>
     
        </>
    );
}