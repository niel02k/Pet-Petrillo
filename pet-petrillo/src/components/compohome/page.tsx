import { Button } from "@/components/button/page";
import style from '@/components/compohome/homec.module.css'


export function Espaco() {
  
    return (
    < >
     <div className={style.fundo}>
      <div className={style.fundob}></div>
          <div className={style.text}>
            <h1>Cuidado completo para seu melhor amigo</h1>
            <p>
              Banho,tosa,veterinário e muito mais. Tudo que seu pet precisa em um só lugar, com profissionais especializados e muito amor.
            </p>
          <div className={style.buttonservices}>
            <Button  corFundo="#ffffff "
              corFundoHover=""
              corText="#2E8B57"
              texto="Agendar Serviço"
           
            />
           </div>
          </div>
      </div>
    </>
  );
}