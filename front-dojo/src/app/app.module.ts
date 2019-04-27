import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ChatComponent } from './chat/chat.component';
import { RutaNoEncontradaComponent } from './ruta-no-encontrada/ruta-no-encontrada';
import { InicioService } from './inicio/inicio.service';
import { ChatService } from './chat/chat.service';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ChatComponent,
    RutaNoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [InicioService,ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
