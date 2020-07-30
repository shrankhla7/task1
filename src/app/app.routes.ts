import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

export const appRoutes : Routes = [
    {
        path : '',
        component: AdminLayoutComponent,
        children : [
            {
                path: 'labor',
                loadChildren: './labor/labor.module#LaborModule' 
            }
        ]
    }
]