import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestViewsComponent } from './guest-views.component';

describe('GuestViewsComponent', () => {
  let component: GuestViewsComponent;
  let fixture: ComponentFixture<GuestViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestViewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
