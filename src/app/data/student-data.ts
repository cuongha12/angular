import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class StudentData {
    id?: Number
    code?: string;
    name?: string;

    address?: string;
    gender?: string;;

}
