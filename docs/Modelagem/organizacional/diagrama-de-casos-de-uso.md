# Diagrama de Casos de Uso

## Introdução

Na UML, os diagramas de caso de uso modelam o comportamento de um sistema e ajudam a capturar os requisitos do sistema. Ele desempenha um papel essencial no processo de modelagem de sistemas, pois representa de forma visual as funcionalidades que o sistema deve oferecer, bem como os atores que interagem com essas funcionalidades.

Esse diagrama é especialmente útil nas fases iniciais do desenvolvimento, como levantamento de requisitos e análise, pois facilita a identificação dos principais objetivos do sistema do ponto de vista do usuário. Ao ilustrar as interações entre os atores (usuários ou outros sistemas) e os casos de uso, o Diagrama de Casos de Uso proporciona uma visão clara e de alto nível sobre o que o sistema deve realizar.

## Template para criação de Casos de Uso

### UC00 - Nome do Caso de Uso
|  |  |
|--------------------|-----------------------------------------------|
| **Descrição**      | Um breve resumo do que é o caso de uso |
| **Ator(es)**       | Quem está praticando o caso de uso                        |
| **Pré-Requisitos** | O que é necessário para que ele ocorra |
| **Fluxo Principal** | Sequência de passos normal do caso de uso e os fluxos alternativaos e de execção a frente do passo que eles podem ocorrer |
| **Fluxo Alternativo** | É um caminho diferente que o usuário pode seguir para completar a mesma tarefa, geralmente devido a uma escolha ou condição específica. |
| **Fluxo de Exceção** | É o caminho que o sistema segue quando ocorre um erro ou uma condição inesperada, exigindo uma ação corretiva. |

## Tabela de Casos de Uso

| Código | Nome do caso de uso |
|--------|---------------------|
|  UC05  |    Login na Google  |

### UC05 - Login na Google
|  |  |
|--------------------|-----------------------------------------------|
| **Descrição**      | Permite que um usuário acesse a plataforma utilizando sua conta da Google |
| **Ator(es)**       | Um usuário com uma conta Google        |
| **Pré-Requisitos** | O usuário já deve possuir uma conta na Google |
| **Fluxo Principal** | 1. O usuário acessa a tela de login<br> 2. O usuário clica no botão "Login com Google"<br> 3. O usuário é redirecionado para a página de autenticação do Google<br> 4. O usuário a conta desejada e informa a sua senha<br> 5. O Google autentica o usuário e redireciona de volta com um token de autorização<br> 6. O sistema busca os dados do usuário nas API's da Google<br> 7. O sistema gera uma sessão e redireciona o usuário para a página inicial   |
| **Fluxo Alternativo** | **FA01:** O usuário cancela a autorização na tela do Google e o sistema retorna para a tela de login sem a autenticação |
| **Fluxo de Exceção** | **FE01:** O token informado é inválido ou expirado eo sistema exibe uma mensagem de erro |

Autor: Arthur Ribeiro

### UC09 - Interagir com LLM
|  |  |
|--------------------|-----------------------------------------------|
| **Descrição**      | O usuário deseja interagir com o sistema de IA generativa |
| **Ator(es)**       | Usuário |
| **Pré-Requisitos** | Possuir uma conta ativa e estar autenticado |
| **Fluxo Principal** | 1. Usuário abre o sistema de chat<br>2. O sistema mostra os chats do usuário<br>3. O usuário escolhe o chat<br>&#9;3.1 O usuário também pode criar um chat novo, indo para o **FA01**<br>4. O usuário é redirecionado para o chat escolhido<br>5. O usuário envia uma mensagem<br>&#9;5.1 O sistema verifica se o usuário excedeu o limite de mensagens diárias. Caso positivo, **FE01**<br>6. O sistema retorna a resposta utilizando IA<br>6.1 Caso não seja possível gerar uma resposta, **FE02**<br>7. O sistema incrementa em uma unidade a quantidade de mensagens diárias do usuário |
| **Fluxo Alternativo** | **FA01: O usuário cria um novo chat**<br>1. O usuário adiciona o título do novo chat<br>2. O usuário clica no botão de criar novo chat<br>3. O sistema cria um novo chat|
| **Fluxo de Exceção** | **FE01: O usuário excedeu o limite de mensagens diárias**<br>1. O sistema mostra uma mensagem sinalizando que o usuário está com o limite de mensagens excedido<br><br>**FE02: O sistema não consegue gerar uma resposta**<br>1. O sistema exibe uma mensagem sinalizando a indisponibilidade temporária do uso de IA generativa|

Autor: Caio Felipe

## Histórico de Versão
| Versão | Data       | Alterações Principais                             | Autor(es)        |
|--------|------------|---------------------------------------------------|:----------------:|
| 1.0.0  | 06-05-2025 | Adição de fundamentação teórica                | Arthur Ribeiro, Mateus Vieira, Caio Felipe <br> Caio Habibe, Caio Lamego, Gabriel Fernando <br> Rafael Matuda   |
