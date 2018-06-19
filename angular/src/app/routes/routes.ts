import { Routes } from '@angular/router';

import { AddChatComponent } from 'src/app/pages/add-chat/add-chat.component';
import { ChatComponent } from 'src/app/pages/chat/chat.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'chat',
        pathMatch: 'full'
    },
    {
        path: 'chat',
        component: ChatComponent
    },
    {
        path: 'userlist',
        component: AddChatComponent
    }
];

export { routes };