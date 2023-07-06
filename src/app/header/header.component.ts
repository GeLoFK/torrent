import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

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
    trigger('dropdownAnimation', [
      state('void', style({ opacity: 0, transform: 'translateY(-20px)' })),
      state('*', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void => *', animate('200ms ease-in')),
      transition('* => void', animate('200ms ease-out'))
    ])
  ]
})
export class HeaderComponent {
  isDropdownOpen = false;

  languages: Language[] = [
    { id: 'mainnav-lang-en', hreflang: 'en', label: 'English', href: '/' },
    { id: 'mainnav-lang-de', hreflang: 'de', label: 'Deutsch', href: '/intl/de/' },
    { id: 'mainnav-lang-es', hreflang: 'es', label: 'Español', href: '/intl/es/' },
    { id: 'mainnav-lang-es', hreflang: 'pl', label: 'Poland', href: '/intl/pl/' },
    { id: 'mainnav-lang-es', hreflang: 'ru', label: 'Русский', href: '/intl/ru/' },
    { id: 'mainnav-lang-es', hreflang: 'ua', label: 'Український', href: '/intl/ua/' }
  ];

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }
}
