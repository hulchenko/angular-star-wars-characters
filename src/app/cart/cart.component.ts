import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Input() items = [];
  @Output() updatedItems = new EventEmitter<string>();
  newItem = '';

  constructor(
  ) {
  }

  appendItems(event) {
    console.log(`ADDED ITEM: `, event.target.value)
    this.updatedItems.emit(this.newItem)
    console.log(`ARRAY: `, this.items)
    this.newItem = '';
  }


}
