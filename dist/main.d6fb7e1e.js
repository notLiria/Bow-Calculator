parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"JoTk":[function(require,module,exports) {
"use strict";function t(t,e,o){return t*t+e*e/4-o*o/4>0}function e(t,e,r){for(var a=t,n=r,c=e,u=a,p=o(a,n,c,u);Math.abs(p)>.01;)p=o(a,n,c,u+=.01);return u}function o(t,e,o,r){return Math.pow(r,2)+Math.pow(r-t,2)-2*r*(r-t)*Math.cos(o/(2*r))-Math.pow(e/2,2)}function r(t,e){return t-Math.sqrt(Math.pow(t,2)-Math.pow(e,2))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.check_values=t,exports.find_root=e,exports.calc_value=o,exports.calc_p=r;
},{}],"jP6t":[function(require,module,exports) {
"use strict";var e=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("./calculations")),n=document.getElementById("calc");function r(){var e=parseFloat(document.getElementById("length").value),n=parseFloat(document.getElementById("string-length").value),r=parseFloat(document.getElementById("draw-length").value),l=parseFloat(document.getElementById("tillering-gizmo").value);if(!1===t.check_values(r,e,n))document.getElementById("error").innerText="ERROR YOU HAVE AN INVALID COMBINATION OF VALUES";else{document.getElementById("error").innerText="";var a=t.find_root(r,e,n),o=t.calc_p(a,l);document.getElementById("radius").innerText="R (in cm) : "+a.toString(),document.getElementById("p").innerText="P (in cm) : "+o.toString()}}n.addEventListener("click",r);
},{"./calculations":"JoTk"}]},{},["jP6t"], null)
//# sourceMappingURL=/main.d6fb7e1e.js.map