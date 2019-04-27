import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InicioService } from './inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
    private readonly _inicioService : InicioService
  ) { }

  ngOnInit() {

    
  
  }

  /* @ObjectIdColumn()
    id?: ObjectID;

    @Column()
    userName: string;

    @Column()
    sala: number; 

    @Column()
    fecha: string;

    @Column()
    mensaje: string */

  cargarNombre(nombre){ 
    const nombreUsuario = nombre
    const fechaU = new Date( )  
    const usuarioCrear = {
      userName: nombre,
      sala: "5",
      fecha: fechaU,
    }

    console.log("ENTROOO FRONT CARGAR NOMBRE", ) 


    this._inicioService.crearUsuario(usuarioCrear).subscribe(resp=>{
      console.log("see creo",resp)
    })

    this._router.navigate(["/chat"]) 
  }  
  

}
