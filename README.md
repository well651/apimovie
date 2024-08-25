## Consumo de API de filmes
Trata-se de uma aplicação em Node de um consumo de uma API de filmes, ao iniciar você poderá procurar na barra de busca o nome do filme, caso exista ou esteja contido dentro da API será retornado na busca os títulos com o referido nome, podendo clicar no banner e obter informações sobre o mesmo.

![Gif](assets/api-movie.gif)

### Como utilizar 

1. Faça o download de todos os arquivos do repositório em um diretório local;
2. Realize o cadastro no endereço: https://www.omdbapi.com/apikey.aspx afim de obter a API key;
3. Informe a API key no arquivo `.env`, adicionando na variável OMDB_API_KEY;

3. Iniciar o servidor utilizando o comando ``npm run dev`` no terminal, o link http://localhost:3000 será disponibilizado;
4.  Acesse pelo link disponível no terminal.
5. Na página, terá uma caixa de busca, digite um termo e clique no botão "Search"; 
6. Uma lista de filmes aparecerá na tela, com imagens e nomes de longa metragens referentes o termo pesquisado;
7. É possível clicar em um dos pôsteres para mostrar detalhes do filme em específico, como Ano de Lançamento, Diretor, Gênero e Descrição.