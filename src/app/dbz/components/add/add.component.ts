import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = { id: '', name: '', power: 0 };

  addCharacter(): void {
    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);
  }
}
