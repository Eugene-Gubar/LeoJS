/*
 * @Author: eugene.gubar 
 * @Date:   2017-03-23 00:41:31 
 * @Last Modified by: eugene.gubar
 * @Last Modified time: 2017-03-23 00:41:54
 */

/* ----------------- begin: function constructor [isolated name space] ----------------- */

function LeoJS() {

    var args      = Array.prototype.slice.call(arguments),
        callback  = args.pop(),
        extension = (typeof args[0] == 'string' && args[0]) ? args : args[0],
        i;

        if (!(this instanceof LeoJS)) {
            return new LeoJS(extension, callback);
        }

        if (extension === undefined) {
            extension = [];
            for (i in LeoJS.ext) {
                if (LeoJS.ext.hasOwnProperty(i)) {
                    extension.push(i);
                }
            }
        }

        for (i = 0; i < extension.length; i++) {
            if (LeoJS.ext.hasOwnProperty(extension[i])) {
                LeoJS.ext[extension[i]](this);
            }
        }

        callback(this);

}

/* ------------------ end: function constructor [isolated name space] ------------------ */



    /*  ------------- begin: [initialize the objects] ------------- */

    LeoJS.ext            = {},
    LeoJS.ext.dom        = {},
    LeoJS.ext.oop        = {},
    LeoJS.ext.algorithms = {},
    LeoJS.ext.graphics   = {};

    /*  ------------- begin: [initialize the objects] ------------- */
    
    

/* --------------------- begin: DOM methods [manipulating elements] -------------------- */

LeoJS.ext.dom = function (dom) {

    dom.getElements = function (select, all) {
        return !all ? document.querySelector(select) : document.querySelectorAll(select);
    }

    dom.copyNodeInFragment = function (node, callback) {
        var fragment = document.createDocumentFragment(),
            clone    = node.cloneNode(true);
        
        fragment.appendChild(clone);

        if (typeof callback != "function") {
            callback = false;
        }

        if (callback) {
            callback(fragment);
        }

        return fragment;
    }

    dom.insertHTML = function (option, html, callback) {
        
    }

}

/* ---------------------- end: DOM methods [manipulating elements] --------------------- */



/* -------------------- begin: OOP methods [creating smart objects] -------------------- */

LeoJS.ext.oop = function (oop) {
    oop.test = function () {}
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