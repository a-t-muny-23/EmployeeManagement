package com.mtc.employee.controllers;

import com.mtc.employee.models.Employee;
import com.mtc.employee.services.EmployeeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("employees")
@CrossOrigin("http://localhost:4200")
public class EmployeeController {

    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping
    public Collection<Employee> getEmployees(){
        return employeeService.getEmployees();
    }

    @PostMapping
    public Employee addEmployee(@RequestBody final Employee em){
        return employeeService.addEmployee(em);
    }

    @GetMapping("{id}")
    public ResponseEntity<Employee> getEmployee(@PathVariable final Long id){
        Optional<Employee> employeeOptional = employeeService.getEmployee(id);
        if (employeeOptional.isPresent()){
            return ResponseEntity.ok(employeeOptional.get());
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable final Long id,@RequestBody final Employee em){
        Optional<Employee> employeeOptional = employeeService.getEmployee(id);

        if (employeeOptional.isPresent()){
            return ResponseEntity.ok(employeeService.updateEmployee(id,em));
        }

        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Object> deleteEmployee(@PathVariable final Long id){
        Optional<Employee> employeeOptional = employeeService.getEmployee(id);
        if (employeeOptional.isPresent()){
            employeeService.deleteEmployee(employeeOptional.get());
            return ResponseEntity.ok().build();
        }

        return ResponseEntity.notFound().build();
    }
}
