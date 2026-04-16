import { AdicionalCatupiry } from "./AdicionalCatupiry";
import { AdicionalQueijo } from "./AdicionalQueijo";
import { Lanche } from "./Lanche";
import { Pastel } from "./Pastel";

let meuLanche: Lanche = new Pastel

console.log(`
==========================
--- MONTAGEM DO LANCHE ---
==========================
LANCHE BASICO -->
Descrição: ${meuLanche.getDescricao}
Preço: ${meuLanche.getPreco}
==========================
`)

meuLanche = new AdicionalQueijo(meuLanche)

console.log(`
==========================
LANCHE C/ QUEIJO -->
Descrição: ${meuLanche.getDescricao}
Preço: ${meuLanche.getPreco}
==========================
`)

meuLanche = new AdicionalCatupiry(meuLanche)

console.log(`
==========================
LANCHE C/ CATUPIRY -->
Descrição: ${meuLanche.getDescricao}
Preço: ${meuLanche.getPreco}
==========================
`)