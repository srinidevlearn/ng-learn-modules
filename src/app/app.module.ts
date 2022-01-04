import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UserregisterComponent } from './components/userregister/userregister.component';
import { UserupdateComponent } from './components/userupdate/userupdate.component';
import {HttpClientModule} from '@angular/common/http';
import { UserresolverResolver } from './resolver/userresolver.resolver';
import { UserserviceService } from './services/userservice.service';
@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UserregisterComponent,
    UserupdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [UserresolverResolver,UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
