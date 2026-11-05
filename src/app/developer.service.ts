import { Injectable } from '@angular/core';
import { Developer } from './developer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DeveloperService {
  developers: Developer[] = [];

  constructor(private http: HttpClient) {
this.read();

  }
  read() {
    this.http.get<Developer[]>("https://api.siposm.hu/getDevelopers").subscribe(data => {
      this.developers = data.map(item => Object.assign(new Developer(), item))
    })}

  save() { localStorage.setItem("developer_DB", JSON.stringify(this.developers)) }

}



/* 1  this.read();
   this.save();
    read() {
   let jsonArray = JSON.parse(localStorage.getItem("developer_DB") ?? "[]")
   this.developer = Object.values(jsonArray).map(x => Object.assign(new Developer(), x))*/

/* 2 this.seed();
   this.save();
seed():void{
   let d= new Developer()
   let id= ""
   d.name= "Juliann"
   d.age= 44
   d.job= "Frontend"
   d.salary= 500000
   this.developer.push(d)
   

 
}*/
/* @NgModule({
  declarations: [App, List, Edit, Delete, Create],
  imports: [BrowserModule, AppRoutingModule,FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient() module tsbe kotni */
