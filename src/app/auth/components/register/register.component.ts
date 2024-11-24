import {ChangeDetectionStrategy, Component, inject, ViewEncapsulation} from '@angular/core';
import {ButtonComponent} from "../../../shared/components/button/button.component";
import {FormFooterComponent} from "../../../shared/components/form-footer/form-footer.component";
import {FormInputComponent} from "../../../shared/components/form-input/form-input.component";
import {HeaderComponent} from "../../../shared/components/header/header.component";
import {LogoComponent} from "../../../shared/components/logo/logo.component";
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {EMPTY_STRING, LOGIN_PATH} from '../../../shared/constants/constants';

/**
 * @author Bruno Ramirez
 */
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ButtonComponent,
    FormFooterComponent,
    FormInputComponent,
    HeaderComponent,
    LogoComponent,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
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
export class RegisterComponent {
  public formBuilder: FormBuilder = inject(FormBuilder);
  public router: Router = inject(Router);

  public registerForm: FormGroup = this.formBuilder.group({
    email: [EMPTY_STRING, [Validators.required, Validators.email]],
    password: [EMPTY_STRING, [Validators.required, Validators.minLength(3)]]
  });

  public createNewAccount(): void {

  }

  public navigateToLogin(): void {
    this.router.navigate([LOGIN_PATH]);
  }
}
