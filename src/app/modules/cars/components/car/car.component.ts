import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';

import { ICar } from 'src/app/models';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  form: FormGroup;

  @Input() cars: ICar[];
  @Input() car: ICar;

  constructor() {
    this._createForm();
  }

  ngOnInit(): void {
  }

  _createForm():void{
    this.form = new FormGroup({
      model: new FormControl(null),
      year: new FormControl(null),
      price: new FormControl(null),
    });
  }

  create():void {
    console.log(this.form.getRawValue());
  }

}
