import { Routes } from '@angular/router';

import { EmployeeComponent } from './labor/employee/employee.component';
import { RoleComponent } from './labor/role/role.component';
import { LaborComponent } from './labor/labor.component';
import { ADPPayrollComponent } from './adppayroll/adppayroll.component';
import { PayrollComponent } from './payroll/payroll.component';
import { CashoutComponent } from './cashout/cashout.component';

export const LaborRoutes: Routes = [{

    path: '',
    component : LaborComponent,
    children: [ {
      path: 'employee',
      component: EmployeeComponent
  },
  {
    path: 'role',
    component: RoleComponent
},
{
    path: 'cashout',
    component: CashoutComponent
},
{
    path: 'ADPPayroll',
    component: ADPPayrollComponent
},
{
    path: 'payroll',
    component: PayrollComponent
},
]
}];