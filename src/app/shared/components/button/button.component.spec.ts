import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { ButtonType } from './button-type.enum';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not return anything on click', () => {
    expect(component.emitClick()).toBeFalsy();
  });

  it('should have primary type if no explicit ButtonType were provided', () => {
    expect(component.buttonType).toBe(ButtonType.Primary);
  });
});
