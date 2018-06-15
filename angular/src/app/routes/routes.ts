import { Routes } from '@angular/router';

import { AppComponent } from 'src/app/app.component';
import { UserListComponent } from 'src/app/pages/user-list/user-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'chat',
        pathMatch: 'full'
    },
    {
        path: 'chat',
        component: AppComponent
    },
    {
        path: 'userList',
        component: UserListComponent
    }
];

export { routes };