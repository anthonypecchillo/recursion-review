// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  var results = [];

  node = node || document.body;

  if ($(node).hasClass(className)) {
    results.push(node);
  }
  
  node.childNodes.forEach(function(child) {
    results = results.concat(getElementsByClassName(className, child));
  });
  
  return results;
};
