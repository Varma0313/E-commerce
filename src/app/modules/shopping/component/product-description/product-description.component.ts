import { CurrencyPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-description',
  standalone: true,
  imports: [NgIf, CurrencyPipe],
  templateUrl: './product-description.component.html',
  styleUrl: './product-description.component.scss',
})
export class ProductDescriptionComponent implements OnInit {
  productInformation: any = null;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.productInformation = this.route.snapshot.data['product_desc'];
    console.log('Data', this.productInformation);
  }
}
