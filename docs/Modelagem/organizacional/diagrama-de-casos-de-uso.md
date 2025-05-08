# Diagrama de Casos de Uso

## Introdução

Na UML, os diagramas de caso de uso modelam o comportamento de um sistema e ajudam a capturar os requisitos do sistema. Ele desempenha um papel essencial no processo de modelagem de sistemas, pois representa de forma visual as funcionalidades que o sistema deve oferecer, bem como os atores que interagem com essas funcionalidades.

Esse diagrama é especialmente útil nas fases iniciais do desenvolvimento, como levantamento de requisitos e análise, pois facilita a identificação dos principais objetivos do sistema do ponto de vista do usuário. Ao ilustrar as interações entre os atores (usuários ou outros sistemas) e os casos de uso, o Diagrama de Casos de Uso proporciona uma visão clara e de alto nível sobre o que o sistema deve realizar.

## Diagrama UML

<font size="3"><p style="text-align: center"><b>Figura 1: Diagrama de casos de uso </b> </p></font>

![Diagrama de Casos de Uso](../../assets/diagrama-uc.png)

<font size="3"><p style="text-align: center"><b>Autor:</b> [Arthur Ribeiro e Sousa][artrsousa1], [Caio Felipe Rocha][caio-felipee], [Caio Falcão Habibe][CaioHabibe], [Caio Magalhães Lamego][caiolamego], [Gabriel Fernando De Jesus Silva][MMcLovin], [Mateus Vieira Rocha da Silva][mateusvrs], [Rafael Melo Matuda][rmatuda], 2025 </p></font>

**Descrição**: O Diagrama de Caso de Uso do Plante Vc Mesmo! contém quatro atores: Usuário, Administrador, Google Cloud e LLM. O Usuário gerencia plantas, realiza cadastro/login, visualiza fórum, interage com LLM, cria postagem e etc. Já o Administrador tem funções essenciais como adicionar, editar e excluir postagens. Por fim, há a interação do sistema com os serviços externos (GoogleCloud e LLM) para suporte com funcionalidades específicas do sistema.

## Especificação dos Casos de Uso

Escolhemos alguns dos principais casos de uso para que cada membro fizesse uma especificação de caso uso, que estão presentes nas tabelas de 2 a 10, sendo a tabela 1 um resumo das especificações realizadas:

<font size="3"><p style="text-align: center"><b>Tabela 1: tabela resumida das especificações dos casos de uso </b> </p></font>

<center>

| Código | Nome do Caso de Uso           | Ator Principal    |
| ------ | ----------------------------- | ----------------- |
| UC01   | Gerenciar Calendário          | Usuário           |
| UC02   | Criar Planta                  | Usuário           |
| UC03   | Editar Planta                 | Usuário           |
| UC04   | Realizar Cadastro             | Usuário           |
| UC05   | Login com Google              | Usuário           |
| UC06*   | Criar Postagem                | Usuário           |
| UC07   | Interagir com Postagem        | Usuário           |
| UC08   | Gerenciar Postagem            | Administrador     |
| UC09   | Interagir com LLM             | Usuário           |

</center>

\* O caso de uso UC06 é uma possível implementação do projeto, que não estará presente de forma obrigatória. Isso, visto que deixar os usuários postarem livremente pode gerar problemas de informações falsas, imagens impróprias, entre outros. Portanto, o caso de uso UC06 pode ser implementado ou não, dependendo do quanto a equipe progredir com o projeto.

<font size="3"><p style="text-align: center"><b>Autor: [Arthur Ribeiro e Sousa][artrsousa1], 2025 </b> </p></font>

### UC01 - Gerenciar Calendário

<font size="3"><p style="text-align: center"><b>Tabela 2: especificação do caso de uso UC01</b></p></font>

