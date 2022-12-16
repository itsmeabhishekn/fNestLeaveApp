import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpCheckinComponent } from './emp-checkin.component';

describe('EmpCheckinComponent', () => {
  let component: EmpCheckinComponent;
  let fixture: ComponentFixture<EmpCheckinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpCheckinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
