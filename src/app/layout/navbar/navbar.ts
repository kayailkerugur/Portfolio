import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  readonly links = [
    { label: 'Hakkımda', path: '/about' },
    { label: 'Projeler', path: '/projects' },
    { label: 'Beceriler', path: '/skills' },
    { label: 'İletişim', path: '/contact' },
  ];

  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
