import {Component, input, InputSignal, output, OutputEmitterRef} from '@angular/core';

/**
 * @author Bruno Ramirez
 */
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  public title: InputSignal<string> = input.required<string>();
  public type: InputSignal<string> = input.required<string>();
  public disabled: InputSignal<boolean> = input<boolean>(false);

  public onClickEvent: OutputEmitterRef<void> = output<void>();

  public onClick(): void {
    this.onClickEvent.emit();
  }
}
