// components/shared/CardServicos.tsx
import { LucideIcon } from 'lucide-react';
import { FaClock } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import style from '@/components/cardscoments/cardscoments.module.css'

// variaveis para receber na tela oq for necessario 
interface CardscomentsProps {
  nome: string;
  dono: string;
  fotoperfil: number;
  comentario: string;
  estrelas?: string; 

}

export function Cardscoments({
  nome,
  dono,
  fotoperfil,
  comentario,
  estrelas 
  
}: CardscomentsProps) 
{
  return (
    <div 
      className={style.cardscoments}
      style={{ } as React.CSSProperties}
    >
      {/* Ícone no topo */}
      
      <div  className={style.perfil}> {fotoperfil}</div>
      <h3 className={style.titNome}>{nome}</h3>
      <p className={style.subDono}>{dono}</p>

      <div className={style.containercentral}>
        <div></div>
      <div className={style.precoContainer}>
 
         <span className={style.precoValor}> {comentario}</span>
      </div>
     
      </div>
      
      <div className={style.cardDuracao}>
        <FaClock className={style.clock} ></FaClock>
      
        <span>{estrelas}</span>
      </div>
    </div>
  );
}