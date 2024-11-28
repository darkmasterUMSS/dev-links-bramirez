import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {NavbarComponent} from '../../../shared/components/navbar/navbar.component';
import {HeaderComponent} from '../../../shared/components/header/header.component';
import {ButtonComponent} from '../../../shared/components/button/button.component';
import {LinksCardComponent} from '../links-card/links-card.component';

/**
 * @author Bruno Ramirez
 */
@Component({
  selector: 'app-links-custom',
  standalone: true,
  imports: [
    NavbarComponent,
    HeaderComponent,
    ButtonComponent,
    LinksCardComponent
  ],
  templateUrl: './links-custom.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinksCustomComponent {
  links: any = ['123'];

  public saveLinks(): void {
  }

  public addLink(): void {
  }
}
