import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../keg.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})

export class KegListComponent {
  @Input() kegList: Keg[];
  @Output() kegSender = new EventEmitter();

  editKeg(keg: Keg){
    this.kegSender.emit(keg);
  }
}
