import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
    selector: 'catalog',
    standalone: true,
    templateUrl: './catalog.component.html',
    imports: [ProductCardComponent]
})
export class CatalogComponent {

  @Input() products!:Product[];

  @Output() onAddProductEventEmitter: EventEmitter<Product>= new EventEmitter();

  onAddCart(product:Product){
    this.onAddProductEventEmitter.emit(product);
  }
}
