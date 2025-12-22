
import style from '@/components/cardscoments/cardscoments.module.css'
import Image from 'next/image';

// Interface corrigida para receber os dados do comentário
interface CardscomentsProps {
  nome: string;
  dono: string;
  fotoperfil?: string; // Alterado para string para receber inicial ou URL
  comentario: string;
  estrelas?: number; // Alterado para number para receber quantidade de estrelas
}

export function Cardscoments({
  nome,
  dono,
  fotoperfil,
  comentario,
  estrelas = 5 // Valor padrão de 5 estrelas
  
}: CardscomentsProps) 
{
  // Função para renderizar estrelas
  const renderEstrelas = () => {
    const estrelasArray = [];
    for (let i = 0; i < 5; i++) {
      estrelasArray.push(
        <span key={i} className={style.estrela}>
          {i < (estrelas || 0) ? <img src="https://i.ibb.co/QjfGSwLm/favicon.png" alt="Estrela de avaliação"/> : '' }
        </span>
      );
    }
    return <div className={style.estrelasContainer}>{estrelasArray}</div>;
  };

 const donoAnimal = `Dono do(a) ${dono}`;
      // Obter inicial do nome para foto de perfil
    return (
    <div className={style.cardscoments}>
      {/* Foto de perfil com inicial */}
      <div className={style.cardsperfil}>
      <div className={style.perfil}>
        <img src={fotoperfil} alt="" />
        
      </div>
      
      {/* Informações do autor */}
      <div className={style.infoContainer}>
        <h3 className={style.titNome}>{nome}</h3>
        <p className={style.subDono}>{donoAnimal}</p>
      </div>
      </div>

      {/* Estrelas */}
      <div className={style.estrelasWrapper}>
        {renderEstrelas()}
      </div>

      {/* Comentário */}
      <div className={style.comentarioContainer}>
        <p className={style.comentarioTexto}>"{comentario}"</p>
      </div>
    </div>
  );
}