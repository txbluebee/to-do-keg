import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from '../keg.model';

@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})

export class NewKegComponent {
  showNewKegForm = false;
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, flavor: string) {
    var newKeg = new Keg(name, brand, price, flavor)
    this.newKegSender.emit(newKeg);
  }

}
