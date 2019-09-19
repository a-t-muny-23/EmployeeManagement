import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl:string = "http://localhost:8080/employees/"
  constructor(private http: HttpClient) { }

  //Get All Employees
  getEmployees(): Observable<any>{
    return this.http.get(this.baseUrl)
  }

  //Get a single Employee
  getEmployee(id:number): Observable<any>{
    return this.http.get(this.baseUrl+id)
  }

  //Add Employee
  addEmployee(e): Observable<any>{
    return this.http.post(this.baseUrl, e)
  }

  //Update
  updateEmployee(id, e): Observable<any>{
    return this.http.put(this.baseUrl+id, e)
  }

  //Delete
  deleteEmployee(id): Observable<any>{
    return this.http.delete(this.baseUrl+id)
  }

}
