import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
  output,
  OutputEmitterRef,
  ViewEncapsulation
} from '@angular/core';

/**
 * @author Bruno Ramirez
 */
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: '../../../../assets/styles/privates/components/_button.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
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
