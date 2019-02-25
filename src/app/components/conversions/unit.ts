export class Unit {
    abbr: string;       // Abbreviation, e.g. "inches" => abbr: "in"
    name: string;       // Name of unit, e.g. "millimeter"
    baseUnit: string;   // Base unit, e.g. "meters", "leters", "kilograms"
    factor: number;     // e.g. 1 centimeter = factor(0.01) * 1 meter 
    type: string;       // length, mass, etc
    system: string;     // SI, British, etc
}


