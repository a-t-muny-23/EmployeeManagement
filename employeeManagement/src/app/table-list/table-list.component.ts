import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'app/services/employee.service';
import { Employee } from 'app/models/Employee';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  em: Employee
  employees: Employee[]
  constructor(private emService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees()
  }

  getEmployees(){
    this.emService.getEmployees().subscribe(e => {
      this.employees = e
    })
  }

  delete(id){
    this.emService.getEmployee(id).subscribe(e => {
      this.em = e
    })
    alert('Are you sure you want to delete this employee: '+ this.em.lastName+" "+ this.em.firstName)
    this.emService.deleteEmployee(id).subscribe(e=>{
      this.getEmployees()
    })
  }

}
