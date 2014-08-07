'use strict';
var myMammal = {
    name : 'Herb the Mammal',
    
    getName : function() {
      return this.name;
    },

    says : function() {
        return this.saying || '';
    }
};