|                      |                                                                                             |
|----------------------|---------------------------------------------------------------------------------------------|
| **Descrição**        | O usuário deseja gerenciar o calendário de cuidados com suas plantas, podendo visualizar eventos, adicionar, editar e excluir avisos de cuidado, além de receber lembretes automáticos recomendados pelo sistema. |
| **Ator(es)**         | Usuário; Sistema                                                                           |
| **Pré-Requisitos**   | O usuário deve estar autenticado no aplicativo e possuir ao menos uma planta cadastrada.    |
| **Fluxo Principal**  | 1. O usuário acessa a funcionalidade de Gerenciar Calendário.<br>2. O sistema exibe o calendário com os eventos cadastrados.<br>3. O usuário escolhe entre adicionar, editar ou excluir um aviso.<br>4. Caso adicione um aviso, o sistema recomenda automaticamente a melhor data para o cuidado da planta. (FA01)<br>5. O usuário pode aceitar ou modificar a data sugerida.<br>6. O usuário confirma a ação.<br>7. O sistema salva as alterações no calendário. (FE01)<br>8. O sistema programa os lembretes com base nos eventos cadastrados.<br>9. O usuário recebe lembretes automáticos sobre os cuidados na data agendada. (FE02) |
| **Fluxo Alternativo**| **FA01: O usuário insere a data manualmente**<br>1. O usuário opta por não seguir a recomendação automática.<br>2. O usuário insere manualmente a data desejada para o aviso.<br>3. O sistema prossegue normalmente com o salvamento e agendamento do lembrete. |
| **Fluxo de Exceção** | **FE01: Falha ao salvar o aviso**<br>1. O sistema tenta salvar o aviso, mas ocorre um erro.<br>2. O sistema exibe uma mensagem de erro solicitando nova tentativa.<br><br>**FE02: Falha no envio do lembrete**<br>1. O sistema falha ao enviar o lembrete programado.<br>2. O sistema registra a falha e tenta reprogramar o envio. |

<font size="3"><p style="text-align: center"><b>Autor:</b> [Matheus de Siqueira Brant][MatheussBrant], 2025</p></font>


### UC02 - Criação de Plantas

<font size="3"><p style="text-align: center"><b>Tabela 3: especificação do caso de uso UC02</b> </p></font>

|                      |                                                                                             |
|----------------------|---------------------------------------------------------------------------------------------|
| **Descrição**        | O Usuário deseja criar uma Nova Planta no seu perfil, sendo necessário, dessa maneira, informar nome, descrição e foto, para que esta seja salva corretamente no seu perfil. |
| **Ator(es)**         | Usuário do aplicativo "Plante Você Mesmo"                                                                            |
| **Pré-Requisitos**   | O usuário deve estar logado no aplicativo e ter acesso à funcionalidade de criação de plantas.   |
| **Fluxo Principal**  | 1. Usuário acessa seu perfil. <br> 2. Usuário clica no botão de Adicionar Planta. (FA1) <br> 3. O usuário insere o nome, descrição da Planta. <br> 4. O usuário faz upload da foto da planta. (FE3) <br>  5. O usuário clica para confirmar. (FE2) <br> 6. O sistema exibe uma confirmação de que a planta foi criada com sucesso. (FE1) <br> 7. O usuário visualiza a nova planta em seu perfil.  |
| **Fluxo Alternativo**| FA1. Se o usuário cancelar a criação da planta, o sistema retorna à tela inicial da área de plantas. |
| **Fluxo de Exceção** | **FE01: Campo Não Preenchido**<br>1. Se o usuário não preencher algum campo, o sistema solicita que o usuário preencha todos.<br><br>**FE02: Falha ao salvar**<br>1. Se ocorrer um erro ao salvar a planta, o sistema exibe uma mensagem de erro. <br><br>**FE03: Foto Inválida**<br>1. Se o formato da foto enviada for inválido, o sistema solicita ao usuário que envie um arquivo de imagem válido. |

<font size="3"><p style="text-align: center"><b>Autor:</b> [Caio Magalhães Lamego][caiolamego], 2025</p></font>


### UC03 - Edição de Planta

<font size="3"><p style="text-align: center"><b>Tabela 4: especificação do caso de uso UC03</b> </p></font>

