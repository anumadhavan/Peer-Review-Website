import { Routes } from '@angular/router';
import { EmployeeManagementComponent } from './admin/employee-management/employee-management.component';
import { ReviewManagementComponent } from './admin/review-management/review-management.component';
import { ReviewListComponent } from './employee/review-list/review-list.component';
import { FeedbackFormComponent } from './employee/feedback-form/feedback-form.component';
import { LoginComponent } from './auth/login/login.component';
import { adminGuard } from './guard/admin.guard';
import { employeeGuard } from './guard/employee.guard';
import { LayoutComponent } from './shared/layout/layout.component';

export const routes: Routes = [
    {
        path:'admin',
        canActivate:[adminGuard],
        component:LayoutComponent,
        children:[
            {
                path:"employees",
                component:EmployeeManagementComponent
            },
            {
                path:"reviews",
                component:ReviewManagementComponent
            },
            {
                path:'',
                redirectTo:'employees',
                pathMatch:'full'
            }
        ]
    },
    {
        path:'employee',
        canActivate:[employeeGuard],
        component:LayoutComponent,
        children:[
            {
                path:"reviews",
                component:ReviewListComponent
            },
            {
                path:"feedback/:id",
                component:FeedbackFormComponent
            },
            {
                path:'',
                redirectTo:'reviews',
                pathMatch:'full'
            }
        ]
    },
   
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:"",
        redirectTo:"login",
        pathMatch:'full'

    }
];
