import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

import { AddMessageService } from './services/add-message/add-message.service';
import { GroupChatService } from './services/group-chat/group-chat.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    InfoComponent,
    LeftPanelComponent,
    RightPanelComponent,
    AddChatComponent,
    MessagesPanelComponent,
    GroupChatComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AddMessageService,
    GroupChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
