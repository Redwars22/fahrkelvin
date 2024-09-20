"use strict";
/*
MIT License

Copyright (c) 2024 AndrewNation

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = convert;
//Code written by AndrewNation (@Redwars22)
var CONSTANTS = {
    KELVIN: 273.15,
    CELSIUS: 32,
    FAHR: 459.67
};
/**
 * Converts a temperature value from one scale to another.
 *
 * @param {ITemperature} arg - The temperature object to convert.
 * @param {number} arg.value - The temperature value to be converted.
 * @param {TScales} arg.from - The scale of the input temperature (Kelvin, Fahrenheit, or Celsius).
 * @param {TScales} arg.to - The scale to convert the temperature to (Kelvin, Fahrenheit, or Celsius).
 * @returns {number|null} The converted temperature value, or null if the conversion cannot be performed.
 */
function convert(arg) {
    var x = arg.value;
    switch (arg.from) {
        case "Kelvin":
            if (arg.to == "Fahrenheit")
                return ((x * 9 / 5) - CONSTANTS.FAHR);
            if (arg.to == "Celsius")
                return (x - CONSTANTS.KELVIN);
            break;
        case "Fahrenheit":
            if (arg.to == "Kelvin")
                return ((x + CONSTANTS.FAHR) * 5 / 9);
            if (arg.to == "Celsius")
                return ((x - CONSTANTS.CELSIUS) * 5 / 9);
            break;
        case "Celsius":
            if (arg.to == "Kelvin")
                return (x + CONSTANTS.KELVIN);
            if (arg.to == "Fahrenheit")
                return ((x * 9 / 5) + CONSTANTS.CELSIUS);
            break;
    }
    return null;
}
