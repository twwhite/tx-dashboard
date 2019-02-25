/** 
 * An item is a concept of something that can be transacted. It is a placeholder that has no inherint value, only an expected value per quantity when it is transacted 
 * 
 * */

export class Item {

    /* Mandatory */ 
    type: number;       // 0 = buyable, 1 = sellable, 2 = buyable/sellable
    id: number;         // Unique identifier to one item. Implement random generation?
    name: string;       // Display name for item
    category: string;   // Category of item, example "raw materials"
    value: number;      // Number representation of value (Can be zero)
    value_unit: string; // Unit representation of value (used with value input)

    /* Conditional */ 
    margin?: number;    // Optional margin, enabled for sellable items (type 1 and 2) Fx = ABS(value)*(1+margin)
    yield?: number;     // Can product be lost during creation? Yield = 0 .. 1
    dependencies?: [number, number, string][]; // Items that must be costed to use this item.
    // TODO: Request confirmation a dependency is inserted alongside another dependcy that already has that new dependency as a subdependency
    /*
        e.g. item: Finished Window
                dependencies: [Wood, Glass, Sand (ALERT - Dependency: Glass already contains Dependency: Sand are you sure you wish to add?)]
    */

}
  