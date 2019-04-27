import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from "./inicio.component";
import { InicioService } from "./inicio.service";



@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule

    ], 
    declarations:[
        InicioComponent
    ],
    providers:[InicioService]
})

export class InicioModule{}
