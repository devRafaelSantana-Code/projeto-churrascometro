# 🍖 Churrascómetro — Calculadora de Insumos para Eventos

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</p>

## 📌 Sobre o Projeto

O **Churrascómetro** é uma aplicação web desenvolvida com HTML5, CSS3 e JavaScript que automatiza o cálculo das quantidades estimadas de alimentos e bebidas necessárias para a organização de um churrasco. Inspirado nos desafios práticos da plataforma _ProgramadorBR_, o projeto considera o número de adultos, crianças e a duração prevista do evento para calcular as quantidades de carne, cerveja e bebidas não alcoólicas.

O projeto consolida conhecimentos de desenvolvimento web nativo, com destaque para a manipulação do DOM, o tratamento de dados introduzidos em formulários, a aplicação de regras de negócio através de funções e a organização visual da interface com propriedades personalizadas de CSS.

---

## 📐 Regras de Negócio e Lógica Matemática

A aplicação utiliza parâmetros de consumo por pessoa que variam consoante a duração do evento, distinguindo entre eventos com menos de 6 horas e eventos com duração igual ou superior a 6 horas.

Para o cálculo de carne e bebidas não alcoólicas, cada criança representa 50% do consumo estimado para um adulto. A cerveja é calculada exclusivamente com base no número de adultos.

### Matriz de Consumo por Pessoa (PP)

| Insumo                     | Menos de 6 horas    | 6 horas ou mais     | Público-alvo             |
| :------------------------- | :------------------ | :------------------ | :----------------------- |
| **Carne**                  | 400 g por adulto    | 650 g por adulto    | Adultos e crianças (50%) |
| **Cerveja**                | 1.200 ml por adulto | 2.000 ml por adulto | Apenas adultos           |
| **Bebidas não alcoólicas** | 1.000 ml por adulto | 1.500 ml por adulto | Adultos e crianças (50%) |

Os valores apresentados correspondem aos parâmetros de consumo definidos para os cálculos da aplicação.

---

## 🛠️ Detalhes Técnicos e Engenharia de Código

- **Estrutura Semântica e Acessibilidade:** Utilização de elementos HTML e de rótulos associados aos campos de formulário através do atributo `for`, facilitando a identificação dos campos e a interação com tecnologias de apoio.
- **Seleção e Manipulação do DOM:** Utilização de `querySelector()` para selecionar elementos da interface, permitindo ler os valores introduzidos pelo utilizador e apresentar os resultados dos cálculos.
- **Arquitetura de Estilos com CSS Custom Properties:** Centralização de valores visuais através de variáveis CSS, como `--var`, facilitando a manutenção e a consistência da identidade visual. A interface utiliza uma paleta de cores de inspiração tropical, com tons de verde e ciano.
- **Controlo da Seleção de Texto:** Aplicação de `user-select: none` aos elementos definidos para impedir a seleção acidental de texto estático, preservando a possibilidade de selecionar e copiar conteúdos nos campos de entrada e na área de resultados através de `user-select: text`.
- **Abstração Funcional e Separação de Responsabilidades:** Organização dos cálculos através da função principal `calcular` e das funções auxiliares `carnePP`, `cervejaPP` e `bebidaPP`, que concentram as regras de consumo de cada categoria de insumo.
- **Conversão de Unidades e Arredondamento:** Utilização de `Math.ceil()` para arredondar quantidades para o inteiro seguinte, permitindo estimar o número de embalagens necessárias quando os cálculos consideram latas de 355 ml e garrafas de 2 litros.
- **Validação de Entradas:** Utilização de uma _Guard Clause_ com `return` para interromper o processamento quando os dados obrigatórios estão ausentes, evitando a execução dos cálculos sem os valores necessários.
- **Interatividade com JavaScript Nativo:** Integração entre HTML, CSS e JavaScript para processar os dados do formulário e atualizar a apresentação dos resultados sem recorrer a frameworks externos.

---

## 💻 Como Executar o Projeto Localmente

Por ser uma aplicação front-end estática, o projeto pode ser executado localmente sem instalação de dependências ou configuração de um servidor backend.

1. **Clona o repositório:**

   ```bash
   git clone https://github.com/TEU_UTILIZADOR/projeto-churrascometro.git
   ```

2. **Acede à pasta do projeto:**

   ```bash
   cd projeto-churrascometro
   ```

3. **Executa a aplicação:**

   Abre o ficheiro `index.html` num navegador moderno ou utiliza a extensão **Live Server** no Visual Studio Code para iniciar um servidor de desenvolvimento local.

---

## 👨‍💻 Autor

**Rafael Santana** 🚀

Estudante de Engenharia da Computação, com foco em desenvolvimento Full-Stack, algoritmos, arquitetura CSS e construção de aplicações web.

---

<p align="center">
  Projeto desenvolvido para fins educacionais e para consolidação de conhecimentos em HTML5, CSS3, JavaScript, lógica de programação, manipulação do DOM e desenvolvimento de interfaces responsivas.
</p>
