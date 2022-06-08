import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class StarWarsService {
  public characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' },
  ]
  constructor(private logService: LogService) { }


  getCharacters(chosenList) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }

    return this.characters.filter((i) => {
      return i.side === chosenList;
    })
  }

  onSideChosen(passedCharacterInfo) {
    const pos = this.characters.findIndex((char) => {
      return char.name === passedCharacterInfo.name;
    })
    this.characters[pos].side = passedCharacterInfo.side;
    this.logService.logText(`Changed side of ${passedCharacterInfo.name}, the chosen side now is: ${passedCharacterInfo.side}`)
  }
}
