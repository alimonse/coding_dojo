import { Module } from "@nestjs/common";
import { ClienteGateway } from "../cliente-gateway/cliente.gateway";
import { OperadoraGateway } from "./operadora.gateway";
import { UsuarioModule } from "usuario/usuario.module";

@Module({
    imports:[UsuarioModule],
    providers:[ClienteGateway]
    
})

export class WebSocketModule{}
