import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeeService } from 'app/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  employeeForm: FormGroup
  constructor(private emService: EmployeeService, private router: Router) { }

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
  }

  addEmployee(){
    this.emService.addEmployee(this.employeeForm.value).subscribe(e =>{
      this.router.navigate(["/employees"])
    })
  }

}
