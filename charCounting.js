//test code
var str = "test string"; //test string

function charCounting(str) {
  var result = {}//
  var noSpaceStr = str.replace(/\s/g, "").toLowerCase(); //removing spaces
  for (var i = 0; i < noSpaceStr.length; i++) { //sets empty array
     result[noSpaceStr[i]] = 0;
  }
  for (var i = 0; i < noSpaceStr.length; i++) { // adds 1 to empty array
    result[noSpaceStr[i]] += 1;
  }
  return result;
}
//
console.log(charCounting(str));

// function countLetters(noSpaceStr) {
//   var runtime = findUniques(splitStr).length // times to run loop (length of split string minus duplicate letters)
//   for (var i = 0; i < runtime, i++) {
//     length = findUniques(splitStr)
//     if (length[i] === splitStr[i]) {
//       result.findUniques(splitStr)[i] = function (){
//          var count = str.replace(createGloabalButton(), "").length;
//          return count;
//           //looking for "a" and replacing with ""
//       }
//     }
//     console.log("number of remaining letters; " + splitStr.length);
//   }
// }
// //countLetters(str);


// function createGlobalButton(Keyv) {
//   return "/[^" + Keyv + "]/g"

// }

// //leave only unique letters//
// function findUniques(string){
//     var unique='';
//     for(var i=0; i<string.length; i++){
//         if(unique.indexOf(string[i])==-1){
//             unique += string[i];
//         }
//     }
//     return unique;