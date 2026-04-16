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
    exibirServicos(): void {
        console.table(this.servicos)
    }
}
