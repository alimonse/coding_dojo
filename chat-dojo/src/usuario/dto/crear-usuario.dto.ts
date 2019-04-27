import { IsString, IsInt, IsNotEmpty, IsOptional} from "class-validator";

export class CrearUsuarioDto{
   
    @IsNotEmpty()
    @IsString()
    userName: string

    @IsNotEmpty()
    @IsString()
    sala: number;

    @IsOptional()
    fecha: string;
    
    @IsOptional()
    mensaje: string
    
}






