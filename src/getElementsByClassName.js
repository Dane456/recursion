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

    if(element.childElementCount === 0 && element.className === className){
      return;
    }
    //if any children have the classname, dig deeper
    else if(element.childElementCount > 0){    
      for(var i=0;i<element.childElementCount;i++){
        for(var j=0;j<element.children[i].classList.length;j++){
          if(element.children[i].classList[j] === className){
            results.push(element.children[i]);
          }
        }
        getChildElements(element.children[i]);
      }
    }

    return;

  };

  getChildElements(document.body);

  return results;
};



