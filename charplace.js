function charCounting(str) {
  var result = {}//
  var noSpaceStr = str.replace(/\s/g, "").toLowerCase(); //removing spaces
  for (var i = 0; i < noSpaceStr.length; i++) { //sets empty array
     result[noSpaceStr[i]] = [];
  }
  for (var i = 0; i < noSpaceStr.length; i++) { // adds 1 to empty array
    result[noSpaceStr[i]].push(i);
  }
  return result;
}
//
console.log("test string:", charCounting("test string"));


// //leave only unique letters//
// function findUniques(string){
//     var unique='';
//     for(var i=0; i<string.length; i++){
//         if(unique.indexOf(string[i])==-1){
//             unique += string[i];
//         }
//     }
//     return unique;