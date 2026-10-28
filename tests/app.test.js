const server = require("../app");

async function testarAplicacao() {
    await new Promise((resolve) => server.listen(0, resolve));

    try {
        const porta = server.address().port;
        const resposta = await fetch(`http://localhost:${porta}/`);
        const dados = await resposta.json();

        if (resposta.status !== 200) {
            throw new Error("Status incorreto");
        }

        if (dados.mensagem !== "DevFlow Solutions funcionando!") {
            throw new Error("Mensagem incorreta");
        }

        console.log("Teste aprovado!");
    } finally {
        await new Promise((resolve) => {
            server.close(resolve);
        });
    }
}

testarAplicacao().catch((erro) => {
    console.error("Teste falhou:", erro);
    process.exitCode = 1;
});
