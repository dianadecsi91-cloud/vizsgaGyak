import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DeveloperService } from '../developer.service';
import { Developer } from '../developer';

@Component({
  selector: 'app-delete',
  standalone: false,
  templateUrl: './delete.html',
  styleUrl: './delete.css',
})
export class Delete {

  developer: Developer= new Developer()
  constructor(public authService: AuthService, public router: Router,public developerService: DeveloperService){

  }
  delete(){
    this.developerService.delete(this.developer)
    this.router.navigateByUrl("list")
  }
}

/*developer: Developer = new Developer()
  developers: Developer[] = []

  constructor(private router: Router) {
    this.read()
  }

  read(): void {
    let jsonArray = JSON.parse(localStorage.getItem("dev_DB") ?? "[]")
    this.developers = Object.values(jsonArray).map(x => Object.assign(new Developer(), x))
  }

  save(): void {
    localStorage.setItem("dev_DB", JSON.stringify(this.developers))
  }

  delete(): void {
    this.developers = this.developers.filter(x => x.id !== this.developer.id)
    this.save()
    this.router.navigateByUrl("list")
  }*/
