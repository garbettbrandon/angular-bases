import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  standalone: false,
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    { id: uuid(), name: 'Trunks', power: 10 },
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    //TODO: Emitir el ID del personaje.

    if (!id) return;

    this.onDelete.emit(id);
  }
}
