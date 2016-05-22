// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:



var getElementsByClassName = function(className) {
  
  // your code here
  var results = [];

  var getChildElements = function(element){

    var childElement;

    for(var j=0;j<element.classList.length;j++){
      if(element.classList[j] === className){
        results.push(element);
      }
    }

    if(element.childElementCount === 0 && element.className === className){
      return;
    }
    
    else if(element.childElementCount > 0){    
      for(var i=0;i<element.childElementCount;i++){
        getChildElements(element.children[i]);
      }
    }
    return;
  };

  getChildElements(document.body);

  return results;
};



