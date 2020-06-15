import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  value = '';

  @Input() showPrompt: boolean;
  @Input() title: string;
  @Input() okText: string;
  @Input() cancelText: string;
  @Output() valueEmitted = new EventEmitter<string>();

  constructor() {
    this.okText = 'OK';
    this.cancelText = 'Cancel';
   }
   // tslint:disable-next-line: use-lifecycle-interface
   ngOnInit() {
  }
   emitValue(value) {
    this.valueEmitted.emit(value);
   }
}
