import {ChangeDetectionStrategy, Component, forwardRef, input, InputSignal, ViewEncapsulation} from '@angular/core';
import {InputType} from "../../enums/input-type.enum";
import {ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';

/**
 * @author Bruno Ramirez
 */
@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './form-input.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputComponent),
      multi: true,
    },
  ],
})
export class FormInputComponent implements ControlValueAccessor {
  public description: InputSignal<string> = input<string>('');
  public formControlName: InputSignal<any> = input.required<any>();
  public iconPath: InputSignal<string> = input<string>('');
  public name: InputSignal<string> = input.required<string>();
  public placeholder: InputSignal<string> = input.required<string>();
  public type: InputSignal<InputType> = input.required<InputType>();

  public disabled: boolean = false;
  public value: any = '';
  public onChange: any = () => {};
  public onTouched: any = () => {};

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public writeValue(value: any): void {
    this.value = value;
  }

  public handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    console.log('this.value', this.value);
    this.onChange(target.value);
  }

  public handleBlur(): void {
    this.onTouched();
  }
}
