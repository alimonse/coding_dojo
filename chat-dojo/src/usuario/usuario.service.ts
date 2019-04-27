import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UsuarioEntity } from "./usuario.entity";


@Injectable()

export class UsuarioService{

    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly _usuarioRepository:Repository<UsuarioEntity>
    ){}

    obtenerTodos(skip:number, limit: number){
        return this._usuarioRepository.find({
            order:{
                id: "DESC"
            },
            skip: skip,
            take: limit
        })
    }

    obtenerUno(id:number):Promise<UsuarioEntity>
    {
        return this._usuarioRepository.findOne(id)
    }


    obtenerUsuariosSala(sala:number){
        return this._usuarioRepository.find({
            where:{
                sala:sala
            }
        })
    }

    
    obtenerUsuarioNombre(nombre:string){
        return this._usuarioRepository.findOne({
            where:{
                nombre:nombre
            }
        })
    }

    crearUsuario(usuarioAcrear:UsuarioEntity){
        
        return this._usuarioRepository.save(usuarioAcrear)

    }

    totalUsuarios(){
        return this._usuarioRepository.count()
    }

}

/* 
async buscarTodos(): Promise<AreaEntity[]>{
    console.log("aquiii....",this._arearRepository.find())
    return await this._arearRepository.find()
}

async crear(area: CrearAreaDto): Promise<AreaEntity>{
    const areaCreada = await this._arearRepository.create(area)
    return this._arearRepository.save(areaCreada)
}

async buscarPorId(id:number): Promise<AreaEntity>{
    return await this._arearRepository.findOne(id)
}

 async buscarPorId(id:number): Promise<AreaEntity>{
    return await this._arearRepository.findOne(id,{relations:["hospitalId"]})
}



async editar(id:number, area: EditarAreaDto): Promise<AreaEntity>{
    await this._arearRepository.update(id,area)
    return this.buscarPorId(id)
}

*/
