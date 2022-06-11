import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import { Subject } from 'rxjs';

@Injectable()
export class StarWarsService {
  public characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' },
  ]
  charactersChanged = new Subject<void>();
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
    this.charactersChanged.next();
    this.logService.logText(`Changed side of ${passedCharacterInfo.name}, the chosen side now is: ${passedCharacterInfo.side}`)
  }

  addCharacter(name, side) {
    const pos = this.characters.findIndex((i) => {
      return i.name === name;
    })
    console.log(`POSITION`, pos)
    if (pos !== -1) { // returned if no index was find, hence needs to be added
      return;
    }
    const newChar = { name: name, side: side }
    this.characters.push(newChar)
  }
}
