import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../keg.model';

@Component({
  selector: 'app-keg-edit',
  templateUrl: './keg-edit.component.html',
  styleUrls: ['./keg-edit.component.css']
})
export class KegEditComponent {
  @Input() selectedKeg: Keg;
  @Output() finishEditingSender = new EventEmitter();

  finishedEditing(){
    this.finishEditingSender.emit();
  }
}
