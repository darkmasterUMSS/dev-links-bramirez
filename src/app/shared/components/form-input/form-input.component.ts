import {Component, input, InputSignal} from '@angular/core';
import {InputType} from "../../enums/input-type.enum";
import {EMPTY_STRING} from "../../constants/constants";

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss'
})
export class FormInputComponent {
  public iconPath: InputSignal<string> = input<string>(EMPTY_STRING);
  public name: InputSignal<string> = input.required<string>(EMPTY_STRING);
  public placeholder: InputSignal<string> = input.required<string>(EMPTY_STRING);
  public type: InputSignal<InputType> = input<InputType>(InputType.Text);

  constructor() {
  }
}
