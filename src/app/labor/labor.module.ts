import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './labor/employee/employee.component';
import { RoleComponent } from './labor/role/role.component';
import { RouterModule } from '@angular/router';
import { LaborRoutes } from './labor.route';
import { LaborComponent } from './labor/labor.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CashoutComponent } from './cashout/cashout.component';
import { ADPPayrollComponent } from './adppayroll/adppayroll.component';
import { PayrollComponent } from './payroll/payroll.component';
import { Daterangepicker } from 'ng2-daterangepicker';
import { OrderrByPipe } from './labor/employee/orderby.pipe';


@NgModule({
  declarations: [EmployeeComponent, RoleComponent, LaborComponent, CashoutComponent, ADPPayrollComponent, PayrollComponent, OrderrByPipe],
  imports: [
    CommonModule,
    RouterModule.forChild(LaborRoutes),
    NgbModule,
    Daterangepicker
  ]
})
export class LaborModule { }
