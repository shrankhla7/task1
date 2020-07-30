import { Component, OnInit } from '@angular/core';

export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  // icon: string;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  type?: string;
  children?: ChildrenItems[];
}

export let ROUTES: RouteInfo[] = [];
const ROUTES_LIST : RouteInfo[] = [
  {
    path: '/restaurant',
    title: 'Restaurant',
    type: 'link'
},
{
    path: '/reports',
    title: 'Reports',
    type: 'sub',
    children: [
      { path: '/sales', title: 'Sales' },
      { path: '/labor', title: 'Labor', type : 'sub',
      children : [
        {path : '/employee', title: 'Employee'},
        {path : '/role', title: 'Role'}
      ]
     },
      { path: '/comp', title: 'Comp' },
      { path: '/products', title: 'Products' }
  ]
}
]

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  constructor() { }


  ngOnInit() {
    this.menuItems = ROUTES_LIST;
  }
}
