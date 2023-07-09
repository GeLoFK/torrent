import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Languages } from "../../../constants/language";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('slider', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('250ms ease-out', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('250ms ease-out', style({ transform: 'translateY(100%)', opacity: 0 })),
      ]),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in-out', style({ opacity: 0.5 })),
      ]),
      transition(':leave', [
        animate('300ms ease-in-out', style({ opacity: 0.5 })),
      ]),
    ]),
  ],
})
export class HeaderComponent {
  isOpen = false;
  languages = new Languages();

  openDropdown() {
    this.isOpen = !this.isOpen;
  }

  closeDropdown() {
    this.isOpen = false;
  }
}
