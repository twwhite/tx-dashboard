import { Item } from "./item"

export const DATA: Item[] = [

    /* TODO: Should the items be inserted into the sorted array, or the array be sorted when called? */
    { type: 0, id: 1, name: "sand", category: "raw material", value: -200, value_unit: "tonne" },
    { type: 0, id: 2, name: "soda ash", category: "raw material", value: -600, value_unit: "tonne" },
    { type: 0, id: 3, name: "dolomite", category: "raw material", value: -350, value_unit: "tonne"},
    { type: 0, id: 4, name: "natural gas", category: "consumable", value: -10, value_unit: "cubic-feet" },
    { type: 1, id: 5, name: "Clear Glass", category: "Base Glass", value: 330, value_unit: "tonne", yield: 0.80 },
    { type: 1, id: 6, name: "Low E Clear", category: "CVD",     value: 850, value_unit: "tonne", yield: 0.66 },
    { type: 1, id: 7, name: "Reflective Clear", category: "CVD", value: 850, value_unit: "tonne", yield: 0.66 },
    { type: 1, id: 8, name: "Solar Control", category: "CVD", value: 850, value_unit: "tonne", yield: 0.66 },
    { type: 1, id: 9, name: "Transparent Conductive Oxide", category: "CVD", value: 850, value_unit: "tonne", yield: 0.66 },
    { type: 1, id: 10, name: "Anti-Reflective Clear", category: "CVD", value: 850, value_unit: "tonne", yield: 0.66,
        dependencies: [
        //  [id, qty, unit]
            [3, 25, "tonnes"],
            [4, 532, "cubic-feet"]
        ]
    }

];