|  |  |
|--------------------|-----------------------------------------------|
| **Descrição**      | Este caso de uso permite que o usuário modifique informações sobre uma planta já cadastrada no sistema, incluindo dados básicos, rotina de cuidados e imagens. |
| **Ator(es)**       | Usuário (proprietário da planta)                     |
| **Pré-Requisitos** | 1. O usuário deve estar autenticado na plataforma.<br>2. O usuário deve ter pelo menos uma planta cadastrada.<br>3. O usuário deve ter permissões para editar a planta selecionada. |
| **Fluxo Principal** | FP01. O caso de uso começa quando o usuário seleciona a opção "Editar" em uma planta específica na sua lista de plantas.<br>FP02. O sistema exibe um formulário preenchido com as informações atuais da planta.<br>FP03. O usuário modifica os dados desejados, que podem incluir: nome da planta, espécie, data de aquisição, localização na casa, descrição e fotografia. [FA01][FA02]<br>FP04. O usuário seleciona a opção para editar a rotina de cuidados da planta. [FA03]<br>FP05. O sistema apresenta as configurações atuais da rotina de cuidados.<br>FP06. O usuário modifica parâmetros da rotina como frequência de rega, frequência de adubação, necessidades de luz, e instruções especiais. [FE01]<br>FP07. O usuário confirma as alterações na rotina de cuidados.<br>FP08. O usuário seleciona a opção "Salvar" para confirmar todas as alterações realizadas na planta. [FE02]<br>FP09. O sistema valida as informações inseridas. [FE03]<br>FP10. O sistema atualiza os dados da planta no banco de dados.<br>FP11. O sistema recalcula os próximos lembretes de cuidados com base na rotina atualizada.<br>FP12. O sistema sincroniza os lembretes atualizados com o Google Calendar do usuário. [FE04]<br>FP13. O sistema exibe uma mensagem de confirmação de que a planta foi atualizada com sucesso.<br>FP14. O caso de uso é encerrado e o sistema retorna para a visualização detalhada da planta atualizada. |
| **Fluxo Alternativo** | FA01. Trocar fotografia da planta<br>FA01.1. No passo FP03, o usuário seleciona a opção para trocar a foto da planta.<br>FA01.2. O sistema apresenta opções para fazer upload de uma nova foto, tirar uma foto com a câmera ou escolher uma imagem da galeria.<br>FA01.3. O usuário seleciona o método desejado e fornece a nova imagem. [FE05]<br>FA01.4. O sistema processa e armazena temporariamente a nova imagem.<br>FA01.5. O sistema retorna ao passo FP03 do fluxo principal.<br><br>FA02. Cancelar edição<br>FA02.1. Em qualquer ponto após o passo FP02, o usuário seleciona a opção "Cancelar".<br>FA02.2. O sistema exibe uma mensagem perguntando se o usuário deseja descartar as alterações não salvas.<br>FA02.3. O usuário confirma que deseja cancelar a edição.<br>FA02.4. O sistema descarta todas as alterações não salvas.<br>FA02.5. O caso de uso é encerrado e o sistema retorna para a visualização anterior.<br><br>FA03. Pular edição da rotina de cuidados<br>FA03.1. No passo FP04, o usuário decide não editar a rotina de cuidados.<br>FA03.2. O sistema mantém as configurações atuais da rotina de cuidados.<br>FA03.3. O fluxo continua no passo FP08. |
| **Fluxo de Exceção** | FE01. Valor inválido na rotina de cuidados<br>FE01.1. No passo FP06, o usuário insere um valor inválido para algum parâmetro da rotina (como frequência negativa de rega).<br>FE01.2. O sistema exibe uma mensagem de erro indicando o problema específico.<br>FE01.3. O sistema mantém o formulário aberto com os dados inseridos, destacando o campo com erro.<br>FE01.4. O usuário corrige o valor ou cancela a operação.<br>FE01.5. O fluxo retorna ao passo FP06.<br><br>FE02. Falha ao salvar<br>FE02.1. No passo FP08, ocorre uma falha técnica ao tentar salvar as alterações.<br>FE02.2. O sistema exibe uma mensagem informando sobre o problema.<br>FE02.3. O sistema oferece opções para tentar novamente ou salvar um rascunho das alterações.<br>FE02.4. O usuário escolhe uma das opções.<br>FE02.5. Se escolher tentar novamente, o fluxo retorna ao passo FP08.<br>FE02.6. Se escolher salvar rascunho, o sistema armazena as alterações localmente e o caso de uso é encerrado.<br><br>FE03. Dados inválidos<br>FE03.1. No passo FP09, o sistema detecta dados inválidos ou inconsistentes.<br>FE03.2. O sistema exibe mensagens específicas para cada campo com problema.<br>FE03.3. O sistema mantém o formulário aberto com os dados inseridos, destacando os campos com erro.<br>FE03.4. O usuário corrige os dados ou cancela a operação.<br>FE03.5. Se o usuário corrigir os dados, o fluxo retorna ao passo FP09.<br><br>FE04. Falha na sincronização com o Google Calendar<br>FE04.1. No passo FP12, ocorre uma falha na sincronização com o Google Calendar.<br>FE04.2. O sistema registra a falha e salva os lembretes localmente.<br>FE04.3. O sistema informa ao usuário sobre a falha na sincronização e que os lembretes estão disponíveis apenas na plataforma.<br>FE04.4. O sistema oferece a opção de tentar sincronizar novamente mais tarde.<br>FE04.5. O fluxo continua no passo FP13.<br><br>FE05. Falha no processamento da imagem<br>FE05.1. No passo FA01.3, ocorre um problema ao processar a imagem (tamanho muito grande, formato incompatível, etc.).<br>FE05.2. O sistema exibe uma mensagem informando o problema específico.<br>FE05.3. O sistema oferece orientações sobre os requisitos da imagem.<br>FE05.4. O usuário fornece uma nova imagem ou cancela a operação.<br>FE05.5. Se o usuário fornecer uma nova imagem, o fluxo retorna ao passo FA01.3. |

