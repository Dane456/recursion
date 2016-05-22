// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  // your code here
  
var getElementsByClassName = function(className) {
  
  // your code here
  var results = [];

  var getChildElements = function(element){

    var childElement;
    console.dir(element.childElementCount);
    if(element.childElementCount === 0 && element.className === className){
      return element;
    }
    //if any children have the classname, dig deeper
    else if(element.childElementCount > 0){    
      for(i=0;i<element.childElementCount;i++){
          if(element.children[i].className === className)
            results.push(element.children[i]);
            getChildElements(element.children[i]);
        }
    }

  };

  results.push(getChildElements(document.body));

  return results;
};
};
