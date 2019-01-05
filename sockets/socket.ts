import { Socket } from 'socket.io';
import socketIO from 'socket.io';

// Desconexión de cliente
export const desconectar = (cliente: Socket) => {
    cliente.on('disconnect', () => {
        console.log('Cliente desconectado');
    })
}

// Auditoria de conexión y desconexión
export function eventDataTime(): string {
    return `${new Date().toLocaleDateString()} / ${new Date().toLocaleTimeString()} `;
}

// Escuchar mensajes
export const mensaje = (cliente: Socket, io: socketIO.Server) => {
    cliente.on('mensaje', (payload: { de: string, cuerpo: string }) => {
        console.log('Mensaje recibido', payload);

        io.emit('mensaje-nuevo', payload);
    });
}