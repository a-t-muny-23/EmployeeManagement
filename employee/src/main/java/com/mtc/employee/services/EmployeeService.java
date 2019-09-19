package com.mtc.employee.services;

import com.mtc.employee.models.Employee;
import com.mtc.employee.repositories.EmployeeRepository;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;
import java.util.Set;

@Service
public class EmployeeService {

    //Injection field injection
    private final EmployeeRepository employeeRepository;

    //Constructor injection
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    //GET ALL EMPLOYEES
    public Collection<Employee> getEmployees(){
        return employeeRepository.findAll();
    }

    //GET A SINGLE EMPLOYEE - RETURN OPTIONAL
    public Optional<Employee> getEmployee(final Long id){
        return employeeRepository.findById(id);
    }

    //ADD EMPLOYEE
    public Employee addEmployee(final Employee employee){
        return employeeRepository.save(employee);
    }

    //UPDATE EMPLOYEE
    public Employee updateEmployee(final Long id, final Employee employee){
        Optional<Employee> employeeOptional = employeeRepository.findById(id);
        if (employeeOptional.isPresent()){
            Employee oldEmployee = employeeOptional.get();
            //oldEmployee = employee;
            oldEmployee.setEmpID(employee.getEmpID());
            oldEmployee.setFirstName(employee.getFirstName());
            oldEmployee.setMiddleName(employee.getMiddleName());
            oldEmployee.setLastName(employee.getLastName());
            oldEmployee.setIdNumber(employee.getIdNumber());
            oldEmployee.setPosition(employee.getPosition());
            oldEmployee.setSalary(employee.getSalary());

            return employeeRepository.save(oldEmployee);
        }

        return null;
    }


    //DELETE EMPLOYEE
    public void deleteEmployee(Employee employee){
        employeeRepository.delete(employee);
    }



}
