import { Component, OnInit } from '@angular/core';
import { ITEMS } from './mock-data';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
