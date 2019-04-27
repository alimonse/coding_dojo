import { Entity, ObjectIdColumn, ObjectID, OneToOne, ManyToOne, OneToMany, Column } from "typeorm";

@Entity()
export class UsuarioEntity {

    @ObjectIdColumn()
    id?: ObjectID;

    @Column()
    userName: string;

    @Column()
    sala: number; 

    @Column()
    fecha: string;

    @Column()
    mensaje: string
  

}

