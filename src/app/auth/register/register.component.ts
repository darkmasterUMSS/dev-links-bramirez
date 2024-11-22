import {Component, inject} from '@angular/core';
import {ButtonComponent} from "../../shared/components/button/button.component";
import {FormFooterComponent} from "../../shared/components/form-footer/form-footer.component";
import {FormInputComponent} from "../../shared/components/form-input/form-input.component";
import {HeaderComponent} from "../../shared/components/header/header.component";
import {LogoComponent} from "../../shared/components/logo/logo.component";
import {InputType} from '../../shared/enums/input-type.enum';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

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
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  public formBuilder: FormBuilder = inject(FormBuilder);
  public router: Router = inject(Router);

  public registerForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]]
  });

  public readonly INPUT_TYPE: typeof InputType = InputType;

  public createNewAccount(): void {

  }

  public navigateToLogin(): void {
    this.router.navigate(['/auth/login']);
  }
}
