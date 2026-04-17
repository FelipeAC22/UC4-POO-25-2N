import { Freelancer } from "../models/Freelancer";
import { Servico } from "../models/Servico";
import { DecoratorBonus } from "../decorators/DecoratorBonus";
import { DecoratorProridade } from "../decorators/DecoratorPrioridade";
import { DecoratorServico } from "../decorators/DecoratorServico";
import { DecoratorUrgencia } from "../decorators/DecoratorUrgencia";
import { ServicoConcreto } from "../models/ServicoConcreto";
import { Feedback } from "../models/Feedback";

const servicoBase = new ServicoConcreto("Criação de Logo", 200)

// Aplicando decorators 

const servicoComExtras = new DecoratorUrgencia(
    new DecoratorBonus(servicoBase)
)

const freelancer = new Freelancer("João")

// adicionando servico

freelancer.adicionarServico(servicoComExtras)

// adicionando feedbacks

freelancer.adicionarFeedback(new Feedback("Excelente trabalho!", 5))
freelancer.adicionarFeedback(new Feedback("Muito bom!", 4.5))

// exibe todos os dados
console.log("Serviços:")
freelancer.exibirServicos()

console.log("\nFeedbacks:")
freelancer.listarFeedbacks()