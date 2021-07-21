import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildConfigComponent } from './child-config.component';

describe('ChildConfigComponent', () => {
  let component: ChildConfigComponent;
  let fixture: ComponentFixture<ChildConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
