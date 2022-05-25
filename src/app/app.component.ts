import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'star-wars-characters';
  rootItems = ['Apples', 'Bananas', 'Cherries'];

  addNewItems(newItem) {
    this.rootItems.push(newItem)
  }
}
