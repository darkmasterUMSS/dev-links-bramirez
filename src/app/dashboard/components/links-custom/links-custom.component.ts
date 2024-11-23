import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {NavbarComponent} from '../../../shared/components/navbar/navbar.component';
import {HeaderComponent} from '../../../shared/components/header/header.component';
import {ButtonComponent} from '../../../shared/components/button/button.component';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import {LinksCardComponent} from '../links-card/links-card.component';

/**
 * @author Bruno Ramirez
 */
@Component({
  selector: 'app-links-custom',
  standalone: true,
  imports: [
    NavbarComponent,
    HeaderComponent,
    ButtonComponent,
    CdkDropList,
    CdkDrag,
    LinksCardComponent
  ],
  templateUrl: './links-custom.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinksCustomComponent {

  public saveLinks(): void {

  }

  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
}
