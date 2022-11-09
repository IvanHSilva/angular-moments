import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  size = 30;
  font = 'Arial';
  color = 'green';

  classes = ["blue-title", "small-title"]

  constructor() { }

  ngOnInit(): void {
  }

}