<font size="3"><p style="text-align: center"><b>Autor:</b> [Davi Araújo Bady Casseb][dcasseb], 2025</p></font>

### UC04 - Realizar Cadastro

<font size="3"><p style="text-align: center"><b>Tabela 5: especificação do caso de uso UC04</b> </p></font>

|                      |                                                                                                                                                                                                                                                                     |
|----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Descrição**        | Permite que o usuário crie uma conta no sistema “Plante Você Mesmo” para acessar funcionalidades como registro de plantações, acompanhamento e dicas personalizadas.                                                                                                     |
| **Ator(es)**         | Usuário (pessoa interessada em plantar), Sistema                                                                                                                                                                                                                        |
| **Pré-Requisitos**   | O usuário deve ter acesso à internet e dispor de um dispositivo compatível (celular, tablet ou computador).                                                                                                                                                              |
| **Fluxo Principal**  | 1. O usuário acessa a página inicial do sistema. <br> 2. O usuário seleciona a opção “Cadastrar-se”. <br> 3. O sistema apresenta o formulário de cadastro. <br> 4. O usuário preenche os campos obrigatórios (nome, e-mail, senha, etc.). <br> 5. O usuário confirma o cadastro. <br> 6. O sistema valida as informações. <br> 7. O sistema cria a conta e exibe mensagem de sucesso. <br> 8. O usuário é redirecionado para a tela inicial logado no sistema. |
| **Fluxo Alternativo**| FA01. Após o passo 4, o usuário opta por se cadastrar usando redes sociais (Google, Facebook). <br> 1. O sistema redireciona para a autenticação da rede social. <br> 2. Após a autenticação, o sistema cria a conta automaticamente e exibe mensagem de sucesso. |
| **Fluxo de Exceção** | **FE01: E-mail já cadastrado** <br> 1. No passo 6, se o e-mail informado já estiver cadastrado, o sistema exibe mensagem de erro e solicita um novo e-mail. <br><br> **FE02: Campos obrigatórios em branco** <br> 1. No passo 6, se o usuário deixar campos obrigatórios em branco, o sistema exibe mensagens de validação e impede o avanço até que sejam corrigidos. <br><br> **FE03: Falha na conexão** <br> 1. No passo 6, se ocorrer falha na conexão com o servidor, o sistema exibe mensagem de erro e solicita que o usuário tente novamente mais tarde. |

<font size="3"><p style="text-align: center"><b>Autor:</b> [Rafael Melo Matuda][rmatuda], 2025</p></font>


### UC05 - Login na Google

<font size="3"><p style="text-align: center"><b>Tabela 6: especificação do caso de uso UC05</b> </p></font>

