// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  var result;
  console.log(json);
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
    if (json.indexOf(':') !== -1) {
      result[parseJSON(json.substring(1, json.indexOf(':')))] = parseJSON(json.substring(json.indexOf(':') + 1));
    }
    
  } else if (json[0] === '"') {
    result = json.substring(0, json.substring(1).indexOf('"') + 2);
    console.log(result.length);
    if (result.length === 0)
    {
      result = undefined;
    }

  }
  return result;
};

/*
i = 1
[test1,test2,test3]
i = indexof ,  then i = 5
*/