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
      
      
      <h3 className={style.cardTitulo}>{nome}</h3>
      <p className={style.cardDescricao}>{dono}</p>

      <div className={style.contrainercentral}>
      <div className={style.precoContainer}>
        R$ <span className={style.precoValor}>{fotoperfil} {comentario}</span>
      </div>
      <div className={style.containerarrow} >
         <FaArrowRight className={style.arrow} ></FaArrowRight>
         </div>
      </div>
      
      <div className={style.cardDuracao}>
        <FaClock className={style.clock} ></FaClock>
      
        <span>{estrelas}</span>
      </div>
    </div>
  );
}