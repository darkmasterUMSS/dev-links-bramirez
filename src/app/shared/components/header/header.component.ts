import {ChangeDetectionStrategy, Component, input, InputSignal, ViewEncapsulation} from '@angular/core';
import {EMPTY_STRING} from "../../constants/constants";

/**
 * @author Bruno Ramirez
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public subTitle: InputSignal<string> = input<string>('');
  public title: InputSignal<string> = input.required<string>();
}
