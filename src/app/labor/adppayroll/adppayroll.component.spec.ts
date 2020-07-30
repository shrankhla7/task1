import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ADPPayrollComponent } from './adppayroll.component';

describe('ADPPayrollComponent', () => {
  let component: ADPPayrollComponent;
  let fixture: ComponentFixture<ADPPayrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ADPPayrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ADPPayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
