// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  var result;
  // Arrays
  if (json[0] === '[') {
    result = [];
    var i = 1;
    var j = 0;
    var endArray = json.indexOf(']');
    while (i < endArray) {
      result.push(parseJSON(json.substring(i)));
      j = json.substring(i).indexOf(',');
      if (j !== -1) {
        i = j + i + 1;
      } else {
        break;
      }
       
    }
    //result.push(parseJSON(json.substring(1)));
  } else if (json[0] === '{') {
    result = {};
    var k = 1;
    var l = 0;
    var endObject = json.indexOf('}');
    while (k < endObject) {
      if (json.indexOf(':') === -1) {
        break;
      }

      result[parseJSON(json.substring(k, json.indexOf(':')))] = parseJSON(json.substring(k + 1).indexOf(':') + 1 + k);
      l = json.substring(k).indexOf(',');
      if (l !== -1) {
        k = l + k + 1;
      } else {
        break;
      }
    }
    /*if (json.indexOf(':') !== -1) {
      result[parseJSON(json.substring(1, json.indexOf(':')))] = parseJSON(json.substring(json.indexOf(':') + 1));
    }*/

    
  } else if (json[0] === ' ') {
    result = parseJSON(json.substring(1));
  } else if (json[0] === '"') {
    result = json.substring(1, json.substring(1).indexOf('"') + 1);

  }
  return result;
};

/*
i = 1
[["test1","test2","test3"],"test4"]
i = indexof ,  then i = 5
*/
