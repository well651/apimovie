## Consumo de API de filmes
O seguinte projeto se trata de um consumo de api, podendo o usuário fazer buscas com o referido nome do filme e com isso traz uma variedade de filmes, podendo clicar no banner de interesse e assim trazer informações úteis de cada filme.

![Gif](https://i.imgur.com/vu5xIy5.gif)

### Como utilizar o sistema

1. Faça o download de todos os arquivos do repositório em um diretório local;
2. Realize o cadastro no endereço: https://www.omdbapi.com/apikey.aspx afim de obter a API key;
3. Informe a API key no arquivo `.env`, adicionando na variável OMDB_API_KEY;

3. Iniciar o servidor utilizando o comando ``npm run dev`` no terminal, o link http://localhost:3000 será disponibilizado;
4.  Acesse a WEB via link: http://localhost:3000;
5. Na página, terá uma caixa de busca, digite um termo e clique no botão "Search"; 
6. Uma lista de filmes aparecerá na tela, com imagens e nomes de longa metragens referentes o termo pesquisado;
7. É possível clicar em um dos pôsteres para mostrar detalhes do filme em específico, como Ano de Lançamento, Diretor, Gênero e Descrição.