import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputeComponent } from './compute.component';

describe('ComputeComponent', () => {
  let component: ComputeComponent;
  let fixture: ComponentFixture<ComputeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComputeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return 0 if the input is negative', () => {
    const result = component.compute(-1);
    expect(result).toBe(0);
  });
  it('should add 1 if the input is positive', () => {
    const result = component.compute(1);
    expect(result).toBe(2);
  });
});
