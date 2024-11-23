import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

/**
 * @author Bruno Ramirez
 */
@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './logo.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoComponent {

}
