import {Component} from '@angular/core';
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
  styleUrl: './logo.component.scss'
})
export class LogoComponent {

}
