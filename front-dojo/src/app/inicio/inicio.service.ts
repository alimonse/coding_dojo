import { Injectable } from "@angular/core";
import io from 'socket.io-client';
import { from } from "rxjs";



@Injectable()

export class InicioService{

    serverSocket = io('localhost:3002/chat')

    constructor(){}
    
    
    crearUsuario(usuarioACrear){
        
        const promesaCrearUsuario= new Promise((resolve)=>{
            this.serverSocket.emit('crearUsuario',usuarioACrear,(usuarioCreado =>{
                resolve(usuarioCreado)
            }))
        })
        return from (promesaCrearUsuario)
    }



}
