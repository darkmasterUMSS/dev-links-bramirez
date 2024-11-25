import {ChangeDetectionStrategy, Component, input, InputSignal, ViewEncapsulation} from '@angular/core';
import {PLATFORM_NAMES} from '../../../shared/constants/constants';
import {FormInputComponent} from '../../../shared/components/form-input/form-input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-links-card',
  standalone: true,
  imports: [
    FormInputComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './links-card.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinksCardComponent {
  public selectedPlatform: string = 'github';
  public isVisiblePlatformOptions: boolean = true;
  public numberCard: InputSignal<number> = input<number>(1);

  public readonly PLATFORM_NAMES: string[] = PLATFORM_NAMES;

  public removeLink(): void {
  }

  public selectOption(optionName: string): void {
    this.selectedPlatform = optionName;
  }

  public toggleVisibilityPlatformOptions(): void {
    this.isVisiblePlatformOptions = !this.isVisiblePlatformOptions;
  }
}
