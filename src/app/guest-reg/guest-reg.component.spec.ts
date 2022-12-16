import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestRegComponent } from './guest-reg.component';

describe('GuestRegComponent', () => {
  let component: GuestRegComponent;
  let fixture: ComponentFixture<GuestRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
