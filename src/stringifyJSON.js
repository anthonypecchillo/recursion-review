// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result, key;
  // Check for unstringifiable values first
  if (typeof obj === 'undefined' || typeof obj === 'function') {
    result = '';
  // Check if we have an array
  } else if (Array.isArray(obj)) {
    result = '[';
    for (var i = 0; i < obj.length; i++) {
      result += stringifyJSON(obj[i]);
      result += (i < obj.length - 1) ? ',' : '';
    }
    result += ']';
  // Check for null
  } else if (obj === null) {
    result = 'null';
  // Check if we have an object
  } else if (typeof obj === 'object') {
    result = '{';
    var count = 0;
    for (key in obj) {
      if (typeof obj[key] !== 'undefined' && typeof obj[key] !== 'function') {
        result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';  
        count++;
      }
    }
    if (count !== 0) {
      result = result.substring(0, result.length - 1);
    }
    result += '}';
  } else if (typeof obj === 'string') {
    result = '"' + obj + '"';
  // Everything else can be handled here
  } else {
    result = obj.toString();
  }

  return result;

};
