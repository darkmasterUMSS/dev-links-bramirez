import {Component, input, InputSignal, output, OutputEmitterRef, ViewEncapsulation} from '@angular/core';

/**
 * @author Bruno Ramirez
 */
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  encapsulation: ViewEncapsulation.None

})
export class ButtonComponent {
  public title: InputSignal<string> = input.required<string>();
  public type: InputSignal<string> = input<string>('button');
  public disabled: InputSignal<boolean> = input<boolean>(false);
  public iconPath: InputSignal<string> = input<string>('');

  public onClickEvent: OutputEmitterRef<void> = output<void>();

  public onClick(): void {
    this.onClickEvent.emit();
  }
}
