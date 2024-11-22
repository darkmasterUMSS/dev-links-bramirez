import {Component} from '@angular/core';
import {NavbarComponent} from '../../shared/components/navbar/navbar.component';

/**
 * @author Bruno Ramirez
 */
@Component({
  selector: 'app-links-custom',
  standalone: true,
  imports: [
    NavbarComponent
  ],
  templateUrl: './links-custom.component.html',
  styleUrl: './links-custom.component.scss'
})
export class LinksCustomComponent {

}