|  |  |
|--------------------|-----------------------------------------------|
| **Descrição**      | Permite que um usuário acesse a plataforma utilizando sua conta da Google |
| **Ator(es)**       | Um usuário com uma conta Google        |
| **Pré-Requisitos** | O usuário já deve possuir uma conta na Google |
| **Fluxo Principal** | 1. O usuário acessa a tela de login<br> 2. O usuário clica no botão "Login com Google"<br> 3. O usuário é redirecionado para a página de autenticação do Google<br> 4. O usuário a conta desejada e informa a sua senha<br> 5. O Google autentica o usuário e redireciona de volta com um token de autorização<br> 6. O sistema busca os dados do usuário nas API's da Google<br> 7. O sistema gera uma sessão e redireciona o usuário para a página inicial   |
| **Fluxo Alternativo** | **FA01:** O usuário cancela a autorização na tela do Google e o sistema retorna para a tela de login sem a autenticação |
| **Fluxo de Exceção** | **FE01:** O token informado é inválido ou expirado e o sistema exibe uma mensagem de erro |

<font size="3"><p style="text-align: center"><b>Autor:</b> [Arthur Ribeiro e Sousa][artrsousa1], 2025</p></font>

### UC06 - Criar postagem

<font size="3"><p style="text-align: center"><b>Tabela 7: especificação do caso de uso UC06</b> </p></font>

|  |  |
|--------------------|-----------------------------------------------|
| **Descrição**      | O usuário deseja criar uma nova postagem para compartilhar conteúdo na plataforma |
| **Ator(es)**       | Usuário |
| **Pré-Requisitos** | O usuário deve possuir uma conta ativa e estar autenticado no sistema |
| **Fluxo Principal** | 1. O usuário acessa a interface de criação de postagem<br>2.O sistema exibe o formulário de nova postagem<br>3. O usuário preenche os campos obrigatórios (título, conteúdo)<br>4.  O usuário adiciona, se desejar, imagens ou categorias <br>5. O usuário clica no botão “Publicar”<br>6. O sistema valida os dados inseridos<br>7. O sistema salva a postagem no banco de dados<br>8.O sistema exibe uma mensagem de sucesso confirmando a criação da postagem |
| **Fluxo Alternativo** | **FA01: O usuário salva a postagem como rascunho**<br>1.  O usuário preenche parcialmente o formulário<br>2. O usuário clica no botão “Salvar como rascunho”<br>3. O sistema salva os dados incompletos como rascunho<br>4 .O sistema confirma que o rascunho foi salvo com sucesso|
| **Fluxo de Exceção** | **FE01: Dados obrigatórios não preenchidos**<br>1. O sistema identifica que título ou conteúdo não foram preenchidos<br>2 .O sistema exibe uma mensagem de erro solicitando o preenchimento dos campos obrigatórios<br><br>**FE02:  Falha ao salvar a postagem**<br>1. O sistema tenta salvar a postagem, mas ocorre um erro no banco de dados<br>2 .O sistema exibe uma mensagem de erro informando que não foi possível concluir a operação e sugere tentar novamente mais tarde|

<font size="3"><p style="text-align: center"><b>Autor:</b> [Pedro Henrique Fernandino da Silva][PedroHenrique061], 2025</p></font>

### UC07 - Interagir com postagem

<font size="3"><p style="text-align: center"><b>Tabela 8: especificação do caso de uso UC07</b> </p></font>

|  |  |
|--------------------|-----------------------------------------------|
| **Descrição**          | O usuário deseja interagir com uma postagem. |
| **Ator(es)**           | Usuário autenticado                                             |
| **Pré-Requisitos**     | O usuário deve estar autenticado e visualizar uma postagem disponível para interação. |
| **Fluxo Principal**    | 1. O usuário acessa a postagem.<br>2. O sistema exibe as opções de interação (curtir, comentar, compartilhar).<br>3. O usuário seleciona uma das opções de interação.<br>4. O sistema registra a interação e atualiza a postagem em tempo real. |
| **Fluxo Alternativo**  | **FA01**: O usuário decide cancelar a interação antes de confirmar.<br>**FA02**: O usuário escolhe mais de uma opção de interação (por exemplo, curtir e comentar). O sistema registra todas as interações realizadas. |
| **Fluxo de Exceção**   | **FE01**: Ocorre uma falha de conexão: o sistema exibe uma mensagem de erro e orienta o usuário a tentar novamente. |

