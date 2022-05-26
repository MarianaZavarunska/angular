import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

import {ICar} from "../../../../models";
import {CarsService} from "../../services";


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  form: FormGroup;
  cars: ICar[];
  carForUpdate: ICar | null;

  constructor(private carsService:CarsService) {
    this._createForm();
  }

  ngOnInit(): void {
    this.carsService.getAll().subscribe(cars => this.cars = cars);
  }

  _createForm():void{
    this.form = new FormGroup({
      model: new FormControl(null),
      year: new FormControl(null),
      price: new FormControl(null),
    });
  }

  create():void {
    if(!this.carForUpdate){
      this.carsService.create(this.form.value).subscribe(car => {
        this.cars.push(car);
        this.form.reset();
      })
    } else {
      this.carsService.update(this.carForUpdate?.id, this.form.value).subscribe(value => {
        const updatedCar = this.cars.find(c => c.id === this.carForUpdate?.id );
        Object.assign(updatedCar, value);
        this.carForUpdate = null;
      })
    }
  }

  update(car: ICar):void{
    this.carForUpdate = car;
    this.form.setValue({model:car.model, year:car.year, price: car.price});
  }

  delete(car: ICar):void{
    this.carsService.deleteById(car.id).subscribe(() => {
      this.cars = this.cars.filter(c => c.id !== car.id)
    })
  }
}
