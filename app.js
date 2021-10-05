const server = require("./src/server")

server.listen("3333", () => {
    console.log("Servidor está rodando na porta 3333: http://localhost:3333");
})