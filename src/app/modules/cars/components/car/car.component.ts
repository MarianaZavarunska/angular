import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import { ICar } from 'src/app/models';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent implements OnInit {

  @Input() car: ICar;
  @Output() onDeleteCar: EventEmitter<ICar> = new EventEmitter();
  @Output() onUpdateCar: EventEmitter<ICar> = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {
  }

  onUpdate(car: ICar) {
   this.onUpdateCar.emit(car);
  }

  onDelete(car: ICar) {
    this.onDeleteCar.emit(car);
  }



}
