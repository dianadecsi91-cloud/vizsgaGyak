import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { DeveloperService } from '../developer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Developer } from '../developer';

@Component({
  selector: 'app-edit',
  standalone: false,
  templateUrl: './edit.html',
  styleUrl: './edit.css',
})
export class Edit {
   developer: Developer = new Developer()

  constructor(public route: ActivatedRoute,public router: Router, public service: DeveloperService,public authService: AuthService) {
    route.params.subscribe(x => {
      let id: string = x['id'] // asszociatív tömb jelölés ["azonosito"] -> 123456

      let result: Developer | undefined = this.service.getById(id)
      if (result === undefined) this.router.navigateByUrl("list")
      else this.developer = Object.assign(new Developer(), result)
    })
  }

  update(): void {
    this.service.update(this.developer)
    this.router.navigateByUrl("list")
  }
}


/*developer: Developer = new Developer()
  developers: Developer[] = []

  constructor(private router: Router) {
    this.read()
  }

  update(): void {
    let idx = this.developers.findIndex(x => x.id === this.developer.id)
    this.developers[idx] = this.developer

    this.save()

    this.router.navigateByUrl("list")
  }

  read(): void {
    let jsonArray = JSON.parse(localStorage.getItem("dev_DB") ?? "[]")
    this.developers = Object.values(jsonArray).map(x => Object.assign(new Developer(), x))
  }

  save(): void {
    localStorage.setItem("dev_DB", JSON.stringify(this.developers))
  }
}
  

edit2 developer: Developer = new Developer()
  developers: Developer[] = []

  constructor(private route: ActivatedRoute, private router: Router) {
    route.params.subscribe(x => {
      let id: string = x['id'] // asszociatív tömb jelölés ["azonosito"] -> 123456

      this.read()

      let result: Developer | undefined = this.developers.find(x => x.id === id)
      if (result === undefined) {
        this.router.navigateByUrl("list")
      } else {
        this.developer = result
      }
    })
  }

  update(): void {
    let idx = this.developers.findIndex(x => x.id === this.developer.id)
    this.developers[idx] = this.developer

    this.save()

    this.router.navigateByUrl("list")
  }

  read(): void {
    let jsonArray = JSON.parse(localStorage.getItem("dev_DB") ?? "[]")
    this.developers = Object.values(jsonArray).map(x => Object.assign(new Developer(), x))
  }

  save(): void {
    localStorage.setItem("dev_DB", JSON.stringify(this.developers))
  }
}
  
sima read developers: Developer[] = []

  constructor() {
    this.seed()
     localStorage.setItem("dev_DB", JSON.stringify(this.developers))
  }

  

  seed(): void {
    let d = new Developer()
    d.name = "Gipsz Jakab"
    d.salary = 3450000
    d.job = "Frontend developer"
    this.developers.push(d)

    d = new Developer()
    d.name = "Jakabos Péter"
    d.salary = 255000
    d.job = "Frontend developer"
    this.developers.push(d)
*/
