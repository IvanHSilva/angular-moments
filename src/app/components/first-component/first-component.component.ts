import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Ivan Henriques';
  age: number = 48;
  languages = ['C#', 'Python', 'Javascript'];
  car = { factory: 'Honda', model: 'Fit', year: 2019 };

  constructor() { }

  ngOnInit(): void {
  }

}
