import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinViewComponent } from './checkin-view.component';

describe('CheckinViewComponent', () => {
  let component: CheckinViewComponent;
  let fixture: ComponentFixture<CheckinViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckinViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckinViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
