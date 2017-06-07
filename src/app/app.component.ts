import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedTask = null;

  masterKegList: Keg[] = [
    new Keg('Spirit','coke', 15, 'straberry')
  ];

  addKeg(newKegFromChild: Keg){
    this.masterKegList.push(newKegFromChild);
  }
}
