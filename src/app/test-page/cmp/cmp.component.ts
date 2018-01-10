import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuizzTest } from '../../data.model';

@Component({
  selector: 'app-cmp',
  templateUrl: './cmp.component.html',
  styleUrls: ['./cmp.component.css']
})
export class CmpComponent implements OnInit {
  @Input() evaluationNumber: QuizzTest;



  constructor() { }

  ngOnInit() {
  }

}
