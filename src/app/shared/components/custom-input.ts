import { AbstractControl, ControlValueAccessor } from '@angular/forms';

export abstract class CustomInput implements ControlValueAccessor {
  public val: any;
  public disabled: boolean = false;

  public onChange = (value: any) => {};
  public onTouched = () => {};

  public set value(value: any) {
    if (value && this.val === value) {
      return;
    }

    this.val = value;
    this.onChange(value);
    this.onTouched();
  }

  public writeValue(obj: any): any {
    this.value = obj;
    return obj;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public validateInput(input: AbstractControl | null): boolean | null {
    if (input === null || (!input.dirty && input.untouched)) return null;

    return input.valid && input.dirty && input.touched;
  }

  public showInputErrors(input: AbstractControl | null): boolean | null {
    if (input === null) return null;

    return input.invalid && input.errors && input.dirty && input.touched;
  }
}
