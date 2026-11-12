import { Injectable } from '@angular/core';
import { Developer } from './developer';
import { HttpClient } from '@angular/common/http';
import { StatisticService } from './statistic.service';

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
    })
  }

  save() { localStorage.setItem("developer_DB", JSON.stringify(this.developers)) }

  create(developer: Developer) {
    this.developers.push(developer);
  }

  delete(developer: Developer) {
    this.developers = this.developers.filter(x => x.name !== developer.name)
    this.save()
  }
  delete2(index: number) {
    this.developers.splice(index, 1)

  }
  getById(id: string): Developer | undefined {
    return this.developers.find(x => x.id === id)
  }

  update(developer: Developer): void {
    let idx = this.developers.findIndex(x => x.id === developer.id)
    this.developers[idx] = developer
    this.save()
  }

}


/* delete(developer: Developer): void {
    this.http.delete("https://api.siposm.hu/deleteDeveloper", { body: { id: developer.id } })
      .subscribe({
        next: (response) => {
          console.log("::SUCCESS::")
          console.log(response)
          // this.read()
          this.developers = this.developers.filter(x => x.id !== developer.id)
        },
        error: (error) => {
          console.log("::ERROR::")
          console.log(error)
        }
      })
  }
       this.http.delete("https://api.siposm.hu/deleteDeveloper", {
    //   headers: new HttpHeaders({"Content-Type": "application/json"}),
    //   body: {
    //     id: developer.id
    //   }
    // })

  update(developer: Developer): void {
    this.http.put("https://api.siposm.hu/updateDeveloper", developer).subscribe({
      next: (response) => {
        console.log("::SUCCESS::")
        console.log(response)
        // this.read()
        let index = this.developers.findIndex(x => x.id === developer.id)
        this.developers[index] = developer
      },
      error: (error) => {
        console.log("::ERROR::")
        console.log(error)
      }
      }
    )
  }*/


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
