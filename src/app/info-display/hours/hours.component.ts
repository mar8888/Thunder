import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.css']
})
export class HoursComponent implements OnInit {
  @Input() headerText: string;

  constructor() { }

  ngOnInit() {
  }

}
