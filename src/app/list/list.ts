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
  /*buttonDisabled(): boolean {
    if(this.developer.name.length < 5) return true
    if(this.developer.job.length < 5) return true
    if(this.developer.age! < 18) return true
    if(this.developer.salary! < 50000) return true
    return false
  }
    check(): void {
    this.tipCounter++
    if ( this.tip ==this.generatedNumber) {
      // játék vége
      this.guesses.push(new GameItem(this.tip, "JÁTÉK VÉGE"))
      this.endOfGame = true
    } else if (this.tip >this.generatedNumber ) {
      // nagyobbra gondoltam
      this.guesses.push(new GameItem(this.tip, "NAGYOBBRA GONDOLTAM"))
    } else {
      // kisebbre gondoltam
      this.guesses.push(new GameItem(this.tip, "KISEBBRE GONDOLTAM"))
    }
  }
    
  ngclass szinezés: <tr *ngFor="let dev of service.developers; index as i" class="align-middle">
            <td>
                <span class="badge rounded-pill ms-2" [ngClass]="dev.salary! > getAvgSalaryFromService ? 'bg-success' : 'bg-danger'">
                    {{ i+1 }}
                     <span
                                class="badge"
                                [ngClass]="item.watched ? 'text-bg-success' : 'text-bg-warning'">
                                {{ item.watched ? 'Megnézve' : 'Még nem láttam' }}
                            </span>
                </span>*/
}
