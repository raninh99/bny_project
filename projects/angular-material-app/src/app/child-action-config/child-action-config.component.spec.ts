import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildActionConfigComponent } from './child-action-config.component';

describe('ChildActionConfigComponent', () => {
  let component: ChildActionConfigComponent;
  let fixture: ComponentFixture<ChildActionConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildActionConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildActionConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
