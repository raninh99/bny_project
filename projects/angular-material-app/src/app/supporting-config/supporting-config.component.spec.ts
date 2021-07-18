import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportingConfigComponent } from './supporting-config.component';

describe('SupportingConfigComponent', () => {
  let component: SupportingConfigComponent;
  let fixture: ComponentFixture<SupportingConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportingConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportingConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
