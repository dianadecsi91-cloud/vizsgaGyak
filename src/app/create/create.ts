import { Component } from '@angular/core';
import { Developer } from '../developer';
import { Router } from '@angular/router';
import { DeveloperService } from '../developer.service';

@Component({
  selector: 'app-create',
  standalone: false,
  templateUrl: './create.html',
  styleUrl: './create.css',
})
export class Create {
  developer: Developer = new Developer();
  constructor(private router: Router, public service: DeveloperService) {

  }

  create(): void {
    this.service.create(this.developer)
    this.router.navigateByUrl("list");
  }
  
}

/* developer: Developer = new Developer()

  constructor(private router: Router) { }

  create(): void {
    // load - betöltés
    let jsonArray = JSON.parse(localStorage.getItem("dev_DB") ?? "[]")
    let developers: Developer[] = Object.values(jsonArray).map(x => Object.assign(new Developer(), x))

    // append - hozzáfűzés
    developers.push(this.developer)

    // save - mentés
    localStorage.setItem("dev_DB", JSON.stringify(developers))

    // redirect - átirányítás
    this.router.navigateByUrl("list")
  }*/