import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';
import { NgFor } from '@angular/common';
import { ShoppingApiService } from '../services/shopping-api.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgFor, ProductCardComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  products: any[] = [];

  constructor(private api: ShoppingApiService) {}

  ngOnInit() {
    this.api.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
  logout() {}
}
