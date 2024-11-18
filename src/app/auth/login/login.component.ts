import {Component} from '@angular/core';
import {LogoComponent} from "../../shared/components/logo/logo.component";
import {FormInputComponent} from "../../shared/components/form-input/form-input.component";
import {HeaderComponent} from "../../shared/components/header/header.component";
import {ButtonComponent} from "../../shared/components/button/button.component";

/**
 * @author Bruno Ramirez
 */
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LogoComponent, FormInputComponent, HeaderComponent, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
