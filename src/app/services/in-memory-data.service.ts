import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Item } from '../components/items/item';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const items = [
      { type: 0, id: 12, name: "sand", category: "raw material", value: -200, value_unit: "tonne" },
      { type: 0, id: 13, name: "soda ash", category: "raw material", value: -600, value_unit: "tonne" },
      { type: 0, id: 14, name: "dolomite", category: "raw material", value: -350, value_unit: "tonne"},
      { type: 0, id: 15, name: "natural gas", category: "consumable", value: -10, value_unit: "cubic-feet" },
      { type: 1, id: 16, name: "Clear Glass", category: "Base Glass", value: 330, value_unit: "tonne", yield: 0.80 },
      { type: 1, id: 17, name: "Low E Clear", category: "CVD", value: 850, value_unit: "tonne", yield: 0.66 },
      { type: 1, id: 18, name: "Reflective Clear", category: "CVD", value: 850, value_unit: "tonne", yield: 0.66 },
      { type: 1, id: 19, name: "Solar Control", category: "CVD", value: 850, value_unit: "tonne", yield: 0.66 },
      { type: 1, id: 20, name: "Transparent Conductive Oxide", category: "CVD", value: 850, value_unit: "tonne", yield: 0.66 },
      { type: 1, id: 21, name: "Anti-Reflective Clear", category: "CVD", value: 850, value_unit: "tonne", yield: 0.66,
          dependencies: [
              [12, 25, "tonnes"],
              [13, 532, "tonnes"]
          ]
      }
    ];
    return {items};
  }

  // Overrides the genId method to ensure that an item always has an id.
  // If the items array is empty,
  // the method below returns the initial number (11).
  // if the items array is not empty, the method below returns the highest
  // item id + 1.
  genId(items: Item[]): number {
    return items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 11;
  }
}