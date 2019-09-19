import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeeService } from 'app/services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from 'app/models/Employee';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  em:Employee
  employeeForm: FormGroup
  constructor(private emService: EmployeeService, private router: Router, private actRo: ActivatedRoute) { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      empID: new FormControl(),
      firstName: new FormControl(),
      middleName: new FormControl(),
      lastName: new FormControl(),
      idNumber: new FormControl(),
      salary: new FormControl(),
      position: new FormControl()
    })

    this.getEmployee()
  }

  getEmployee(){
    this.actRo.params.subscribe(p => {
      this.emService.getEmployee(p.id).subscribe(x=>{
        this.em = x
      })
    });
    
  }

  updateEmployee(id){
    this.emService.updateEmployee(id, this.employeeForm.value).subscribe(e =>{
      this.router.navigate(["/employees"])
    })
  }

}
