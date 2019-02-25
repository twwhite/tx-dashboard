import { Transaction } from "./transaction"

export const TRANSACTIONS: Transaction[] = [

    /* Reference mock-data.ts for item IDs and values */

    {
        /* Example 1 tonne of sand on txDate */
        id: 1,
        itemID: 1, // Sand
        itemQty: 10,
        itemUnits: "tonnes",
        txDate: 1, // Needs to be in datetime
    }, 
    {
        /* Example 10 tonnes of soda ash per day starting at txDate */
        id: 2,
        itemID: 2, // Soda Ash
        itemQty: 10,
        itemUnits: "tonnes",
        perUnit: "day",     
        txDate: 1, // Needs to be in datetime
    }, 
    {
        /* Example 0 tonnes of soda ash per day starting at txDate, ramping up to 10 tonnes of soda ash per day at "2" (Not a real time yet) */
        id: 2,
        itemID: 2, // Soda Ash
        itemQty: 10,
        itemUnits: "tonnes",
        perUnit: "day",     
        txDate: 1, // Needs to be in datetime
        txFunction: [
            [2, 10] // 2 = time, 10 = itemQty
        ]
    }
];