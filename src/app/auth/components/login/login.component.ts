import {ChangeDetectionStrategy, Component, inject, ViewEncapsulation} from '@angular/core';
import {LogoComponent} from "../../../shared/components/logo/logo.component";
import {FormInputComponent} from "../../../shared/components/form-input/form-input.component";
import {HeaderComponent} from "../../../shared/components/header/header.component";
import {ButtonComponent} from "../../../shared/components/button/button.component";
import {InputType} from "../../../shared/enums/input-type.enum";
import {FormFooterComponent} from '../../../shared/components/form-footer/form-footer.component';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {FormErrorLabelDirective} from '../../../shared/directives/form-error.directive';
import {CommonModule} from '@angular/common';

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
  public submitted: boolean = false;

  public loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  public readonly INPUT_TYPE: typeof InputType = InputType;

  public login(): void {
    this.submitted = true;
    console.log('Login', this.loginForm.value);
  }

  public navigateToRegister(): void {
    this.router.navigate(['/auth/register']);
  }
}
