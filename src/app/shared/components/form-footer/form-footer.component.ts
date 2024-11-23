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
  selector: 'app-form-footer',
  standalone: true,
  imports: [],
  templateUrl: './form-footer.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFooterComponent {
  public description: InputSignal<string> = input<string>('');
  public action: InputSignal<string> = input<string>('');

  public onClickEvent: OutputEmitterRef<void> = output<void>();

  public onClick(): void {
    this.onClickEvent.emit();
  }
}
