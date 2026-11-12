import { Injectable } from '@angular/core';
import { DeveloperService } from './developer.service';
import { Developer } from './developer';

@Injectable({
  providedIn: 'root',
})
export class StatisticService {
   dbString: string = "dev_DB"
   

  constructor(private developerService: DeveloperService) { }

  get developers(): Developer[] {
    return this.developerService.developers
  }

  averageSalary(): number {
    if (this.developers.length === 0) return 0

    let sum = this.developers.map(x => x.salary!).reduce((a, b) => a + b, 0)
    let avg = sum / this.developers.length
    return Math.round(avg)
  }

  oldestDeveloper(): Developer | null {
    if (this.developers.length === 0) return null

    return this.developers.reduce((a, b) => a.age! < b.age! ? b : a)
  }

  highestEarning(): Developer | null {
    if (this.developers.length === 0) return null

    return this.developers.reduce((a, b) => a.salary! < b.salary! ? b : a)
  }

  lowestEarning(): Developer | null {
    if (this.developers.length === 0) return null

    return this.developers.reduce((a, b) => a.salary! < b.salary! ? a : b)
  }

  /*mostSkilled(): Developer | null {
    if (this.developers.length === 0) return null

    return [...this.developers].sort((a, b) => b.skills.length - a.skills.length)[0]
  }*/
}
/* averageSalary(): number {
    let sum = this.developers.map(x => x.salary!).reduce((a, b) => a + b)
    let avg = sum / this.developers.length
    this.avgSalary = avg
    return Math.round(avg)
  }

  oldestDeveloper(): Developer {
    return this.developers.reduce((a,b) => a.age! < b.age! ? b : a)
  }

  highestEarning(): Developer {
    return this.developers.reduce((a,b) => a.salary! < b.salary! ? b : a)
  }

  lowestEarning(): Developer {
    return this.developers.reduce((a,b) => a.salary! < b.salary! ? a : b)
  }

  mostSkilled(): Developer{
    return [...this.developers].sort((a,b) => b.skills.length - a.skills.length)[0]
  }

  alertId(developer: Developer): void {
    this.devId = developer.id
    setTimeout(() => {
      this.devId = ""
    }, 5000)
  }*/

