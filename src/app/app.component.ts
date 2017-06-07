import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedKeg = null;

  kegList: Keg[] = [
    new Keg('Spirit','coke', 15, 'straberry')
  ];

  addKeg(newKegFromChild: Keg){
    this.kegList.push(newKegFromChild);
  }

  editKeg(kegToEdit: Keg){
    this.selectedKeg = kegToEdit;
  }

  finishedEditing(){
    this.selectedKeg = null;
  }
}
