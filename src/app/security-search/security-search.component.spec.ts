import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritySearchComponent } from './security-search.component';

describe('SecuritySearchComponent', () => {
  let component: SecuritySearchComponent;
  let fixture: ComponentFixture<SecuritySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecuritySearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecuritySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
