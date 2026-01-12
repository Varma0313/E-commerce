import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { ShoppingApiService } from './shopping-api.service';

export const productdescResolver: ResolveFn<any> = (route) => {
  const api = inject(ShoppingApiService);

  const idParam = route.paramMap.get('id');
  if (!idParam) return null;

  const productId = Number(idParam); // ✅ convert string → number

  return api.getSingleProduct(productId);
};
