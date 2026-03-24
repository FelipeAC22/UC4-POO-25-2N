**pesquisa**

1. Se todos os atributos de uma classe forem public, qualquer parte do sistema pode acessar e modificar esses dados, isso ai pode causar problemas como alterações indevidas, dados inconsistentes e maior dificuldade de manutenção, já que outras partes do sistema passam a depender diretamente da estrutura da classe

2. No TypeScript, private significa que o atributo ou método só pode ser acessado dentro da própria classe, já protected permite o acesso dentro da classe e também em classes que herdam dela, mas continua bloqueado para acessos fora dela

3. O encapsulamento é importante em situações como em sistemas bancários (onde o saldo não deve ser alterado diretamente), sistemas de usuários (pra proteger senhas) e no controle de carros (onde o funcionamento interno deve ser controlado por métodos específicos), ele ajuda a proteger os dados e garantir que o sistema funcione corretamente
