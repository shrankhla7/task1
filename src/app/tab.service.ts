import { Injectable } from '@angular/core';
import { ITab } from './tab.model';
 
@Injectable({
  providedIn: 'root',
})
export class TabService {
  tabs: ITab[] = [];
  tabOptions: ITab[] = [
      { name: 'Employee', url: '/labor/employee' }, 
      { name: 'Role',   url: '/labor/role' },
      { name: 'Cashout',   url: '/labor/cashout' },
      { name: 'ADP Payroll',   url: '/labor/ADPPayroll' },
      { name: 'Payroll',   url: '/labor/payroll' },
    ];
 
  constructor() {}

  getTabOptionByUrl(url: string): ITab[] {
  return this.tabOptions;
}
}