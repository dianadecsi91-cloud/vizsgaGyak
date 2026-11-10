import { Component } from '@angular/core';
import { Developer } from '../developer';
import { DeveloperService } from '../developer.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  developer: Developer= new Developer()
  devId: string = ""
  original: Developer | null = null
  selected: Developer = new Developer()

  constructor(public service: DeveloperService, private http: HttpClient, public authService: AuthService){

  }
delete2(index: number){
  this.service.delete2(index)
}


 openEdit(item: Developer) {
    this.original = item
    this.selected = Object.assign(new Developer(), item) // másolat
  }

  saveEdit() {
    if (this.original) {
      Object.assign(this.original, this.selected)
      this.service.save()
    }
  }



/*alertId(developer: Developer): void {
  alert(developer.id);alertId(item)
}*/
  
}
