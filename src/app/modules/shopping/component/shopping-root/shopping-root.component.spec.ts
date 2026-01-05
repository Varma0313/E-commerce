import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingRootComponent } from './shopping-root.component';

describe('ShoppingRootComponent', () => {
  let component: ShoppingRootComponent;
  let fixture: ComponentFixture<ShoppingRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingRootComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
