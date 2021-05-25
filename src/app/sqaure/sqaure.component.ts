import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sqaure',
  templateUrl: './sqaure.component.html',
  styleUrls: ['./sqaure.component.scss']
})
export class SqaureComponent implements OnInit {

  @Input() value: 'X' | 'O';

  constructor() {
  }

  ngOnInit() {
  }

}
