import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Notitie } from '../notitie.model';

@Component({
  selector: 'app-notitie',
  templateUrl: './notitie.component.html',
  styleUrls: ['./notitie.component.css']
})
export class NotitieComponent implements OnInit {
  @Input() public notitie: Notitie;

  constructor() {
  }

  ngOnInit() {
  }
}
