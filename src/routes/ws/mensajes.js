import mensajesApi from '../../api/mensajes.js'
import { normalizarMensajes } from '../../normalizacion/index.js'

export default async function configurarSocket(socket, sockets) {
    socket.emit('mensajes', normalizarMensajes(await mensajesApi.listarAll()));

    socket.on('nuevoMensaje', async mensaje => {
        mensaje.fyh = new Date().toLocaleString()
        await mensajesApi.guardar(mensaje)
        sockets.emit('mensajes', normalizarMensajes(await mensajesApi.listarAll()));
    })
}