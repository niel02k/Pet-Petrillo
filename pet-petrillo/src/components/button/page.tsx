import styles from '@/components/button/button.module.css';


export default function Button(){
    return(
        <>
        <div className={styles.fundobtn}>
        <button className={styles.button}>
        click aqui
        </button>
        </div>
        </>
    );
}