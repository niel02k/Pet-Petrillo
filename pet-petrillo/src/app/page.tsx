import Image from "next/image";
import { Navbar } from "@/components/navbar/page";
import { CardServicos } from "@/components/cardServicos/page";
import { Droplet } from "lucide-react";

export default function Home() {
  return (
  
   <CardServicos
        titulo="Banho"
        descricao="Banho completo com produtos premium e secagem profissional"
        preco={45}
        duracao="45-60 minutos"
        corDestaque="#4a9eff"
        Icone={Droplet}
        corFundo = "#bad3f0ff"
      />
  );
}
