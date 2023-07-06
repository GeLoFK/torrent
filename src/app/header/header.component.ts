import { Component } from '@angular/core';
import {trigger, transition, style, animate, state} from '@angular/animations';

interface Language {
  id: string;
  hreflang: string;
  label: string;
  href: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

  animations: [
    trigger('slider', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('300ms ease-out', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ]
})
export class HeaderComponent {
  isOpen = false;

  languages: Language[] = [
    { id: 'mainnav-lang-en', hreflang: 'en', label: 'English', href: '/' },
    { id: 'mainnav-lang-de', hreflang: 'de', label: 'Deutsch', href: '/intl/de/' },
    { id: 'mainnav-lang-es', hreflang: 'es', label: 'Español', href: '/intl/es/' },
    { id: 'mainnav-lang-es', hreflang: 'pl', label: 'Poland', href: '/intl/pl/' },
    { id: 'mainnav-lang-es', hreflang: 'ru', label: 'Русский', href: '/intl/ru/' },
    { id: 'mainnav-lang-es', hreflang: 'ua', label: 'Український', href: '/intl/ua/' }
  ];

  openDropdown() {
    this.isOpen = !this.isOpen;
  }
}
