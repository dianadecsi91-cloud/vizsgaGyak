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

