import {ChangeDetectionStrategy, Component, inject, ViewEncapsulation} from '@angular/core';
import {LogoComponent} from "../../../shared/components/logo/logo.component";
import {FormInputComponent} from "../../../shared/components/form-input/form-input.component";
import {HeaderComponent} from "../../../shared/components/header/header.component";
import {ButtonComponent} from "../../../shared/components/button/button.component";
import {FormFooterComponent} from '../../../shared/components/form-footer/form-footer.component';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {FormErrorLabelDirective} from '../../../shared/directives/form-error.directive';
import {CommonModule} from '@angular/common';
import {EMPTY_STRING, LINKS_CUSTOM_PATH, REGISTER_PATH} from '../../../shared/constants/constants';

/**
 * @author Bruno Ramirez
 */
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LogoComponent, FormInputComponent, HeaderComponent, ButtonComponent, FormFooterComponent, ReactiveFormsModule, FormErrorLabelDirective, CommonModule],
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    style:
      'display: flex;' +
      'align-items: center;' +
      'justify-content: center;' +
      'height: 100vh;'
  }
})
export class LoginComponent {
  public formBuilder: FormBuilder = inject(FormBuilder);
  public router: Router = inject(Router);

  public loginForm: FormGroup = this.formBuilder.group({
    email: [EMPTY_STRING, [Validators.required, Validators.email]],
    password: [EMPTY_STRING, [Validators.required]]
  });

  public login(): void {
    this.router.navigate([LINKS_CUSTOM_PATH]);
  }

  public goToRegister(): void {
    this.router.navigate([REGISTER_PATH]);
  }
}
