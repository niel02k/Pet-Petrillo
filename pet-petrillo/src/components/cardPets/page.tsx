import style from '@/components/cardPets/cardPets.module.css'

interface CardPetsProps {
  photoPet?: string; 
  namePet: string;  
  racePet: string;  
} 

export function CardPets({
  photoPet,
  namePet,
  racePet,
}:CardPetsProps) {
    return ( 
      <div className={style.cardpets}> 
           <div className={style.fotopet}>
            <img src={photoPet} alt="" />
           </div> 
            <div className={style.infopet}>
              <h3 className={style.nomepet}>{namePet}</h3>
              <p className ={style.racepet}>{racePet}</p>
            </div>
       </div>
              
            
            
            
            
            
            
  );} 