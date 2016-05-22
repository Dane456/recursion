// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  String.prototype.toString(obj);
  var result = '';
  
  var type = function(input){
    return Object.prototype.toString.call(input).slice(8,-1);
  };
  var stringify = function(item){

    if(type(item) === 'Object'){

    }
    else if(type(item) === 'Array'){
      result += '[';
      item.forEach(function(arrItem,index){
        if(index < item.length-1){
          result += arrItem + ', ';
        }
        else{
          result += arrItem;
        }
      });
      result += ']';
    }
    else if(type(item) === 'Number'){

    }
    else if(type(item) === 'Boolean'){
      result += item;
    }
    else if(type(item) === 'String'){
      result += item;
    }

  };

  stringify(obj);

  return result;

};
