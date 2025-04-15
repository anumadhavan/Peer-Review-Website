import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-management',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit {
  employees: any[] = [];
  newEmployee = { name: '', email: '', role: 'employee' };

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getAll().subscribe((result) => {
      this.employees = result;
    });
  }

  addEmployee() {
    this.employeeService.create(this.newEmployee).subscribe(() => {
      this.newEmployee = { name: '', email: '', role: 'employee' };
      this.loadEmployees();
    });
  }
}
