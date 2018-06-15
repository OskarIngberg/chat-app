import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { routes } from './routes/routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/panels/header/header.component';
import { SearchComponent } from './components/panels/header/search/search.component';
import { InfoComponent } from './components/panels/header/info/info.component';
import { LeftPanelComponent } from './components/panels/left-panel/left-panel.component';
import { RightPanelComponent } from './components/panels/right-panel/right-panel.component';
import { MessagesPanelComponent } from './components/panels/messages-panel/messages-panel.component';

import { AddChatComponent } from './components/add-chat/add-chat.component';
import { GroupChatComponent } from './components/group-chat/group-chat.component';
import { MessageComponent } from './components/message/message.component';
import { RemoveModalComponent } from './components/modals/remove-modal/remove-modal.component';

import { AddMessageService } from './services/add-message/add-message.service';
import { GroupChatService } from './services/group-chat/group-chat.service';
import { HeightSetterService } from './services/height-setter/height-setter.service';
import { UserService } from './services/user/user.service';
import { ModalsService } from './services/modals/modals.service';
import { ChatService } from './services/chat-service/chat-service.service';
import { UserlistModalComponent } from './components/modals/userlist-modal/userlist-modal.component';
import { UserListComponent } from './pages/user-list/user-list.component';

@NgModule({
  declarations: [
    AddChatComponent,
    AppComponent,
    GroupChatComponent,
    HeaderComponent,
    InfoComponent,
    LeftPanelComponent,
    MessageComponent,
    MessagesPanelComponent,
    RightPanelComponent,
    SearchComponent,
    RemoveModalComponent,
    UserlistModalComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AddMessageService,
    ChatService,
    GroupChatService,
    HeightSetterService,
    ModalsService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
