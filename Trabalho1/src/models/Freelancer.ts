import { Feedback } from "./Feedback";
import { Servico } from "./Servico";

export class Freelancer {
    private servicos: Servico[] = []
    private feedbacks: Feedback[] = []
    constructor(public nome: string) { }

    adicionarServico(servico: Servico): void {
        this.servicos.push(servico)
    }

    adicionarFeedback(feedback: Feedback): void {
        this.feedbacks.push(feedback)
    }

    calcularMedia(): number {
        if (this.feedbacks.length === 0) return 0
        let soma: number = 0
        for (let i = 0; i < this.feedbacks.length; i++) {
            soma += this.feedbacks[i].nota
        }

        return soma / this.feedbacks.length
    }
    
    listarServicos(): void {
        console.log(`Servicos de ${this.nome}:`)
        this.servicos.forEach((servico, i) => {
            console.log(
                `${i + 1}. ${servico.getNome()} - R$ ${servico.getValor()}`)
        })
    }

    listarFeedbacks(): void {
        this.feedbacks.forEach((feedback, i) => {
            console.log(`${i + 1}.  ${feedback.nota} - ${feedback.texto}`)
        })
    }
}
