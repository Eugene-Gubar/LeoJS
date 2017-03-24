/*
 * @Author: eugene.gubar 
 * @Date:   2017-03-23 00:41:31 
 */

/* ----------------- begin: function constructor [isolated name space] ----------------- */

/**
 * Function LeoJS() - The main function of the constructor to implement [isolated name space],
 * each module provides a environment that is isolated from other modules and their namespaces. 
 */
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

/*=======================================================================================*/

/* --------------------------- begin: set prototype [LeoJS] ---------------------------- */

/**
 * Prototype setCallback - Performs a callback function for the methods of the plug-ins.
 * @param {function} callback - function callback
 * @param {any} arg - argument(s) for callback
 */
LeoJS.prototype.setCallback = function (callback, arg) {
        if (typeof callback !== "function") {
            callback = false;
            return;
        }

        if (callback && arguments.length === 2) {
            callback(arg);
        } else if (callback && arguments.length === 1) {
            callback();
        }
}

/* ---------------------------- end: set prototype [LeoJS] ----------------------------- */

/*=======================================================================================*/

    /*  ------------- begin: [initialize the objects] ------------- */

    LeoJS.ext            = {},
    LeoJS.ext.dom        = {},
    LeoJS.ext.oop        = {},
    LeoJS.ext.algorithms = {},
    LeoJS.ext.graphics   = {},
    LeoJS.ext.https      = {};

    /*  ------------- begin: [initialize the objects] ------------- */
    
   

/* --------------------- begin: DOM methods [manipulating elements] -------------------- */

LeoJS.ext.dom = function (dom) {
    
    /**
     * Method getElements - Selects an element(s), node(s).
     * @param {string} select - selector for find elements in the DOM
     * @param {boolean} all - parameter for search All elements [optional]
     */
    dom.getElements = function (select, all) {
        if (select === undefined) {return}

        return !all ? document.querySelector(select) : document.querySelectorAll(select);
    }

    dom.addClass = function (el, c) {
        if (el === null || c === undefined) {return}

        var i = 0, length = el.length;
        c = ' ' + c;

        if (length === undefined && typeof el === 'object') {
            el.className += c;
        } else if (length >= 1) {
            
            for (i; i < length; i++) {
                el[i].className += c;
            }

        }
    }

    dom.removeClass = function (el, c) {

    }

    /**
     * Method copyNodeInFragment - Copies the node contains other nodes(if any) in the DOM fragment,
     * which you can modify, add, or other methods that change the DOM.
     * After all the changes (manipulations) you can add the prepared fragment to the DOM.
     * Implemented for safe changes and performance.
     * @param  {node} node - node for copying
     * @param  {callback} callback - function callback [optional], you can add a parameter for result (fragment)
     * @return {node} - return node fragment
     */
    dom.copyNodeInFragment = function (node, callback) {
        if (node === undefined || node === null) {return}

        var fragment = document.createDocumentFragment(),
            clone    = node.cloneNode(true);
        
        fragment.appendChild(clone);

        dom.setCallback(callback, fragment);
        return fragment;
    }

    /**
     * Method insertHTML - Inserts the html code.
     * @param  {node} el - element
     * @param  {string} pos - options: 'beforeBegin', 'afterBegin', 'beforeEnd', 'afterEnd'
     * @param  {string} html - html code for paste
     * @param  {function} callback - function callback [optional]
     * @return {HRESULT} - return S_OK or error
     */
    dom.insertHTML = function (el, pos, html, callback) {
        if (el   === null || el   === undefined ||
            pos  === null || pos  === undefined ||
            html === null || html === undefined) 
        {
            return
        }

        var res = el.insertAdjacentHTML(pos, html);

        dom.setCallback(res);
        return res;
    }

}

/* ---------------------- end: DOM methods [manipulating elements] --------------------- */



/* -------------------- begin: OOP methods [creating smart objects] -------------------- */

LeoJS.ext.oop = function (oop) {

    /**
     * Method createSingleton - Creates a simple singleton pattern.
     * Later (after calling the method createSingleton) you can add different functionality,
     * for example through a prototype or static methods, etc.
     */
    oop.createSingleton = function () {
        var Singleton;
        (function () {
            var instance;
            Singleton = function Singleton() {
                if (instance) {
                    return instance;
                }
                instance = this;

                instance.name = 'Generated "singleton pattern"';
            };
        }());
        return Singleton;
    }

}

/* --------------------- end: OOP methods [creating smart objects] --------------------- */



/* ----------- begin: algorithm methods [creating basic algorithms (basics)] ----------- */

LeoJS.ext.algorithms = function (alg) {
    alg.testAlgorithms = function () {}
}

/* ------------ end: algorithm methods [creating basic algorithms (basics)] ------------ */



/* ------------- begin: graphic methods [effects, display, animation, etc.] ------------ */

LeoJS.ext.graphics = function (grs) {
    grs.testGraphics = function () {}
}

/* -------------- end: graphic methods [effects, display, animation, etc.] ------------- */



/* ------------------- begin: https methods [ajax, json, route etc.] ------------------- */

LeoJS.ext.https = function (https) {
    https.testHttps = function () {}
}

/* -------------------- end: https methods [ajax, json, route etc.] -------------------- */