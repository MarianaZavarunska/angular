import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {ICar} from "../../../../models";
import {CarsService} from "../../services";
import {regex} from "../../../../constants";


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
      model: new FormControl(null , [Validators.pattern(regex.model)]),
      year: new FormControl(1990, [Validators.min(1990), Validators.max(new Date().getFullYear())]),
      price: new FormControl(0, [Validators.min(0), Validators.max(1000000)]),
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
