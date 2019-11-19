import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-id-input',
  templateUrl: './id-input.component.html',
  styleUrls: ['./id-input.component.css']
})
export class IdInputComponent implements OnInit {
  @Output() querySent = new EventEmitter<String>();
  @ViewChild('idInput', {static: false}) idInputRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onQuery() {
    this.querySent.emit(this.idInputRef.nativeElement.value);
  }

}
