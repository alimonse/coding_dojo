import {
	WebSocketGateway,
	WebSocketServer,
	SubscribeMessage,
	WsResponse,
	OnGatewayInit,
	OnGatewayConnection,
	OnGatewayDisconnect
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsuarioService } from 'usuario/usuario.service';
const io = require('socket.io-client');

@WebSocketGateway(3002, {namespace : '/chat'})
export class ClienteGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect{

	constructor(private readonly _usuarioService: UsuarioService) { }	


	afterInit(server: any) {
		console.log('Init Cliente');
		
	}
	
	handleConnection(client: any, ...args: any[]) {
		console.log('Usuario: conexion de cliente', client.id, args);
	}
	handleDisconnect(client: any) {
		console.log('disconnect', client.id);
	}
	
	@SubscribeMessage('crearUsuario')
	crear(cliente,usuarioAcrear){
		console.log("entrooo a crear")
			const usuarioAcrearse = this._usuarioService.crearUsuario(usuarioAcrear)
			//console.log("se creo",usuarioAcrear)
			return from (usuarioAcrear)
	}


	
	@SubscribeMessage('peticionUsuarioCliente')
	holaUsuario(client, data): Observable<WsResponse<number>> {
		console.log('Entro a cliente gateway',client.id);
		client.broadcast.emit('respuestaUsuario',data)
		console.log('Esto es dataaaaa: ',data , client.id)
		return data; // la peticion
	}


}
