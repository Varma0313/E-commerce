import { Component, OnInit } from '@angular/core';
import { ShoppingApiService } from '../services/shopping-api.service';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-inventory-view',
  standalone: true,
  imports: [NgFor, NgIf, CurrencyPipe],
  templateUrl: './inventory-view.component.html',
  styleUrl: './inventory-view.component.scss',
})
export class InventoryViewComponent implements OnInit {
  productdataSoucrce: any[] = [];

  constructor(private api: ShoppingApiService) {}

  ngOnInit(): void {
    this.api.getProducts().subscribe({
      next: (data) => {
        this.productdataSoucrce = data;
        console.log('Products loaded:', data);
      },
      error: (err) => {
        console.error('Failed to load products', err);
      },
    });
  }
}
