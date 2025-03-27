const tftp = require("node-tftp");
const path = require("path");

const HOST = "192.168.1.10";
const PORT = 69;

function startServer() {
	const server = tftp.createServer({
		host: HOST,
		port: PORT,
		root: path.join(__dirname, "lib"),
	});
	console.log("Servidor TFTP");

	server.listen(() => {
		console.log(`Servidor TFTP rodando na porta ${PORT}`);
	});

	server.on("error", (error) => {
		console.log(
			"Erro ao iniciar servidor no IP " + HOST + ", tentando novamente...\n" +
			error
		);
		startServer();
	});
}

startServer();