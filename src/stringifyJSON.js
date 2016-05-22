// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var result = '';
  var itemNum = 0;
  
  var type = function(input){
    return Object.prototype.toString.call(input).slice(8,-1);
  };
  var stringify = function(item){
    
    if(type(item) === 'Object'){
      var oTemp = '{';
      var count= 0;
      for (var prop in item){
        if(item[prop] !== undefined && type(item[prop])!== 'Function'){
          if(Object.keys(item).length === 0){
              oTemp += stringify(prop) + ':' + stringify(item[prop]) ;
          }
          else if(count===0){
            oTemp += stringify(prop) + ':' + stringify(item[prop]);
          }
          else{
            oTemp += "," + stringify(prop) + ':' + stringify(item[prop]);
          }
          count++;
    }
      }
      return oTemp + '}';
    }
    else if(type(item) === 'Array'){
      var temp = '[';
      //result += '[';

      for(var i=0;i<item.length;i++){
      //item.forEach(function(arrItem,index){
        if(i < item.length-1){
          //result += stringify(arrItem) + ',';
          temp += stringify(item[i]) + ',';
        }
        else{
          temp += stringify(item[i]);
        }
      }
      temp += ']';
      return temp;
    }
    else if(type(item) === 'Number' || type(item) === 'Boolean' || type(item) === 'Null'){
      if(itemNum===0){
        itemNum++;
        return String(item);
      }
      return item;
    }

    else if(type(item) === 'String'){
      return '"' + item + '"';
    }

  };

  result = stringify(obj);

  return result;

};