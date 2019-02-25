import { Unit } from './unit';

/* Not included: Temperature. Non-linear transformations. */
export const UNITS: Unit[] = [
    {abbr:"nm", name:"nanometer", baseUnit:"m", factor:0.000000001, type:"length", system:"SI"},
    {abbr:"um", name:"micrometer", baseUnit:"m", factor:0.000001, type:"length", system:"SI"},
    {abbr:"mm", name:"millimeter", baseUnit:"m", factor:0.001, type:"length", system:"SI"},
    {abbr:"cm", name:"centimeter", baseUnit:"m", factor:0.01, type:"length", system:"SI"},
    {abbr:"dm", name:"decimeter", baseUnit:"m", factor:0.1, type:"length", system:"SI"},
    {abbr:"m", name:"meter", baseUnit:"m", factor:1, type:"length", system:"SI"},
    {abbr:"hm", name:"hectometer", baseUnit:"m", factor:100, type:"length", system:"SI"},
    {abbr:"km", name:"kilometer", baseUnit:"m", factor:1000, type:"length", system:"SI"},
    {abbr:"Mm", name:"megameter", baseUnit:"m", factor:1000000, type:"length", system:"SI"},
    {abbr:"Gm", name:"gigameter", baseUnit:"m", factor:1000000000, type:"length", system:"SI"},
    {abbr:"Tm", name:"terameter", baseUnit:"m", factor:1E+12, type:"length", system:"SI"},
    {abbr:"s", name:"second", baseUnit:"s", factor:1, type:"time", system:"SI"},
    {abbr:"minute", name:"minute", baseUnit:"s", factor:60, type:"time", system:"SI"},
    {abbr:"hour", name:"hour", baseUnit:"s", factor:3600, type:"time", system:"SI"},
    {abbr:"miles", name:"miles", baseUnit:"m", factor:1609.339966, type:"length", system:"British"},
    {abbr:"yards", name:"yards", baseUnit:"m", factor:0.914399981, type:"length", system:"British"},
    {abbr:"foot", name:"foot", baseUnit:"m", factor:0.3048, type:"length", system:"British"},
    {abbr:"in", name:"inch", baseUnit:"m", factor:0.0254, type:"length", system:"British"},
    {abbr:"nmile", name:"nautical mile", baseUnit:"m", factor:1852, type:"length", system:"British"},
    {abbr:"lb", name:"pound", baseUnit:"kg", factor:0.45359237, type:"mass", system:"English"},
    {abbr:"N", name:"Newton", baseUnit:"N", factor:1, type:"force", system:"SI"},
    {abbr:"lbf", name:"Pound Force", baseUnit:"N", factor:4.44822, type:"force", system:"SI"},
    {abbr:"kip", name:"Kips", baseUnit:"N", factor:4448.2216, type:"force", system:"British"},
    {abbr:"dyn", name:"Dyne", baseUnit:"N", factor:0.0001, type:"force", system:"British"},
    {abbr:"Pa", name:"Pascal", baseUnit:"Pa", factor:1, type:"pressure", system:"SI"},
    {abbr:"psi", name:"Pounds per Square Inch", baseUnit:"Pa", factor:6894.756836, type:"pressure", system:"British"},
    {abbr:"atm", name:"Atmosphere (standard)", baseUnit:"Pa", factor:101325, type:"pressure", system:"British"},
    {abbr:"bar", name:"Bar", baseUnit:"Pa", factor:1000000, type:"pressure", system:"British"},
    {abbr:"ksi", name:"Kips per Square Inch", baseUnit:"Pa", factor:6894757.28, type:"pressure", system:"British"},
    {abbr:"psf", name:"Pounds per Square Foot", baseUnit:"Pa", factor:47.88026047, type:"pressure", system:"British"},
    {abbr:"torr", name:"Torr", baseUnit:"Pa", factor:133.322403, type:"pressure", system:"British"},
    {abbr:"N*m", name:"Newton-Meter", baseUnit:"N*m", factor:1, type:"torque", system:"SI"},
    {abbr:"ft*lbf", name:"Foot-Pound Force", baseUnit:"N*m", factor:1.355817914, type:"torque", system:"British"},
    {abbr:"in*lbf", name:"Inch-Pound Force", baseUnit:"N*m", factor:0.112984829, type:"torque", system:"British"},
    {abbr:"m*kg", name:"Meter-Kilogram", baseUnit:"N*m", factor:0.101971619, type:"torque", system:"SI"},
    {abbr:"dam", name:"decameter", baseUnit:"m", factor:10, type:"length", system:"SI"},
    {abbr:"Pm", name:"petameter", baseUnit:"m", factor:1.00E+15, type:"length", system:"SI"},
    {abbr:"Em", name:"Exameter", baseUnit:"m", factor:1.00E+18, type:"length", system:"SI"},
    {abbr:"Zm", name:"Zettameter", baseUnit:"m", factor:1.00E+21, type:"length", system:"SI"},
    {abbr:"Ym", name:"yottameter", baseUnit:"m", factor:1.00E+24, type:"length", system:"SI"},
    {abbr:"pm", name:"picometer", baseUnit:"m", factor:1.00E-12, type:"length", system:"SI"},
    {abbr:"fm", name:"femtometer", baseUnit:"m", factor:1.00E-15, type:"length", system:"SI"},
    {abbr:"am", name:"attometer", baseUnit:"m", factor:1.00E-18, type:"length", system:"SI"},
    {abbr:"zm", name:"zeptometer", baseUnit:"m", factor:1.00E-21, type:"length", system:"SI"},
    {abbr:"ym", name:"yoctometer", baseUnit:"m", factor:1.00E-24, type:"length", system:"SI"},
    {abbr:"daPa", name:"decaPascal", baseUnit:"Pa", factor:10, type:"pressure", system:"SI"},
    {abbr:"hPa", name:"hectoPascal", baseUnit:"Pa", factor:100, type:"pressure", system:"SI"},
    {abbr:"kPa", name:"kiloPascal", baseUnit:"Pa", factor:1000, type:"pressure", system:"SI"},
    {abbr:"MPa", name:"MegaPascal", baseUnit:"Pa", factor:1000000, type:"pressure", system:"SI"},
    {abbr:"GPa", name:"GigaPascal", baseUnit:"Pa", factor:1000000000, type:"pressure", system:"SI"},
    {abbr:"TPa", name:"TeraPascal", baseUnit:"Pa", factor:1.00E+12, type:"pressure", system:"SI"},
    {abbr:"PPa", name:"petaPascal", baseUnit:"Pa", factor:1.00E+15, type:"pressure", system:"SI"},
    {abbr:"EPa", name:"ExaPascal", baseUnit:"Pa", factor:1.00E+18, type:"pressure", system:"SI"},
    {abbr:"ZPa", name:"zettaPascal", baseUnit:"Pa", factor:1.00E+21, type:"pressure", system:"SI"},
    {abbr:"YPa", name:"yottaPascal", baseUnit:"Pa", factor:1.00E+24, type:"pressure", system:"SI"},
    {abbr:"dPa", name:"deciPascal", baseUnit:"Pa", factor:0.1, type:"pressure", system:"SI"},
    {abbr:"cPa", name:"centiPascal", baseUnit:"Pa", factor:0.01, type:"pressure", system:"SI"},
    {abbr:"mPa", name:"milliPascal", baseUnit:"Pa", factor:0.001, type:"pressure", system:"SI"},
    {abbr:"uPa", name:"microPascal", baseUnit:"Pa", factor:0.000001, type:"pressure", system:"SI"},
    {abbr:"nPa", name:"nanoPascal", baseUnit:"Pa", factor:0.00000001, type:"pressure", system:"SI"},
    {abbr:"pPa", name:"picoPascal", baseUnit:"Pa", factor:1.00E-12, type:"pressure", system:"SI"},
    {abbr:"fPa", name:"femtoPascal", baseUnit:"Pa", factor:1.00E-15, type:"pressure", system:"SI"},
    {abbr:"aPa", name:"attoPascal", baseUnit:"Pa", factor:1.00E-18, type:"pressure", system:"SI"},
    {abbr:"zPa", name:"zeptoPascal", baseUnit:"Pa", factor:1.00E-21, type:"pressure", system:"SI"},
    {abbr:"yPa", name:"yoctoPascal", baseUnit:"Pa", factor:1.00E-24, type:"pressure", system:"SI"},
    {abbr:"kg", name:"kilogram", baseUnit:"kg", factor:1, type:"mass", system:"SI"},
    {abbr:"ft", name:"foot", baseUnit:"m", factor:0.3048, type:"length", system:"SI"},
    {abbr:"tonne", name:"metric ton", baseUnit:"kg", factor:1000, type:"mass",system:"SI"},
    {abbr:"ton", name:"short ton", baseUnit:"kg", factor:907.1847, type:"mass",system:"English"},
    {abbr:"ng", name:"nanogram", baseUnit:"kg", factor:1.00E-12, type:"mass", system:"SI"},
    {abbr:"ug", name:"microgram", baseUnit:"kg", factor:1.00E-09, type:"mass", system:"SI"},
    {abbr:"mg", name:"milligram", baseUnit:"kg", factor:0.000001, type:"mass", system:"SI"},
    {abbr:"cg", name:"centigram", baseUnit:"kg", factor:0.00001, type:"mass", system:"SI"},
    {abbr:"dg", name:"decigram", baseUnit:"kg", factor:0.0001, type:"mass", system:"SI"},
    {abbr:"g", name:"gram", baseUnit:"kg", factor:0.001, type:"mass", system:"SI"},
    {abbr:"hg", name:"hectogram", baseUnit:"kg", factor:10, type:"mass", system:"SI"},
    {abbr:"Mg", name:"megagram", baseUnit:"kg", factor:1000, type:"mass", system:"SI"},
    {abbr:"Gg", name:"gigagram", baseUnit:"kg", factor:1000000, type:"mass", system:"SI"},
    {abbr:"Tg", name:"teragram", baseUnit:"kg", factor:1000000000, type:"mass", system:"SI"},
    {abbr:"mph", name:"miles per hour", baseUnit:"m/s", factor:0.447039992, type:"velocity", system:"English"},
    {abbr:"cc", name:"cubic centimeter", baseUnit:"m^3", factor:0.001, type:"volume", system:"SI"},
    {abbr:"V", name:"Volt", baseUnit:"V", factor:1, type:"Voltage", system:"SI"},
    {abbr:"Coulomb", name:"Coulomb", baseUnit:"Coulomb", factor:1, type:"Electric Charge", system:"SI"},
    {abbr:"Ohm", name:"Ohm", baseUnit:"Ohm", factor:1, type:"Resistance", system:"SI"},
    {abbr:"W", name:"Watt", baseUnit:"W", factor:1, type:"Electric Power", system:"SI"},
    {abbr:"Farad", name:"Farad", baseUnit:"Farad", factor:1, type:"Capacitance", system:"SI"},
    {abbr:"H", name:"Henry", baseUnit:"H", factor:1, type:"Inductance", system:"SI"},
    {abbr:"S", name:"Siemens", baseUnit:"S", factor:1, type:"Conductance", system:"SI"},
    {abbr:"T", name:"Tesla", baseUnit:"T", factor:1, type:"Magnetic Field", system:"SI"},
    {abbr:"Wb", name:"Weber", baseUnit:"Wb", factor:1, type:"Magnetic Flux", system:"SI"},
    {abbr:"kWh", name:"Kilowatt Hour", baseUnit:"J", factor:3600000, type:"energy", system:"SI"},
    {abbr:"nFarad", name:"nanoFarad", baseUnit:"Farad", factor:1.00E-09, type:"Capacitance", system:"SI"},
    {abbr:"uFarad", name:"microFarad", baseUnit:"Farad", factor:0.000001, type:"Capacitance", system:"SI"},
    {abbr:"mFarad", name:"milliFarad", baseUnit:"Farad", factor:0.001, type:"Capacitance", system:"SI"},
    {abbr:"cFarad", name:"centiFarad", baseUnit:"Farad", factor:0.01, type:"Capacitance", system:"SI"},
    {abbr:"dFarad", name:"deciFarad", baseUnit:"Farad", factor:0.1, type:"Capacitance", system:"SI"},
    {abbr:"hFarad", name:"hectoFarad", baseUnit:"Farad", factor:100, type:"Capacitance", system:"SI"},
    {abbr:"kFarad", name:"kiloFarad", baseUnit:"Farad", factor:1000, type:"Capacitance", system:"SI"},
    {abbr:"MFarad", name:"MegaFarad", baseUnit:"Farad", factor:1000000, type:"Capacitance", system:"SI"},
    {abbr:"GFarad", name:"GigaFarad", baseUnit:"Farad", factor:1000000000, type:"Capacitance", system:"SI"},
    {abbr:"TFarad", name:"TeraFarad", baseUnit:"Farad", factor:1.00E+12, type:"Capacitance", system:"SI"},
    {abbr:"daFarad", name:"decaFarad", baseUnit:"Farad", factor:10, type:"Capacitance", system:"SI"},
    {abbr:"PFarad", name:"PetaFarad", baseUnit:"Farad", factor:1.00E+15, type:"Capacitance", system:"SI"},
    {abbr:"EFarad", name:"ExaFarad", baseUnit:"Farad", factor:1.00E+18, type:"Capacitance", system:"SI"},
    {abbr:"ZFarad", name:"ZettaFarad", baseUnit:"Farad", factor:1.00E+21, type:"Capacitance", system:"SI"},
    {abbr:"YFarad", name:"YottaFarad", baseUnit:"Farad", factor:1.00E+24, type:"Capacitance", system:"SI"},
    {abbr:"Ah", name:"Ampere-Hour", baseUnit:"Coulomb", factor:3600, type:"Electric Charge", system:"SI"},
    {abbr:"nCoulomb", name:"nanoCoulomb", baseUnit:"Coulomb", factor:1.00E-09, type:"Electric Charge", system:"SI"},
    {abbr:"uCoulomb", name:"microCoulomb", baseUnit:"Coulomb", factor:0.000001, type:"Electric Charge", system:"SI"},
    {abbr:"mCoulomb", name:"milliCoulomb", baseUnit:"Coulomb", factor:0.001, type:"Electric Charge", system:"SI"},
    {abbr:"cCoulomb", name:"centiCoulomb", baseUnit:"Coulomb", factor:0.01, type:"Electric Charge", system:"SI"},
    {abbr:"dCoulomb", name:"deciCoulomb", baseUnit:"Coulomb", factor:0.1, type:"Electric Charge", system:"SI"},
    {abbr:"hCoulomb", name:"hectoCoulomb", baseUnit:"Coulomb", factor:100, type:"Electric Charge", system:"SI"},
    {abbr:"kCoulomb", name:"killoCoulomb", baseUnit:"Coulomb", factor:1000, type:"Electric Charge", system:"SI"},
    {abbr:"GCoulomb", name:"GigaCoulomb", baseUnit:"Coulomb", factor:1000000000, type:"Electric Charge", system:"SI"},
    {abbr:"TCoulomb", name:"TeraCoulomb", baseUnit:"Coulomb", factor:1.00E+12, type:"Electric Charge", system:"SI"},
    {abbr:"MCoulomb", name:"MegaCoulomb", baseUnit:"Coulomb", factor:1000000, type:"Electric Charge", system:"SI"},
    {abbr:"daCoulomb", name:"decaCoulomb", baseUnit:"Coulomb", factor:10, type:"Electric Charge", system:"SI"},
    {abbr:"PCoulomb", name:"PicoCoulomb", baseUnit:"Coulomb", factor:1.00E-12, type:"Electric Charge", system:"SI"},
    {abbr:"ECoulomb", name:"ExaCoulomb", baseUnit:"Coulomb", factor:1.00E+18, type:"Electric Charge", system:"SI"},
    {abbr:"ZCoulomb", name:"ZettaCoulomb", baseUnit:"Coulomb", factor:1.00E+21, type:"Electric Charge", system:"SI"},
    {abbr:"YCoulomb", name:"YottaCoulomb", baseUnit:"Coulomb", factor:1.00E+24, type:"Electric Charge", system:"SI"},
    {abbr:"nH", name:"nanoHenry", baseUnit:"H", factor:1.00E-09, type:"Inductance", system:"SI"},
    {abbr:"uH", name:"microHenry", baseUnit:"H", factor:0.000001, type:"Inductance", system:"SI"},
    {abbr:"mH", name:"milliHenry", baseUnit:"H", factor:0.001, type:"Inductance", system:"SI"},
    {abbr:"cH", name:"centiHenry", baseUnit:"H", factor:0.01, type:"Inductance", system:"SI"},
    {abbr:"dH", name:"deciHenry", baseUnit:"H", factor:0.1, type:"Inductance", system:"SI"},
    {abbr:"hH", name:"hectoHenry", baseUnit:"H", factor:100, type:"Inductance", system:"SI"},
    {abbr:"kH", name:"kiloHenry", baseUnit:"H", factor:1000, type:"Inductance", system:"SI"},
    {abbr:"MH", name:"MegaHenry", baseUnit:"H", factor:1000000, type:"Inductance", system:"SI"},
    {abbr:"GH", name:"GigaHenry", baseUnit:"H", factor:1000000000, type:"Inductance", system:"SI"},
    {abbr:"TH", name:"TeraHenry", baseUnit:"H", factor:1.00E+12, type:"Inductance", system:"SI"},
    {abbr:"daH", name:"decaHenry", baseUnit:"H", factor:10, type:"Inductance", system:"SI"},
    {abbr:"PH", name:"PetaHenry", baseUnit:"H", factor:1.00E+15, type:"Inductance", system:"SI"},
    {abbr:"EH", name:"ExaHenry", baseUnit:"H", factor:1.00E+18, type:"Inductance", system:"SI"},
    {abbr:"ZH", name:"ZettaHenry", baseUnit:"H", factor:1.00E+21, type:"Inductance", system:"SI"},
    {abbr:"YH", name:"YottaHenry", baseUnit:"H", factor:1.00E+24, type:"Electric Charge", system:"SI"},
    {abbr:"nOhm", name:"nanoOhm", baseUnit:"Ohm", factor:1.00E-09, type:"Resistance", system:"SI"},
    {abbr:"uOhm", name:"microOhm", baseUnit:"Ohm", factor:0.000001, type:"Resistance", system:"SI"},
    {abbr:"mOhm", name:"milliOhm", baseUnit:"Ohm", factor:0.001, type:"Resistance", system:"SI"},
    {abbr:"cOhm", name:"centiOhm", baseUnit:"Ohm", factor:0.01, type:"Resistance", system:"SI"},
    {abbr:"dOhm", name:"deciOhm", baseUnit:"Ohm", factor:0.1, type:"Resistance", system:"SI"},
    {abbr:"hOhm", name:"hectoOhm", baseUnit:"Ohm", factor:100, type:"Resistance", system:"SI"},
    {abbr:"kOhm", name:"killoOhm", baseUnit:"Ohm", factor:1000, type:"Resistance", system:"SI"},
    {abbr:"MOhm", name:"MegaOhm", baseUnit:"Ohm", factor:1000000, type:"Resistance", system:"SI"},
    {abbr:"GOhm", name:"GigaOhm", baseUnit:"Ohm", factor:1000000000, type:"Resistance", system:"SI"},
    {abbr:"TOhm", name:"TeraOhm", baseUnit:"Ohm", factor:1.00E+12, type:"Resistance", system:"SI"},
    {abbr:"nV", name:"nanoVolt", baseUnit:"V", factor:1.00E-09, type:"Voltage", system:"SI"},
    {abbr:"uV", name:"microVolt", baseUnit:"V", factor:0.000001, type:"Voltage", system:"SI"},
    {abbr:"mV", name:"milliVolt", baseUnit:"V", factor:0.001, type:"Voltage", system:"SI"},
    {abbr:"cV", name:"centiVolt", baseUnit:"V", factor:0.01, type:"Voltage", system:"SI"},
    {abbr:"dV", name:"deciVolt", baseUnit:"V", factor:0.1, type:"Voltage", system:"SI"},
    {abbr:"hV", name:"hectoVolt", baseUnit:"V", factor:100, type:"Voltage", system:"SI"},
    {abbr:"kV", name:"kiloVolt", baseUnit:"V", factor:1000, type:"Voltage", system:"SI"},
    {abbr:"MV", name:"MegaVolt", baseUnit:"V", factor:1000000, type:"Voltage", system:"SI"},
    {abbr:"GV", name:"TeraVolt", baseUnit:"V", factor:1000000000, type:"Voltage", system:"SI"},
    {abbr:"TV", name:"TeraVolt", baseUnit:"V", factor:1.00E+12, type:"Voltage", system:"SI"},
    {abbr:"daV", name:"decaVolt", baseUnit:"V", factor:10, type:"Voltage", system:"SI"},
    {abbr:"ZV", name:"ZettaVolt", baseUnit:"V", factor:1.00E+21, type:"Voltage", system:"SI"},
    {abbr:"YZ", name:"YottaVolt", baseUnit:"V", factor:1.00E+24, type:"Voltage", system:"SI"},
    {abbr:"nWb", name:"nanoWeber", baseUnit:"Wb", factor:1.00E-09, type:"Magnetic Flux", system:"SI"},
    {abbr:"uWb", name:"microWeber", baseUnit:"Wb", factor:0.000001, type:"Magnetic Flux", system:"SI"},
    {abbr:"mWb", name:"milliWeber", baseUnit:"Wb", factor:0.001, type:"Magnetic Flux", system:"SI"},
    {abbr:"cWb", name:"centiWeber", baseUnit:"Wb", factor:0.01, type:"Magnetic Flux", system:"SI"},
    {abbr:"dWb", name:"deciWeber", baseUnit:"Wb", factor:0.1, type:"Magnetic Flux", system:"SI"},
    {abbr:"hWb", name:"hectoWeber", baseUnit:"Wb", factor:100, type:"Magnetic Flux", system:"SI"},
    {abbr:"kWb", name:"kiloWeber", baseUnit:"Wb", factor:1000, type:"Magnetic Flux", system:"SI"},
    {abbr:"MWb", name:"MegaWeber", baseUnit:"Wb", factor:1000000, type:"Magnetic Flux", system:"SI"},
    {abbr:"GWb", name:"GigaWeber", baseUnit:"Wb", factor:1000000000, type:"Magnetic Flux", system:"SI"},
    {abbr:"TWb", name:"TeraWeber", baseUnit:"Wb", factor:1.00E+12, type:"Magnetic Flux", system:"SI"},
    {abbr:"daWb", name:"decaWeber", baseUnit:"Wb", factor:10, type:"Magnetic Flux", system:"SI"},
    {abbr:"ZWb", name:"ZettaWeber", baseUnit:"Wb", factor:1.00E+21, type:"Magnetic Flux", system:"SI"},
    {abbr:"YWb", name:"ZettaWeber", baseUnit:"Wb", factor:1.00E+24, type:"Magnetic Flux", system:"SI"},
    {abbr:"ns", name:"nanosecond", baseUnit:"s", factor:1.00E-09, type:"time", system:"SI"},
    {abbr:"us", name:"microsecond", baseUnit:"s", factor:0.000001, type:"time", system:"SI"},
    {abbr:"ms", name:"millisecond", baseUnit:"s", factor:0.001, type:"time", system:"SI"},
    {abbr:"cs", name:"centisecond", baseUnit:"s", factor:0.01, type:"time", system:"SI"},
    {abbr:"ds", name:"decisecond", baseUnit:"s", factor:0.1, type:"time", system:"SI"},
    {abbr:"hs", name:"hectosecond", baseUnit:"s", factor:100, type:"time", system:"SI"},
    {abbr:"ks", name:"kilosecond", baseUnit:"s", factor:1000, type:"time", system:"SI"},
    {abbr:"Ms", name:"Megasecond", baseUnit:"s", factor:1000000, type:"time", system:"SI"},
    {abbr:"Gs", name:"Gigasecond", baseUnit:"s", factor:1000000000, type:"time", system:"SI"},
    {abbr:"Ts", name:"Terasecond", baseUnit:"s", factor:1.00E+12, type:"time", system:"SI"},
    {abbr:"das", name:"decasecond", baseUnit:"s", factor:10, type:"time", system:"SI"},
    {abbr:"Zs", name:"Zettasecond", baseUnit:"s", factor:1.00E+21, type:"time", system:"SI"},
    {abbr:"Ys", name:"Yottasecond", baseUnit:"s", factor:1.00E+24, type:"time", system:"SI"},
    {abbr:"nT", name:"nanoTesla", baseUnit:"T", factor:1.00E-09, type:"Magnetic Field", system:"SI"},
    {abbr:"uT", name:"microTesla", baseUnit:"T", factor:0.000001, type:"Magnetic Field", system:"SI"},
    {abbr:"mT", name:"milliTesla", baseUnit:"T", factor:0.001, type:"Magnetic Field", system:"SI"},
    {abbr:"cT", name:"centiTesla", baseUnit:"T", factor:0.01, type:"Magnetic Field", system:"SI"},
    {abbr:"dT", name:"deciTesla", baseUnit:"T", factor:0.1, type:"Magnetic Field", system:"SI"},
    {abbr:"hT", name:"hectoTesla", baseUnit:"T", factor:100, type:"Magnetic Field", system:"SI"},
    {abbr:"kT", name:"kiloTesla", baseUnit:"T", factor:1000, type:"Magnetic Field", system:"SI"},
    {abbr:"MT", name:"MegaTesla", baseUnit:"T", factor:1000000, type:"Magnetic Field", system:"SI"},
    {abbr:"GT", name:"GigaTesla", baseUnit:"T", factor:1000000000, type:"Magnetic Field", system:"SI"},
    {abbr:"TT", name:"TeraTesla", baseUnit:"T", factor:1.00E+12, type:"Magnetic Field", system:"SI"},
    {abbr:"daT", name:"decaTesla", baseUnit:"T", factor:10, type:"Magnetic Field", system:"SI"},
    {abbr:"ZT", name:"ZettaTesla", baseUnit:"T", factor:1.00E+21, type:"Magnetic Field", system:"SI"},
    {abbr:"YT", name:"YottaTesla", baseUnit:"T", factor:1.00E+24, type:"Magnetic Field", system:"SI"},
    {abbr:"nW", name:"nanoWatt", baseUnit:"W", factor:1.00E-09, type:"Electric Power", system:"SI"},
    {abbr:"uW", name:"microWatt", baseUnit:"W", factor:0.000001, type:"Electric Power", system:"SI"},
    {abbr:"mW", name:"milliWatt", baseUnit:"W", factor:0.001, type:"Electric Power", system:"SI"},
    {abbr:"cW", name:"centiWatt", baseUnit:"W", factor:0.01, type:"Electric Power", system:"SI"},
    {abbr:"dW", name:"deciWatt", baseUnit:"W", factor:0.1, type:"Electric Power", system:"SI"},
    {abbr:"hW", name:"hectoWatt", baseUnit:"W", factor:100, type:"Electric Power", system:"SI"},
    {abbr:"kW", name:"kiloWatt", baseUnit:"W", factor:1000, type:"Electric Power", system:"SI"},
    {abbr:"MW", name:"MegaWatt", baseUnit:"W", factor:1000000, type:"Electric Power", system:"SI"},
    {abbr:"GW", name:"GigaWatt", baseUnit:"W", factor:1000000000, type:"Electric Power", system:"SI"},
    {abbr:"TW", name:"TeraWatt", baseUnit:"W", factor:1.00E+12, type:"Electric Power", system:"SI"},
    {abbr:"daW", name:"decaWatt", baseUnit:"W", factor:10, type:"Electric Power", system:"SI"},
    {abbr:"ZW", name:"ZettaWatt", baseUnit:"W", factor:1.00E+21, type:"Electric Power", system:"SI"},
    {abbr:"YW", name:"YottaWatt", baseUnit:"W", factor:1.00E+24, type:"Electric Power", system:"SI"},
    {abbr:"nS", name:"nanoSeimens", baseUnit:"S", factor:1.00E-09, type:"Conductance", system:"SI"},
    {abbr:"uS", name:"microSiemens", baseUnit:"S", factor:0.000001, type:"Conductance", system:"SI"},
    {abbr:"mS", name:"milliSiemens", baseUnit:"S", factor:0.001, type:"Conductance", system:"SI"},
    {abbr:"cS", name:"centiSiemens", baseUnit:"S", factor:0.01, type:"Conductance", system:"SI"},
    {abbr:"dS", name:"deciSiemens", baseUnit:"S", factor:0.1, type:"Conductance", system:"SI"},
    {abbr:"hS", name:"hectoSiemens", baseUnit:"S", factor:100, type:"Conductance", system:"SI"},
    {abbr:"kS", name:"kiloSiemens", baseUnit:"S", factor:1000, type:"Conductance", system:"SI"},
    {abbr:"MS", name:"MegaSiemens", baseUnit:"S", factor:1000000, type:"Conductance", system:"SI"},
    {abbr:"GS", name:"GigaSiemens", baseUnit:"S", factor:1000000000, type:"Conductance", system:"SI"},
    {abbr:"TS", name:"TeraSiemens", baseUnit:"S", factor:1.00E+12, type:"Conductance", system:"SI"},
    {abbr:"daS", name:"decaSiemens", baseUnit:"S", factor:10, type:"Conductance", system:"SI"},
    {abbr:"ZS", name:"ZettaSiemens", baseUnit:"S", factor:1.00E+21, type:"Conductance", system:"SI"},
    {abbr:"YS", name:"YottaSiemens", baseUnit:"S", factor:1.00E+24, type:"Conductance", system:"SI"},
    {abbr:"revolutions", name:"Revolutions", baseUnit:"rad", factor:6.283185307, type:"Angle", system:"SI"},
    {abbr:"cycles", name:"Cycles", baseUnit:"rad", factor:6.283185307, type:"Angle", system:"SI"},
    {abbr:"degrees", name:"degrees", baseUnit:"rad", factor:0.017453293, type:"Angle", system:"SI"},
    {abbr:"degree", name:"degrees", baseUnit:"rad", factor:0.017453293, type:"Angle", system:"SI"},
    {abbr:"deg", name:"degrees", baseUnit:"rad", factor:0.017453293, type:"Angle", system:"SI"},
    {abbr:"rad", name:"radians", baseUnit:"rad", factor:1, type:"Angle", system:"SI"},
    {abbr:"acre", name:"acre", baseUnit:"acre", factor:4046.856422, type:"area", system:"SI"},
    {abbr:"hectare", name:"hectare", baseUnit:"acre", factor:10000, type:"area", system:"SI"},
    {abbr:"twp", name:"township", baseUnit:"twp", factor:93239571.97, type:"area", system:"SI"},
    {abbr:"J", name:"Joule", baseUnit:"J", factor:1, type:"Moment", system:"SI"},
    {abbr:"N*m", name:"Newton-meter", baseUnit:"J", factor:1, type:"energy", system:"SI"},
    {abbr:"mol", name:"mole", baseUnit:"mol", factor:1, type:"mol", system:"SI"},
    {abbr:"ft-lbf", name:"foot-pound", baseUnit:"J", factor:1.355817948, type:"energy", system:"SI"},
    {abbr:"years", name:"Year", baseUnit:"s", factor:31536000, type:"time", system:"SI"},
    {abbr:"AU", name:"Astronomical Unit", baseUnit:"m", factor:1.49598E+11, type:"length", system:"SI"},
    {abbr:"K", name:"Kelvin", baseUnit:"K", factor:1, type:"Temperature", system:"SI"},
    {abbr:"kN", name:"kiloNewton", baseUnit:"N", factor:1000, type:"Force", system:"SI"},
    {abbr:"minutes", name:"Minute", baseUnit:"s", factor:60, type:"time", system:"SI"},
    {abbr:"days", name:"Days", baseUnit:"s", factor:86400, type:"time", system:"SI"},
    {abbr:"weeks", name:"Weeks", baseUnit: "s", factor:604800, type:"time", system:"SI"},
    {abbr:"months", name: "Months", baseUnit: "s", factor: 2629800, type:"time",system:"SI"},
    {abbr:"years", name: "Years", baseUnit: "s", factor: 31557600, type:"time",system:"SI"},
    {abbr:"A", name:"Ampere", baseUnit:"A", factor:1, type:"Electric Current", system:"SI"},
    {abbr:"nA", name:"nanoAmpere", baseUnit:"A", factor:1.00E-09, type:"Electric Current", system:"SI"},
    {abbr:"uA", name:"microAmpere", baseUnit:"A", factor:0.000001, type:"Electric Current", system:"SI"},
    {abbr:"mA", name:"milliAmpere", baseUnit:"A", factor:0.001, type:"Electric Current", system:"SI"},
    {abbr:"cA", name:"centiAmpere", baseUnit:"A", factor:0.01, type:"Electric Current", system:"SI"},
    {abbr:"dA", name:"deciAmpere", baseUnit:"A", factor:0.1, type:"Electric Current", system:"SI"},
    {abbr:"hA", name:"hectoAmpere", baseUnit:"A", factor:100, type:"Electric Current", system:"SI"},
    {abbr:"kA", name:"kiloAmpere", baseUnit:"A", factor:1000, type:"Electric Current", system:"SI"},
    {abbr:"MA", name:"MegaAmpere", baseUnit:"A", factor:1000000, type:"Electric Current", system:"SI"},
    {abbr:"GA", name:"GigaAmpere", baseUnit:"A", factor:1000000000, type:"Electric Current", system:"SI"},
    {abbr:"TA", name:"TeraAmpere", baseUnit:"A", factor:1.00E+12, type:"Electric Current", system:"SI"},
    {abbr:"daA", name:"decaAmpere", baseUnit:"A", factor:10, type:"Electric Current", system:"SI"},
    {abbr:"ZA", name:"ZettaAmpere", baseUnit:"A", factor:1.00E+21, type:"Electric Current", system:"SI"},
    {abbr:"YA", name:"YottaAmpere", baseUnit:"A", factor:1.00E+24, type:"Electric Current", system:"SI"},
    {abbr:"pFarad", name:"picoFarad", baseUnit:"Farad", factor:1.00E-12, type:"Capacitance", system:"SI"},
    {abbr:"molecules", name:"molecules", baseUnit:"molecules", factor:1, type:"molecules", system:"SI"},
    {abbr:"Gallons", name:"Gallons", baseUnit:"Gallons", factor:0.00378541, type:"volume", system:"SI"},
    {abbr:"UK Gallons", name:"UK Gallons", baseUnit:"UK Gallons", factor:0.0045, type:"volume", system:"SI"},
    {abbr:"Liters", name:"Liters", baseUnit:"Liters", factor:0.001, type:"volume", system:"SI"},
    {abbr:"Hz", name:"Hertz", baseUnit:"Hz", factor:1, type:"angular velocity", system:"SI"},
    {abbr:"slug", name:"slug", baseUnit:"kg", factor:14.5939, type:"mass", system:"SI"},
    {abbr:"daN", name:"decaNewton", baseUnit:"N", factor:10, type:"force", system:"SI"},
    {abbr:"hN", name:"hectoNewton", baseUnit:"N", factor:100, type:"force", system:"SI"},
    {abbr:"MN", name:"MegaNewton", baseUnit:"N", factor:1000000, type:"force", system:"SI"},
    {abbr:"GN", name:"GigaNewton", baseUnit:"N", factor:1000000000, type:"force", system:"SI"},
    {abbr:"TN", name:"TeraNewton", baseUnit:"N", factor:1.00E+12, type:"force", system:"SI"},
    {abbr:"PN", name:"petaNewton", baseUnit:"N", factor:1.00E+15, type:"force", system:"SI"},
    {abbr:"EN", name:"ExaNewton", baseUnit:"N", factor:1.00E+18, type:"force", system:"SI"},
    {abbr:"ZN", name:"zettaNewton", baseUnit:"N", factor:1.00E+21, type:"force", system:"SI"},
    {abbr:"YN", name:"yottaNewton", baseUnit:"N", factor:1.00E+24, type:"force", system:"SI"},
    {abbr:"dN", name:"deciNewton", baseUnit:"N", factor:0.1, type:"force", system:"SI"},
    {abbr:"cN", name:"centiNewton", baseUnit:"N", factor:0.01, type:"force", system:"SI"},
    {abbr:"mN", name:"milliNewton", baseUnit:"N", factor:0.001, type:"force", system:"SI"},
    {abbr:"uN", name:"microNewton", baseUnit:"N", factor:0.000001, type:"force", system:"SI"},
    {abbr:"nN", name:"nanoNewton", baseUnit:"N", factor:0.00000001, type:"force", system:"SI"},
    {abbr:"pN", name:"picoNewton", baseUnit:"N", factor:1.00E-12, type:"force", system:"SI"},
    {abbr:"fN", name:"femtoNewton", baseUnit:"N", factor:1.00E-15, type:"force", system:"SI"},
    {abbr:"aN", name:"attoNewton", baseUnit:"N", factor:1.00E-18, type:"force", system:"SI"},
    {abbr:"zN", name:"zeptoNewton", baseUnit:"N", factor:1.00E-21, type:"force", system:"SI"},
    {abbr:"yN", name:"yoctoNewton", baseUnit:"N", factor:1.00E-24, type:"force", system:"SI"},
    {abbr:"hp", name:"Horse Power", baseUnit:"W", factor:745.7, type:"Power", system:"SI"},
    {abbr:"rpm", name:"Revolutions per Minute", baseUnit:"rpm", factor:0.104719755, type:"Angular Velocity", system:"SI"},
    {abbr:"St", name:"Stokes", baseUnit:"St", factor:0.0001, type:"Kinematic Viscocity", system:"SI"},
    {abbr:"daSt", name:"decaStokes", baseUnit:"St", factor:10, type:"Kinematic Viscocity", system:"SI"},
    {abbr:"hSt", name:"hectoStokes", baseUnit:"St", factor:100, type:"Kinematic Viscocity", system:"SI"},
    {abbr:"MSt", name:"MegaStokes", baseUnit:"St", factor:1000000, type:"Kinematic Viscocity", system:"SI"},
    {abbr:"GSt", name:"GigaStokes", baseUnit:"St", factor:1000000000, type:"Kinematic Viscocity", system:"SI"},
    {abbr:"TSt", name:"TeraStokes", baseUnit:"St", factor:1.00E+12, type:"Kinematic Viscocity", system:"SI"},
    {abbr:"PSt", name:"petaStokes", baseUnit:"St", factor:1.00E+15, type:"Kinematic Viscocity", system:"SI"},
    {abbr:"ESt", name:"ExaStokes", baseUnit:"St", factor:1.00E+18, type:"Kinematic Viscocity", system:"SI"},
    {abbr:"ZSt", name:"zettaStokes", baseUnit:"St", factor:1.00E+21, type:"Kinematic Viscocity", system:"SI"},
    {abbr:"YSt", name:"yottaStokes", baseUnit:"St", factor:1.00E+24, type:"Kinematic Viscocity", system:"SI"},
    {abbr:"dSt", name:"deciStokes", baseUnit:"St", factor:0.1, type:"Kinematic Viscocity", system:"SI"},
    {abbr:"cSt", name:"centiStokes", baseUnit:"St", factor:0.01, type:"Kinematic Viscocity", system:"SI"},
    {abbr:"mSt", name:"milliStokes", baseUnit:"St", factor:0.001, type:"Kinematic Viscocity", system:"SI"},
    {abbr:"uSt", name:"microStokes", baseUnit:"St", factor:0.000001, type:"Kinematic Viscocity", system:"SI"},
    {abbr:"nSt", name:"nanoStokes", baseUnit:"St", factor:0.00000001, type:"Kinematic Viscocity", system:"SI"},
    {abbr:"pSt", name:"picoStokes", baseUnit:"St", factor:1.00E-12, type:"Kinematic Viscocity", system:"SI"},
    {abbr:"fSt", name:"femtoStokes", baseUnit:"St", factor:1.00E-15, type:"Kinematic Viscocity", system:"SI"},
    {abbr:"aSt", name:"attoStokes", baseUnit:"St", factor:1.00E-18, type:"Kinematic Viscocity", system:"SI"},
    {abbr:"zSt", name:"zeptoStokes", baseUnit:"St", factor:1.00E-21, type:"Kinematic Viscocity", system:"SI"},
    {abbr:"ySt", name:"yoctoStokes", baseUnit:"St", factor:1.00E-24, type:"Kinematic Viscocity", system:"SI"},
    {abbr:"Btu", name:"Joule", baseUnit:"J", factor:1055.06, type:"Moment", system:"SI"},
];