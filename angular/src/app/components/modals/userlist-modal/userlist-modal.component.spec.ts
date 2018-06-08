import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistModalComponent } from './userlist-modal.component';

describe('UserlistModalComponent', () => {
  let component: UserlistModalComponent;
  let fixture: ComponentFixture<UserlistModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserlistModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlistModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