<font size="3"><p style="text-align: center"><b>Autor:</b> [Caio Falcão Habibe][CaioHabibe], 2025</p></font>

### UC08 - Gerenciar Postagem

<font size="3"><p style="text-align: center"><b>Tabela 9: especificação do caso de uso UC08</b> </p></font>

|  |  |
|--------------------|-----------------------------------------------|
| **Descrição**      | Permite ao administrador criar, editar ou excluir postagens no sistema |
| **Ator(es)**       | Administrador, **Sistema** (validações e processamento) |
| **Pré-Requisitos** | Estar autenticado no sistema e ter pelo menos uma postagem publicada |
| **Fluxo Principal** | 1. O administrador acessa a área de gerenciamento de postagens<br> 2. O sistema exibe a opção de "Criar nova postagem" e lista as postagens publicadas <br> 3. O administrador seleciona criar uma postagem (**FA1**)(**FA2**)<br> 4. O sistema exibe o formulário para criar uma postagem<br> 5. O administrador preenche os campos de título e conteúdo<br> 6. O administrador clica em "Publicar" (**FE1**) <br> 7. O sistema valida os dados inseridos<br> 8. O sistema armazena a nova postagem no banco de dados e exibe uma mensagem de confirmação da publicação |
| **Fluxo Alternativo** | **FA01: O administrador escolhe excluir a postagem**<br>1. O administrador clica em "Excluir" em uma postagem publicada (**FE2**)<br>2. O sistema solicita confirmação de exclusão <br>3. O administrador confirma a exclusão <br>4. O sistema remove a postagem da exibição pública e do banco de dados <br> 5. O sistema exibe mensagem de confirmação de exclusão <br><br> **FA02: O administrador escolhe editar a postagem**<br>  1. O administrador clica em "Editar" em uma postagem publicada <br> 2. O sistema carrega o conteúdo atual em modo de edição <br> 3. O administrador modifica os campos desejados <br> 4. O administrador salva as alterações (**FE3**) <br> 5. O sistema valida as alterações  <br> 6. O sistema atualiza a postagem e exibe uma mensagem de sucesso |
| **Fluxo de Exceção** | **FE01 - Dados inválidos na criação** <br> 1. O sistema detecta campos obrigatórios não preenchidos ou inválidos <br> 2. Exibe mensagem específica por campo com erro <br> 3. Mantém o formulário aberto com os dados preenchidos <br> 4. Volta ao passo 4 do fluxo principal <br><br> **FE02 - Postagem não encontrada** <br> 1. O sistema não localiza a postagem para edição/exclusão <br> 2. Exibe: "Postagem não disponível" <br> 3. Volta ao passo 3 do fluxo principal <br><br> **FE03 - Erro ao salvar edição** <br> 1. Ocorre falha durante o salvamento das alterações <br> 2. O sistema exibe: "Falha ao atualizar. Tente novamente." <br> 3. Oferece opção de "tentar novamente" ou "cancelar" <br> 4.1 O Administrador escolhe "tentar novamente" e volta ao passo 2 do FA1 <br> 4.2 O Administrador escolhe "cancelar" e volta ao passo 3 fluxo principal |

<font size="3"><p style="text-align: center"><b>Autor:</b> [Gabriel Fernando De Jesus Silva][MMcLovin], 2025</p></font>

### UC09 - Interagir com LLM

<font size="3"><p style="text-align: center"><b>Tabela 10: especificação do caso de uso UC09</b> </p></font>

