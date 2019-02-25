import { Component, OnInit } from '@angular/core';
import { UNITS } from './units';
import { Unit } from './unit';
declare var $: any;

@Component({
  selector: 'app-conversions',
  templateUrl: './conversions.component.html',
  styleUrls: ['./conversions.component.scss']
})
export class ConversionsComponent implements OnInit {


  /* TODO: Add conversion function */
  units = UNITS;

  public hideUnitsTable() {
    $('#unitsTable').toggle();
  }

  constructor() { }

  ngOnInit() {

  }

}
