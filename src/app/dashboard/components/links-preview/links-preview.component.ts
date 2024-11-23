import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

/**
 * @author Bruno Ramirez
 */
@Component({
  selector: 'app-links-preview',
  standalone: true,
  imports: [],
  templateUrl: './links-preview.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinksPreviewComponent {

}
