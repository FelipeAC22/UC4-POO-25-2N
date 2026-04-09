**Diferença entre sobrescrita e sobrecarga:**
Sobrescrita (override) ocorre quando uma classe filha redefine um método herdado da classe pai, mantendo a mesma assinatura, alterando apenas o comportamento e já a sobrecarga (overload) acontece quando existem várias assinaturas para um mesmo método, variando quantidade ou tipo de parâmetros

**TypeScript suporta sobrecarga como Java? Justifique:**
Não exatamente. O TypeScript permite declarar múltiplas assinaturas para uma função, mas possui apenas uma implementação real, diferente do Java, onde existem vários métodos distintos, no TypeScript a sobrecarga é apenas uma verificação em tempo de compilação e não existe de fato em tempo de execução
