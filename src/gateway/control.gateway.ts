import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: true })
export class ControlGateway {
    @WebSocketServer()
    server: Server;

    private estadoBoton = false;

    @SubscribeMessage('cambiarEstado')
    handleEstado(@MessageBody() data: { estado: boolean }) {
        this.estadoBoton = data.estado;
        
        this.server.emit('estadoActualizado', this.estadoBoton);
    }

    @SubscribeMessage('obtenerEstado')
    sendEstado() {
        this.server.emit('estadoActualizado', this.estadoBoton);
    }
}

