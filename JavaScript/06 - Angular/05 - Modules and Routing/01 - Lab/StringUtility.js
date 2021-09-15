"use strict";
var StringUtility;
(function (StringUtility) {
    function toCapital(str) { return str.toUpperCase(); }
    StringUtility.toCapital = toCapital;
    function toLower(str) { return str.toLowerCase(); }
    StringUtility.toLower = toLower;
})(StringUtility || (StringUtility = {}));
