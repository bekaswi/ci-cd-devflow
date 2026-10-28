const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            mensagem: "DevFlow Solutions funcionando!"
        }));
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ erro: "Página não encontrada" }));
    }
});

if (require.main === module) {
    server.listen(3000, () => {
        console.log("Servidor funcionando na porta 3000");
    });
}

module.exports = server;
