import { Component, OnInit } from '@angular/core';
import { ITEMS } from './mock-data';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {


  /* TODO:
        1) Item Create, Modify, Save, Destroy model
          note: verify units against UNITS every change ^
  */

  constructor() { }

  ngOnInit() {
  }

}
