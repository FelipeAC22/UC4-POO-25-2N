import { Freelancer } from "../models/Freelancer";
import { Servico } from "../models/Servico";
import { DecoratorBonus } from "../decorators/DecoratorBonus";
import { DecoratorProridade } from "../decorators/DecoratorPrioridade";
import { DecoratorServico } from "../decorators/DecoratorServico";
import { DecoratorUrgencia } from "../decorators/DecoratorUrgencia";
import { ServicoConcreto } from "../models/ServicoConcreto";
import { Feedback } from "../models/Feedback";

// criando servico de exemplo

const servicoBase = new ServicoConcreto("Criação de Logo", 200)

// Aplicando decorators 

const servicoComExtras = new DecoratorUrgencia(
    new DecoratorBonus(servicoBase)
)

const freelancer = new Freelancer("João")

// adicionando servico

freelancer.adicionarServico(servicoComExtras)

// adicionando feedbacks

freelancer.adicionarFeedback(new Feedback("Muito bom, comeram eu e minha esposa!", 5))
freelancer.adicionarFeedback(new Feedback("Exelente, venho usando diariamente desde que meu primo morreu!", 4.5))

// exibe todos os dados

freelancer.listarServicos()

console.log("\nFeedbacks:")
freelancer.listarFeedbacks()