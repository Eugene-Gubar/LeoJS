

var LeoJS                = {};
    LeoJS.ext            = {},
    LeoJS.ext.dom        = {},
    LeoJS.ext.oop        = {},
    LeoJS.ext.algorithms = {},
    LeoJS.ext.graphics   = {};



/* ----------------- begin: function constructor [isolated name space] ----------------- */

function LeoJS() {

    var args      = Array.prototype.slice.call(arguments),
        extension = (typeof args[0] == "string" && args[0]) ? args : args[0],
        callback  = args.pop(),
        i;

}

/* ------------------ end: function constructor [isolated name space] ------------------ */



/* --------------------- begin: DOM methods [manipulating elements] -------------------- */

LeoJS.ext.dom = function (dom) {
    console.log('It`s DOM!', dom);
}

/* ---------------------- end: DOM methods [manipulating elements] --------------------- */



/* -------------------- begin: OOP methods [creating smart objects] -------------------- */

LeoJS.ext.oop = function (oop) {

}

/* --------------------- end: OOP methods [creating smart objects] --------------------- */



/* ----------- begin: algorithm methods [creating basic algorithms (basics)] ----------- */

LeoJS.ext.algorithms = function (alg) {

}

/* ------------ end: algorithm methods [creating basic algorithms (basics)] ------------ */



/* ------------- begin: graphic methods [effects, display, animation, etc.] ------------ */

LeoJS.ext.graphics = function (grs) {

}

/* -------------- end: graphic methods [effects, display, animation, etc.] ------------- */