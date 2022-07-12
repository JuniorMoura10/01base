// Importar módulos
import React from "react";
import ReactDOM from "react-dom";

// Caso eu queira utilizar mais tags, preciso de uma Estrutura, criada abaixo:
const estrutura = 
<div>
<h1>Meu primeiro render</h1>
<p>Testando...</p>
</div>

//Render é a parte que renderiza(mostra) as coisas na tela
ReactDOM.render( 
    estrutura,
    document.getElementById('root')
);
