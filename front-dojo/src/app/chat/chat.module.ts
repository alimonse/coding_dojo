import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatService } from "./chat.service";



@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ], 
    declarations:[
       
    ],
    providers:[ChatService]
})

export class ChatModule{}
