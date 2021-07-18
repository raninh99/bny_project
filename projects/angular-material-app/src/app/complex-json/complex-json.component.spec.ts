import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexJsonComponent } from './complex-json.component';

describe('ComplexJsonComponent', () => {
  let component: ComplexJsonComponent;
  let fixture: ComponentFixture<ComplexJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplexJsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
