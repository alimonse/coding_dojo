import { Injectable } from "@angular/core";
import io from 'socket.io-client';
import { from } from "rxjs";



@Injectable()

export class ChatService{

    serverSocket = io('localhost:3002/chat')

    constructor(){}
    
    obtenerTodos(skip:number,limit:number){
        const skipYLimit={skip,limit} 
        const promesaObtenerTodos = new Promise ((resolve)=>{
        this.serverSocket.emit('obtenerTodos',skipYLimit,(usuarios=>{
            resolve(usuarios)
        }))
        })
        return from(promesaObtenerTodos)
    }

    obtenerUno(id){
    const promesaObtenerUno = new Promise((resolve)=>{
        this.serverSocket.emit('obtenerUn',id,(area=>{
            resolve(area)
        }))
    })
    return from(promesaObtenerUno)
    }

    crearUsuario(usuarioACrear){
        const promesaCrearUsuario= new Promise((resolve)=>{
            this.serverSocket.emit('crearUsuario',usuarioACrear,(usuarioCreado =>{
                resolve(usuarioCreado)
            }))
        })
        return from (promesaCrearUsuario)
    }

    








}
