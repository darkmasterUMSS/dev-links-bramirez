import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {LogoComponent} from '../logo/logo.component';
import {ButtonComponent} from '../button/button.component';

/**
 * @author Bruno Ramirez
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    LogoComponent,
    ButtonComponent
  ],
  templateUrl: './navbar.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {

}
