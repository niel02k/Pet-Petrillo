import Image from "next/image";
import { Navbar } from "@/components/navbar/page";
import { CardServicos } from "@/components/cardServicos/page";
import { Cardscoments } from "@/components/cardscoments/page";  
import { CardPets } from "@/components/cardPets/page";

import Button from "@/components/button/page";


export default function () {
  return (

  
 <CardPets 
  namePet="Luna"  
  racePet="vira-lata  " 
  photoPet="https://png.pngtree.com/png-vector/20250111/ourmid/pngtree-golden-retriever-dog-pictures-png-image_15147078.png"  
   />



  );
}
