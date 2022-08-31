function criarHTML(idLivro){
    let nomeLivro = document.querySelector(idLivro).value;
    let section = document.createElement("section");
    let divImagem = document.createElement("div");
    let divDetalhes = document.createElement("div");
    let divMarcadores = document.createElement("div");

    let img = document.createElement("img");

    let hTitulo = document.createElement("p");
    let hPaginas = document.createElement("p");
    let hAutores = document.createElement("p");
    let spanTitulo = document.createElement("span");
    let spanPaginas = document.createElement("span");
    let spanAutores = document.createElement("span");

    let marcadorLivro = criarMarcador("book", 0);
    let marcadorFavorito = criarMarcador("favorite", 0);

    img.setAttribute("src", "img/livro.webp");
    img.setAttribute("alt", "imagem do livro: "+nomeLivro);

    divDetalhes.setAttribute("class", "etalhes");
    hTitulo.innerHTML = "livro: ";
    hPaginas.innerHTML = "paginas: ";
    hAutores.innerHTML = "autor/a/as/es: ";

    spanTitulo.innerHTML = nomeLivro;
    spanPaginas.innerHTML = "???";
    spanAutores.innerHTML = "???";

    divImagem.appendChild(img);

    hTitulo.appendChild(spanTitulo);
    hPaginas.appendChild(spanPaginas);
    hAutores.appendChild(spanAutores);
    divDetalhes.appendChild(hTitulo);
    divDetalhes.appendChild(hPaginas);
    divDetalhes.appendChild(hAutores);

    divMarcadores.appendChild(marcadorLivro);
    divMarcadores.appendChild(marcadorFavorito);

    section.appendChild(divImagem);
    section.appendChild(divDetalhes);
    section.appendChild(divMarcadores);
document.querySelector("#sessaoLivros").appendChild(section);
}


function criarMarcador(icone, numero){ 
    let div = document.createElement("div");
    let spanIcone = document.createElement("span");
    let spanNumero = document.createElement("span");

    div.setAttribute("class", "marcadores");
    spanIcone.setAttribute("class", "material-icons");
    spanNumero.setAttribute("class", "contador rounded-circle");

    spanIcone.innerHTML = icone;
    spanNumero.innerHTML = numero;

    div.appendChild(spanIcone);
    div.appendChild(spanNumero);

    return div;
}