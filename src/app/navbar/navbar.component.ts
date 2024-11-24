import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    if (window.innerWidth > 992) { // Only for large screens
      const dropdowns = this.el.nativeElement.querySelectorAll('.navbar .dropdown');
      dropdowns.forEach((dropdown: HTMLElement) => {
        this.renderer.listen(dropdown, 'mouseenter', () => this.showDropdown(dropdown));
        this.renderer.listen(dropdown, 'mouseleave', () => this.hideDropdown(dropdown));
      });
    }
  }

  showDropdown(dropdown: HTMLElement) {
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    this.renderer.addClass(dropdownMenu, 'show');
  }

  hideDropdown(dropdown: HTMLElement) {
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    this.renderer.removeClass(dropdownMenu, 'show');
  }
}
