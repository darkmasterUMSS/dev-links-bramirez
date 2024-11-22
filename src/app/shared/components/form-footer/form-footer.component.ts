import {Component, input, InputSignal, output, OutputEmitterRef} from '@angular/core';

/**
 * @author Bruno Ramirez
 */
@Component({
  selector: 'app-form-footer',
  standalone: true,
  imports: [],
  templateUrl: './form-footer.component.html',
  styleUrl: './form-footer.component.scss'
})
export class FormFooterComponent {
  public description: InputSignal<string> = input<string>('');
  public action: InputSignal<string> = input<string>('');

  public onClickEvent: OutputEmitterRef<void> = output<void>();

  public onClick(): void {
    this.onClickEvent.emit();
  }
}
