import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveStatusEmpComponent } from './leave-status-emp.component';

describe('LeaveStatusEmpComponent', () => {
  let component: LeaveStatusEmpComponent;
  let fixture: ComponentFixture<LeaveStatusEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveStatusEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveStatusEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
