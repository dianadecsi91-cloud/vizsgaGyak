import { Guid } from "guid-typescript";

export class Developer {

    id: string = Guid.create().toString()
    name: string = ""
    job: string = ""
    age: number|null = null
    salary: number|null = null
    image: string="" 

    getShortId(): string {
        
        return this.id.substring(0,5)
    }
    getFormattedSalary(): string {
        return this.salary!.toLocaleString("hu-HU", {
            style: "currency",
            currency: "HUF",
            maximumFractionDigits: 0
        })
    }
}
