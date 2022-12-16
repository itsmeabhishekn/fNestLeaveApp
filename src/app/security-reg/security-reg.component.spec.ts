import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityRegComponent } from './security-reg.component';

describe('SecurityRegComponent', () => {
  let component: SecurityRegComponent;
  let fixture: ComponentFixture<SecurityRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
