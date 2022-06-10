import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from 'app/services/star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  characters = [];

  constructor(public activatedRoute: ActivatedRoute, public starWarsService: StarWarsService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      console.log(`PARAMETER: `, param)
      this.characters = this.starWarsService.getCharacters(param.chosenSide)
    })
  }

}