|  |  |
|--------------------|-----------------------------------------------|
| **Descrição**      | O usuário deseja interagir com o sistema de IA generativa |
| **Ator(es)**       | Usuário |
| **Pré-Requisitos** | Possuir uma conta ativa e estar autenticado |
| **Fluxo Principal** | 1. Usuário abre o sistema de chat<br>2. O sistema mostra os chats do usuário<br>3. O usuário escolhe o chat<br>&#9;3.1 O usuário também pode criar um chat novo, indo para o **FA01**<br>4. O usuário é redirecionado para o chat escolhido<br>5. O usuário envia uma mensagem<br>&#9;5.1 O sistema verifica se o usuário excedeu o limite de mensagens diárias. Caso positivo, **FE01**<br>6. O sistema retorna a resposta utilizando IA<br>6.1 Caso não seja possível gerar uma resposta, **FE02**<br>7. O sistema incrementa em uma unidade a quantidade de mensagens diárias do usuário |
| **Fluxo Alternativo** | **FA01: O usuário cria um novo chat**<br>1. O usuário adiciona o título do novo chat<br>2. O usuário clica no botão de criar novo chat<br>3. O sistema cria um novo chat|
| **Fluxo de Exceção** | **FE01: O usuário excedeu o limite de mensagens diárias**<br>1. O sistema mostra uma mensagem sinalizando que o usuário está com o limite de mensagens excedido<br><br>**FE02: O sistema não consegue gerar uma resposta**<br>1. O sistema exibe uma mensagem sinalizando a indisponibilidade temporária do uso de IA generativa|

<font size="3"><p style="text-align: center"><b>Autor:</b> [Caio Felipe Rocha][caio-felipee], 2025</p></font>

## Histórico de Versão

| Versão | Data | Alterações Principais | Autor(es) |
| ------ | ---- | --------------------- | :-------: |
| 1.0.0  | 06-05-2025 | Adição de fundamentação teórica | [Arthur Ribeiro e Sousa][artrsousa1], [Caio Falcão Habibe][CaioHabibe], [Caio Felipe Rocha][caio-felipee], [Caio Magalhães Lamego][caiolamego], [Gabriel Fernando De Jesus Silva][MMcLovin], [Mateus Vieira Rocha da Silva][mateusvrs], [Rafael Melo Matuda][rmatuda] |
| 1.0.1  | 06-05-2025 | Adição do UC01, UC02, UC03, UC04, UC05, UC06, UC07, UC08, UC09 | [Arthur Ribeiro e Sousa][artrsousa1], [Caio Falcão Habibe][CaioHabibe], [Caio Felipe Rocha][caio-felipee], [Caio Magalhães Lamego][caiolamego], [Davi Araújo Bady Casseb][dcasseb], [Gabriel Fernando De Jesus Silva][MMcLovin], [Mateus Vieira Rocha da Silva][mateusvrs], [Matheus de Siqueira Brant][MatheussBrant], [Pedro Henrique Fernandino da Silva][PedroHenrique061], [Rafael Melo Matuda][rmatuda] |
| 1.0.2  | 07-05-2025 | Correção do UC08 e adição de título e rodapé nas tabelas | [Gabriel Fernando De Jesus Silva][MMcLovin] |
| 1.0.3  | 08-05-2025 | Adição de nota informativa para o caso de uso UC06 | [Mateus Vieira Rocha da Silva][mateusvrs] |

[artrsousa1]: https://github.com/artrsousa1  
[CaioHabibe]: https://github.com/CaioHabibe  
[caio-felipee]: https://github.com/caio-felipee  
[caiolamego]: https://github.com/caiolamego  
[dcasseb]: https://github.com/dcasseb  
[MMcLovin]: https://github.com/MMcLovin  
[mateusvrs]: https://github.com/mateusvrs  
[MatheussBrant]: https://github.com/MatheussBrant  
[PedroHenrique061]: https://github.com/PedroHenrique061  
[rmatuda]: https://github.com/rmatuda  

<!-- 
relação dos nomes:
[Arthur Ribeiro e Sousa][artrsousa1] 
[Caio Falcão Habibe][CaioHabibe] 
[Caio Felipe Rocha][caio-felipee] 
[Caio Magalhães Lamego][caiolamego] 
[Davi Araújo Bady Casseb][dcasseb] 
[Gabriel Fernando De Jesus Silva][MMcLovin] 
[Mateus Vieira Rocha da Silva][mateusvrs] 
[Matheus de Siqueira Brant][MatheussBrant] 
[Pedro Henrique Fernandino da Silva][PedroHenrique061] 
[Rafael Melo Matuda][rmatuda]
>
