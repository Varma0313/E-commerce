import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-root',
  standalone: true,
  imports: [],
  templateUrl: './shopping-root.component.html',
  styleUrl: './shopping-root.component.scss',
})
export class ShoppingRootComponent {
  constructor(private router: Router) {}

  navigateTo(url: string) {
    this.router.navigate(['shopping', url]);
  }
}
