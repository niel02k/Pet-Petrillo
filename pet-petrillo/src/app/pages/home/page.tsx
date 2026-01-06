import { Navbar } from "@/components/navbar/page";
import { CardPets } from "@/components/cardPets/page";
import { CardServicos } from "@/components/cardServicos/page";
import { Cardscoments } from "@/components/cardscoments/page";
import { Button } from "@/components/button/page";
import {
  FaShower,
  FaUserDoctor,
  FaStethoscope,
  FaScissors,
  FaArrowRight,
} from "react-icons/fa6";
import style from "./home.module.css";

export default function Home() {
  return (
    <div className={style.container}>
      <Navbar></Navbar>

      <div className={style.servicoscontainer}>

        <h2 className={style.servicostitulo}>Nossos Serviços</h2>   
        <div className={style.servicosCards}>
          <CardServicos
            titulo="Banho"
            descricao="Banho completo com produtos premium e secagem profissional."
            preco={45}
            duracao="45-60 minutos"
            corDestaque="#2E8B57"
            corFundo="#2e8b560e"
            Icone={FaShower}
          />

          <CardServicos
            titulo="Tosa"
            descricao="Tosa higiênica ou estética com profissionais experientes."
            preco={45}
            duracao="60-90 minutos"
            corDestaque="#FF6B8B "
            corFundo="#ff6b8b17 "
            Icone={FaScissors}
          />

          <CardServicos
            titulo="Veterinário"
            descricao="Consultas, vacinas e cuidados médicos completos para seu pet."
            preco={45}
            duracao="30-45 minutos"
            corDestaque="#A0522D"
            corFundo="#a0512d0a"
            Icone={FaStethoscope}
          />
        </div>

        <div className={style.buttonservices}>
          <Button
            corFundo="#212529 "
            corFundoHover="#2E8B57"
            corText="#ffffff"
            texto="Ver todos os serviços   "
            Icone={FaArrowRight}
          />
        </div>
      </div>
    </div>
  );
}
