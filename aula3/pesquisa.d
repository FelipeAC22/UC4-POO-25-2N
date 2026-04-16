1) Dois exemplos da vida real que podem ser representados como classes em POO

1. Conta Bancária

Uma ContaBancaria pode ser representada como classe porque possui estado (dados) e comportamento (ações).

Atributos:

- número da conta
- titular
- saldo
- tipo de conta

Métodos:

- depositar()
- sacar()
- transferir()
- consultarSaldo()

Cada cliente teria um objeto diferente dessa classe, com seus próprios valores de saldo, número de conta etc.

2. Carro

Uma classe Carro também é um bom exemplo de modelagem do mundo real.

Atributos:

- marca
- modelo
- cor
- velocidadeAtual
- ligado (true/false)

Métodos:

- ligar()
- desligar()
- acelerar()
- frear()

Cada carro específico, como por exemplo “Carro do João”, seria um objeto criado a partir da classe Carro.

2) Comparação: POO vs Programação Funcional

Programação Orientada a Objetos (POO):

- Baseada em objetos e classes
- Dados e comportamentos ficam juntos
- Utiliza encapsulamento, herança e polimorfismo
- Permite alteração de estado
- Modela entidades do mundo real

Programação Funcional (PF):

- Baseada em funções puras
- Dados e funções geralmente são separados
- Prioriza imutabilidade
- Evita efeitos colaterais
- Foco em transformação de dados

Diferença principal:

Na POO, o comportamento pertence ao objeto
Na Programação Funcional, funções recebem dados e retornam novos dados sem modificar os originais


3) Linguagens que usam fortemente POO

- Java
- C++
- C#
- Python
- Ruby

Embora muitas dessas linguagens também suportem programação funcional, elas foram projetadas com forte suporte ao paradigma orientado a objetos
