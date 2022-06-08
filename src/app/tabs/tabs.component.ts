import { Component, OnInit } from '@angular/core';
import { StarWarsService } from 'app/services/star-wars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  characters = [];
  chosenList = 'all';
  constructor(public starWarsService: StarWarsService) { }


  ngOnInit() {
  }

  onChoose(side) {
    this.chosenList = side;
  }

  getCharacters() {
    this.characters = this.starWarsService.getCharacters(this.chosenList);
    return this.characters
  }

}
