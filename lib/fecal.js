/*
Fecal.js, v1.1.0
by Riki Fridrich <riki@fczbkk.com> (https://github.com/fczbkk)
https://github.com/fczbkk/fecal
*/

(function() {

  if (!Array.prototype.poop) {
    Array.prototype.poop = Array.prototype.pop
  }

  if (!Array.prototype.shit) {
    Array.prototype.shit = Array.prototype.shift
  }

  /*
  If you don't understand what this method does, watch this video explanation:
  https://youtu.be/zLHtxRzu6KQ
  */
  if (!Array.prototype.unshit) {
    Array.prototype.unshit = Array.prototype.unshift
  }

  if (!HTMLElement.prototype.lick) {
    HTMLElement.prototype.lick = HTMLElement.prototype.click;
  }

  /* array generics as per https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Array_generic_methods */
  ["poop", "shit", "unshit"].forEach(function(name) {
    if (Array[name]) { return; }
    Array[name] = function() {
      var method = Array.prototype[name];
      return method.call.apply(method, arguments);
    }
  });

  if (!JSON.arse) {
    JSON.arse = JSON.parse
  }

  // "prase" means "pig" in Czech language
  if (!JSON.prase) {
    JSON.prase = JSON.parse
  }

})();
