/* jshint esversion: 6 */

var MODULE = (function(module){

  // sample init function added to MODULE
  // reference: http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html
  MODULE.init = function() {
    s = module.settings;
    // do more stuff here
  };



  // return the buffed up module
  return module;

}(MODULE || {}, jQuery));

// after DOM is completely loaded, run MODULE.init();
