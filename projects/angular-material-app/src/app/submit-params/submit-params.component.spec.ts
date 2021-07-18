import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitParamsComponent } from './submit-params.component';

describe('SubmitParamsComponent', () => {
  let component: SubmitParamsComponent;
  let fixture: ComponentFixture<SubmitParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitParamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
