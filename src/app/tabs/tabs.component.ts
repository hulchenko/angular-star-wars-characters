import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' },
  ]
  chosenList = 'all';

  constructor() { }

  ngOnInit() {
  }

  onChoose(side) {
    this.chosenList = side;
  }

  onSideChosen(passedCharacterInfo) {
    const pos = this.characters.findIndex((char) => {
      return char.name === passedCharacterInfo.name;
    })
    this.characters[pos].side = passedCharacterInfo.side;
  }

  getCharacters() {
    if (this.chosenList === 'all') {
      return this.characters.slice();
    }

    return this.characters.filter((i) => {
      return i.side === this.chosenList;
    })
  }

}
