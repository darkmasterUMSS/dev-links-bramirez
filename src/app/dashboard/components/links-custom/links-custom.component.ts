import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {NavbarComponent} from '../../../shared/components/navbar/navbar.component';
import {HeaderComponent} from '../../../shared/components/header/header.component';
import {ButtonComponent} from '../../../shared/components/button/button.component';
import {LinksCardComponent} from '../links-card/links-card.component';
import {NgForOf, NgOptimizedImage, NgStyle} from '@angular/common';

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
    LinksCardComponent,
    NgOptimizedImage,
    NgStyle,
    NgForOf
  ],
  templateUrl: './links-custom.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinksCustomComponent {
  links = [
    { title: 'GitHub', color: '#000000', icon: 'assets/icons/github.png', url: 'https://github.com' },
    { title: 'Frontend Mentor', color: '#F5F5F5', icon: 'assets/icons/frontend-mentor.png', url: 'https://frontendmentor.io' },
    { title: 'Twitter', color: '#1DA1F2', icon: 'assets/icons/twitter.png', url: 'https://twitter.com' },
    { title: 'LinkedIn', color: '#0077B5', icon: 'assets/icons/linkedin.png', url: 'https://linkedin.com' },
    { title: 'YouTube', color: '#FF0000', icon: 'assets/icons/youtube.png', url: 'https://youtube.com' },
    { title: 'Facebook', color: '#1877F2', icon: 'assets/icons/facebook.png', url: 'https://facebook.com' },
    { title: 'Twitch', color: '#9146FF', icon: 'assets/icons/twitch.png', url: 'https://twitch.tv' },
    { title: 'Dev.to', color: '#333333', icon: 'assets/icons/devto.png', url: 'https://dev.to' },
    { title: 'Codewars', color: '#B1361E', icon: 'assets/icons/codewars.png', url: 'https://codewars.com' },
    { title: 'freeCodeCamp', color: '#0A0A23', icon: 'assets/icons/freecodecamp.png', url: 'https://freecodecamp.org' },
    { title: 'GitLab', color: '#FC6D26', icon: 'assets/icons/gitlab.png', url: 'https://gitlab.com' },
    { title: 'Hashnode', color: '#2962FF', icon: 'assets/icons/hashnode.png', url: 'https://hashnode.com' },
    { title: 'Stack Overflow', color: '#F48024', icon: 'assets/icons/stackoverflow.png', url: 'https://stackoverflow.com' },
  ];
  public saveLinks(): void {
  }

  public addLink(): void {
  }
}
