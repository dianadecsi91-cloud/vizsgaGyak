import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { List } from './list/list';
import { Create } from './create/create';
import { Delete } from './delete/delete';
import { Edit } from './edit/edit';
import { Login } from './login/login';
import { Navbar } from './navbar/navbar';

const routes: Routes = [
   {path:"navbar", component: Navbar},
  {path: "list" , component: List},
  {path: "create", component: Create},
  {path: "delete", component: Delete},
  {path: "edit", component: Edit},
  {path: "login", component: Login},
  
 {path: "", redirectTo: "list", pathMatch: "full"},
   {path: "**", redirectTo: "list", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
