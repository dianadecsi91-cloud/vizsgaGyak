import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { List } from './list/list';
import { Edit } from './edit/edit';
import { Delete } from './delete/delete';
import { Create } from './create/create';
import { FormsModule } from '@angular/forms';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Login } from './login/login';
import { Navbar } from './navbar/navbar';
import { Stat } from './stat/stat';

@NgModule({
  declarations: [App, List, Edit, Delete, Create, Login, Navbar, Stat],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
