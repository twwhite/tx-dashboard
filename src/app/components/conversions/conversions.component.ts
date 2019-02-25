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

  /* Work-in-progress: Input parser for conversion, conversion lookup, rate finder */
  public onConversionChange(input: string) {
    var conversionUnit = input.split(" ").pop();
    if(conversionUnit.length > 0){
      var cFactor = this.units.find( x => x.abbr === conversionUnit).factor;
    }
    console.log(cFactor);
  }


  constructor() { }

  ngOnInit() {
    
  }

}
