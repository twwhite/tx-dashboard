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
  public convertFromUnit;
  public convertToUnit;


  /* Work-in-progress: Input parser for conversion, conversion lookup, rate finder */
  /* onConversionChange called after every keypress in the conversion input boxes */
  public onConversionChange(event) {

    var input = event.target.value; // string value from input box of either fromUnit or toUnit, whichever was modified
    var id = event.target.id;       // ID of input box

    if(input.length > 0){     // First validation, if input length > 0
      var unit = this.units.find( x => x.abbr === input)  // Try to find the string in array of units, specifically the abbr column
      if(unit){               // if found
        $('#'+id+'Identified').text(unit.name); // Modify element with ID #toUnitIdentified or #fromUnitIdentified with the full name of the identified unit

        /* TODO: Make this less manual */
        if(id=="fromUnit"){ 
          this.convertFromUnit = unit;  // Store found from UNIT object publically so we can access during conversion without re-searching
        }else if(id=="toUnit"){
          this.convertToUnit = unit;    // Store found to UNIT object publically so we can access during conversion without re-searching
        }

      } else {$('#'+id+'Identified').text(" ");}  // if fail, blank the identified <span> elements 
    } else {$('#'+id+'Identified').text(" ");}    // if fail, blank the identified <span> elements 

  }
  


  /* This is where the conversion is actually calculated */
  public validateConversion() {
    /* TODO: Better validation here, need to check for same base unit or at the lease same unit type*/
    if($("#convertValue").val()>0 && this.convertToUnit.baseUnit == this.convertFromUnit.baseUnit){ 
      var outputResult = (this.convertFromUnit.factor * $("#convertValue").val())/(this.convertToUnit.factor); // The basic calculation is ( input value * input conversion factor ) / output conversion factor.
      $("#outputResult").text(outputResult.toFixed(2) + "  " +this.convertToUnit.name) // display results
    } else if(this.convertToUnit.baseUnit != this.convertFromUnit.baseUnit) { // ugly validation, but it works
      $("#outputResult").text("Cannot convert: Dissimilar types") // display results
    }

  }


  constructor() { }

  ngOnInit() {


  $(document).ready(function() {
  $("#hide").click(function() {
  $("#unitsTable").toggle();
  console.log('alert');
  })});

  }

}
