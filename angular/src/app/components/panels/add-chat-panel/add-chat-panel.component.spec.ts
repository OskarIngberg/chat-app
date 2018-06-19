import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChatPanelComponent } from './add-chat-panel.component';

describe('AddChatComponent', () => {
  let component: AddChatPanelComponent;
  let fixture: ComponentFixture<AddChatPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChatPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChatPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
