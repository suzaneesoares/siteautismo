function buscar() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let conteudo = document.getElementById("conteudo");

    if (input.includes("autismo")) {
        conteudo.innerHTML = `
      <h2>O que é o autismo?</h2>
      <p>O TEA é uma condição do neurodesenvolvimento...</p>
    `;
    } else if (input.includes("direitos")) {
        conteudo.innerHTML = `
      <h2>Leis e Direitos</h2>
      <p>Pessoas com TEA possuem direitos garantidos por lei.</p>
    `;
    } else if (input.includes("níveis de suporte") || input.includes("suporte")) {
        conteudo.innerHTML = `
      <h2>Níveis de Suporte</h2>
      <p>Níveis 1, 2 e 3 de suporte no TEA.</p>
    `;
    } else if (input.includes("características") || input.includes("caracteristicas")) {
        conteudo.innerHTML = `
      <h2>Características</h2>
      <p>Dificuldades sociais e padrões repetitivos.</p>
    `;
    } else if (input.includes("diagnóstico") || input.includes("diagnostico")) {
        conteudo.innerHTML = `
      <h2>Diagnóstico</h2>
      <p>Realizado por profissionais especializados.</p>
    `;
    } else if (input.includes("convivendo com o tea") || input.includes("convivendo")) {
        conteudo.innerHTML = `
      <h2>Convivendo com o TEA</h2>
      <p>Inclusão, respeito e adaptação.</p>
    `;
    } else {
        conteudo.innerHTML = `<p>Nenhum resultado encontrado.</p>`;
    }
}

document.querySelectorAll("nav li").forEach(item => {
    item.addEventListener("click", () => {
        let conteudo = document.getElementById("conteudo");
        let texto = item.childNodes[0].textContent.trim();

        switch (texto) {
            case "Níveis de Suporte":
                conteudo.innerHTML = "<h2>Níveis de Suporte</h2><p>Níveis 1, 2 e 3 de suporte no TEA.</p>";
                break;

            case "Características":
                conteudo.innerHTML = "<h2>Características</h2><p>Dificuldades sociais e padrões repetitivos.</p>";
                break;

            case "Leis e Direitos":
                conteudo.innerHTML = "<h2>Leis e Direitos</h2><p>Direitos garantidos por lei para pessoas com TEA.</p>";
                break;

            case "Diagnóstico":
                conteudo.innerHTML = "<h2>Diagnóstico</h2><p>Realizado por profissionais especializados.</p>";
                break;

            case "Convivendo com o TEA":
                conteudo.innerHTML = "<h2>Convivendo com o TEA</h2><p>Inclusão, respeito e adaptação.</p>";
                break;
        }
    });
});
function lei1() {
    window.open("https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12764.htm", "_blank");
}

function lei2() {
    window.open("https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm", "_blank");
}