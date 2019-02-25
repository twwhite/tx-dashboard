/**
 * A transaction is a transfer of items. This is where all value exchanges hands. 
 * Transactions can be time-based, e.g. 10 units per hour, or they can be single transactional instances, e.g. buy 10 units at this time 
 * 
 * */


export class Transaction {
    
    /* Mandatory */
    id: number;         // Unique global identifier for each transaction
    itemID: number;     // Item reference for this transaction. Only one item can be transacted in each transaction, but items can have other item dependencies which would account for this.
    itemQty: number;    // 
    itemUnits: string;
    txDate: number;

    /* Optional */
    perUnit?: string;   // perUnit for all points in this TX. Optional because single datetime transactions would not have "per time"

    /*  TODO:   1) Should this have a per-unit for each point, or overall per unit? 
                2) Allow for txFunctions to be more complex like multpliers of other transactions 
    */
    txFunction?: [number, number][]; // First number = datetime, second number = new itemQty
    
    // Note: If "perUnit" is set, and txFunction is NOT set, step function straight line of amplitude "itemQty" would be present on final chart starting from txDate.

    /*  txFunction takes an unspecified number of data points and converts them into rates
        if txFunction is set, the last point defines the steady-state moving forward. All points fall 
        the txDate - Consider txDate (Start date) if a txFunction is set.

        Example:
            itemID:     10 (ID of Brick or some item)
            itemQty:    50 (50 bricks)
            perUnit:    "day" (50 bricks per day)
            txDate:     January 1st, 2015 10:00 AM
            txFunction: [
                [January 10th, 500] (In this example point, 500 = 500 bricks per day, as defined in original TX.)
                [February 1st, 10000] (10000 bricks per day on Feb 1st.)

            ]

        Between each two points in txFunction, a y=mx+b line should be calculated, and that would be what is solved for in final output using datetime pois of final display
    */
}
  