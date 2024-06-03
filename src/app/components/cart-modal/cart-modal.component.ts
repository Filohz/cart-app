import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cartitem';
import { CartComponent } from "../cart/cart.component";

@Component({
    selector: 'cart-modal',
    standalone: true,
    templateUrl: './cart-modal.component.html',
    imports: [CartComponent]
})
export class CartModalComponent {
openCart() {
throw new Error('Method not implemented.');
}

  @Input() items:CartItem[]=[];
  //@Input() total =0;
  @Output() onDeleteIdCartEventEmitter = new EventEmitter();
  @Output() closeCartEventEmitter = new EventEmitter();

  onDeleteCart(id:number){
    this.onDeleteIdCartEventEmitter.emit(id);
  }

  closeCart(){
    this.closeCartEventEmitter.emit();
  }

}
