# Venturi 🚀

Projeto desenvolvido para Venturi 🥰🚀🐱‍💻🐱‍🏍

# Iniciar o projeto com o Front-end

Execute o comando a seguir para instalatar todas as dependências.
`yarn install`

Agora inicie o aplicativo react no prompt de comando passando o comando: `yarn start`

# Antes de iniciar o Back-end vamos subir o nosso Banco de Dados 🤩

## Passo 1

Vamos utilizar docker no processo, caso você não tenha o docker instalado em sua máquina,
entre nesse link para fazer o download e instalação https://hub.docker.com/editions/community/docker-ce-desktop-windows/

<h1 align="center">
  <img src="/readme-assets/docker.PNG" width="500"/>
</h1>

Agora abra o docker em sua área de trabalho, em seguida use o comando <strong>docker</strong> em seu prompt de comando para verificar se está tudo ok 😉

Caso dê tudo certo irá aparecer os dados semelhantes aos do print abaixo

<h1 align="center">
  <img src="/readme-assets/dockerCommand.PNG" width="300"/>
</h1>

Caso queira visualizar as tabelas do Banco de dados, recomendo que instale o Postbird, no Postbird você irá visualizar de uma maneira muito mais amistosa as tabelas geradas em seu Bando de Dados, Caso não opte por utilizar o Postbird não tem problema, você pode utilizar qualquer ferramente que dê para visualizar suas tabelas 😉

Link para baixar o Postbird: https://www.electronjs.org/apps/postbird

## Passo 2

Se tudo que te passei no passo 1 estiver ok, vamos agora para o passo 2 😍

Utilize o comando a seguir para criar um Container com a imagem do banco(Postgres) que estou utilizando:

<strong>docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres</strong>

Para verificar se deu tudo certo com seu container e ele está ativo, utilize o comando: <strong>docker ps</strong>

<h1 align="center">
  <img src="/readme-assets/dockerPs.PNG" width="600" height="100"/>
</h1>

Caso os campos acima estejam vazios, utilize o comando: <strong>docker start postgres</strong>

Esse comando fará com que o seu container seja iniciado e caso você queira pausar o container, basta utilizar o comando: <strong>docker stop postgres</strong>

## Passo 3

Já estamos quase no fim, Uffa!!😂

Se todos os passos acima deram certo, faça a conexão com o Postbird

<h1 align="center">
  <img src="/readme-assets/postbird.PNG" width="300"/>
</h1>

## Dados para fazer a conexão

<h3>Host: localhost
<br>
Port: 5432
<br>
Username: postgres
<br>
password: postgres
</h3>

Após preencher esses dados, basta clicar no botão <strong>Connect</strong>

Agora vá na opção <strong>create database</strong>

<h1 align="center">
  <img src="/readme-assets/createDatabase.PNG" width="300"/>
</h1>

Agora basta passar o nome da nossa database como<strong>venturiDB</strong>

Agora já podemos partir para o back-end 🐱‍🏍

# Iniciar o projeto com o Back-end

Execute esse comando para instalatar todas as dependências caso elas não sejam instaladas automaticamente.
`dotnet restore`

Nossas migrations já foram realizdas,

Então, você só precisa utilizar o seguinte comando: <strong>dotnet ef database update</strong>

Esse comando fará com que atualize a nossa database 😉

Agora inicie o back-end .dotnet no prompt de comando passando o comando: `dotnet run`

# Dados para autenticação

Login: <strong>daniel@venturi.com</strong>
<br>
Password: <strong>daniel</strong>

🐱‍🏍🚀🐱‍👤🐱‍💻🤩

# Dúvidas

Para qualquer tipo de dúvida, você pode entrar em contato comigo atráves do linkedin: https://www.linkedin.com/in/danielgjl/
