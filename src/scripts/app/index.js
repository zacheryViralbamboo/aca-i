/* jshint esversion: 6 */
var s;
// var s is created as a shortcut for module.settings. will be linked up upon initialisation.

var MODULE = (function(module){

  // reference: http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html

  module.settings = {
    // add settings or variables here that's accessible to the whole module
    initialised : false
  };

  module.functionName = function() {
    // do something here
  };

  // return the module
  return module;

  // below is scripts to import to this module.
  // MODULE || {} enables the scripts from different augments to be loaded asynchonously, creating the MODULE if it does not already exist.
  // note that module properties will not be able to run before initialisation is complete.
}(MODULE || {}, jQuery));
