import { Guid } from "guid-typescript";

export class Developer {

    id: string = Guid.create().toString();
    name: string = ""
    job: string = ""
    age: number|null = null
    salary: number|null = null
}
