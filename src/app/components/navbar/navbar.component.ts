import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
  imports: [CommonModule],
})
export class NavbarComponent {
  isDropdownOpen = false;
  test = 'coucou test';
  ctaText = 'Call to action';

  menuItems = [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
  ];

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
