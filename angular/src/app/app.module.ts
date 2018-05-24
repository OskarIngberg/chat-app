import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './header/search/search.component';
import { InfoComponent } from './header/info/info.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { AddChatComponent } from './add-chat/add-chat.component';
import { MessagesPanelComponent } from './messages-panel/messages-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    InfoComponent,
    LeftPanelComponent,
    RightPanelComponent,
    AddChatComponent,
    MessagesPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
