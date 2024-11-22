import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {ValidationErrors} from '@angular/forms';
import {EMPTY_STRING} from '../constants/constants';

@Directive({
  selector: '[formErrorLabel]',
  standalone: true,
})
export class FormErrorLabelDirective {
  private _htmlElement: HTMLElement;
  private _errors: ValidationErrors | null | undefined;
  private _errorMessages: Record<string, (error: any) => string> = {
    required: () => 'This field is required',
    email: () => 'Invalid email format',
  };

  @Input()
  public set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    this._setErrorMessage();
  }

  constructor(private _elementRef: ElementRef<HTMLElement>) {
    this._htmlElement = _elementRef.nativeElement;
  }

  private _setErrorMessage(): void {
    if (!this._errors) {
      this._htmlElement.innerText = EMPTY_STRING;
      return;
    }

    const errorKey = Object.keys(this._errors)[0];
    const errorFn = this._errorMessages[errorKey];

    if (errorFn) {
      this._htmlElement.innerText = errorFn(this._errors[errorKey]);
    }
  }
}
