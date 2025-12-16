// components/shared/CardServicos.tsx
import { LucideIcon } from 'lucide-react';
import { FaClock } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import style from '@/components/cardServicos/cardservicos.module.css'

// variaveis para receber na tela oq for necessario 
interface CardServicosProps {
  titulo: string;
  descricao: string;
  preco: number;
  duracao: string;
  corDestaque?: string; 
  Icone?: LucideIcon; 
  corFundo?: string;
}

export function CardServicos({
  titulo,
  descricao,
  preco,
  duracao,
  corDestaque = '#2d8f4b', 
  Icone,
  corFundo = '#2d8f4b'
}: CardServicosProps) 
{
  return (
    <div 
      className={style.cardServicos}
      style={{ '--cor-destaque': corDestaque ,'background-color': corFundo } as React.CSSProperties}
    >
      {/* Ícone no topo */}
      {Icone && (
        <div className={style.cardIconeContainer}>
          <Icone className={style.cardIcone} />
        </div>
      )}
      
      <h3 className={style.cardTitulo}>{titulo}</h3>
      <p className={style.cardDescricao}>{descricao}</p>

      <div className={style.contrainercentral}>
      <div className={style.precoContainer}>
        R$ <span className={style.precoValor}>{preco}</span>
      </div>
      <div className={style.containerarrow} style={{ 'background-color': corDestaque } as React.CSSProperties}>
         <FaArrowRight className={style.arrow} ></FaArrowRight>
         </div>
      </div>
      
      <div className={style.cardDuracao}>
        <FaClock className={style.clock} style={{ color: corDestaque  } as React.CSSProperties}></FaClock>
      
        <span>{duracao}</span>
      </div>
    </div>
  );
}