import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  // Movemos todo el código comentado a dbz.service.ts
  // public characters: Character[] = [{
  //   name: 'Krillin',
  //   power: 1000
  // },{
  //   name: 'Goku',
  //   power: 9500
  // },{
  //   name: 'Vegeta',
  //   power: 7500
  // }];

  // onNewCharacter(character: Character): void {
  //   this.characters.push(character);
  // }

  // onDeleteCharacter(index: number) {
  //   this.characters.splice(index, 1);
  // }

  // En el constructor pasar un argumento en Angular hace la inyeccion de dependencias
  constructor(private dbzService: DbzService) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id: string ): void {
    this.dbzService.deleteCharacterById( id );
  }

  onNewCharacter( character: Character): void {
    this.dbzService.addCharacter( character );
  }
}
