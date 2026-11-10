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
