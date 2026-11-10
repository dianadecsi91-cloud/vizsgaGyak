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

  constructor(public service: DeveloperService, private http: HttpClient, public authService: AuthService){

  }
delete2(index: number){
  this.service.delete2(index)
}
  
}
