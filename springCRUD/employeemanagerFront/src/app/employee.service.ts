import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Employee } from "./employee";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn :'root'
})
export class EmployeeService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http : HttpClient){}
    // return an Employees tab
    public getEmployees() : Observable<Employee[]>{
        return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/all`);
    }

    //add an employee
    public addEmployees(employee :Employee) : Observable<Employee[]>{
        return this.http.post<Employee[]>(`${this.apiServerUrl}/employee/add`,employee);
    }

    //update an employee
    public updateEmployees(employee :Employee) : Observable<Employee[]>{
        return this.http.put<Employee[]>(`${this.apiServerUrl}/employee/update`,employee);
    }

    //delete an employee
    public deleteEmployees(employeeId :number) : Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`);
    }
}