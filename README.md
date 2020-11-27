# Venturi 🚀

Projeto desenvolvido para Venturi 🥰🚀🐱‍💻🐱‍🏍

# Iniciar o projeto com o Front-end

Execute esse comando para instalatar todas as dependências.
`yarn install`

Agora inicie o aplicativo react no prompt de comando passando o comando: `yarn start`

# Antes de iniciar o Back-end vamos subir nosso Banco de Dados 🤩

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

<h2>docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres</h2>

Para verificar se deu tudo certo com seu container e ele está ativo, utilize o comando: <h2>docker ps</h2>

<h1 align="center">
  <img src="/readme-assets/dockerPS.PNG" width="600" height="100"/>
</h1>

Caso os campos acima estejam vazios, utilize o comando: <h2>docker start postgres</h2>

Esse comando fará com que o seu container seja iniciado e caso você queira pausar o container, basta utilizar o comando: <h1>docker stop postgres</h1>

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

Após preencher esses dados, basta clicar no botão <h2>Connect</h2>

Agora vá na opção <h2>create database</h2>

<h1 align="center">
  <img src="/readme-assets/createDatabase.PNG" width="300"/>
</h1>

Agora basta passar o nome do nosso database como<h1>venturiDB</h1>

Agora já podemos partir para o back-end 🐱‍🏍

# Iniciar o projeto com o Back-end

Execute esse comando para instalatar todas as dependências caso elas não sejam instaladas automaticamente.
`dotnet restore`

Nossa migrations já foram feitas.

Então, você precisa dar o seguinte comando: <h2>dotnet ef database update</data>

Esse comando fará com que atualize a nossa database 😉

Agora inicie o back-end .dotnet no prompt de comando passando o comando: `dotnet run`

# Dados para autenticação

Login: daniel@venturi.com | Password: daniel

🐱‍🏍🚀🐱‍👤🐱‍💻🤩

# Dúvidas

Para qualquer tipo de dúvida, você pode entrar em contato comigo atráves do linkedin: https://www.linkedin.com/in/danielgjl/
