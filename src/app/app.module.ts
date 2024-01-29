import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule} from '@angular/platform-browser';
import { UserComponent } from './CRUD Angular/user.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.mdule';

@NgModule({
  declarations: [
  UserComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  CommonModule,
  AppRoutingModule 
  ],

  bootstrap: [UserComponent]
})
export class AppModule { }
