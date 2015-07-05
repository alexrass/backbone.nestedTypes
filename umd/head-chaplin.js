(function(root, factory) {
    if(typeof exports === 'object') {
        module.exports = factory(require('lodash'), require('backbone'));
    }
    else if(typeof define === 'function' && define.amd) {
        define(['lodash', 'backbone', 'chaplin'], function( _, Backbone, Chaplin ){
            Chaplin.Events || ( Chaplin.Events = Backbone.Events );
            Chaplin.History || ( Chaplin.History = Backbone.History );
            Chaplin.$ || ( Chaplin.$ = Backbone.$ );
	        return factory( _, Chaplin );
	    });
    }
    else {
        root.Nested = factory(root._, root.Backbone);
    }
}(this, function( _, Backbone ) {
    var require = function(name) {
        return { lodash: _, backbone : Backbone }[name];
    };
