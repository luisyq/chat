var cvanderito = require("socket.io").listen(6969);
cvanderito.sockets.on("connection", arranque);

function arranque(usuario){
	usuario.on("nuevoNombre", emitir);
}

function emitir(data){
	cvanderito.sockets.emit("nombreDesdeServidor", data + "*");
}