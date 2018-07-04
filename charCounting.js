//test code
var str = "akljsda;k s j d a s ; bkdj";
//



function spaceEraser(str) {
var noSpaceStr = str.replace(/\s/g, "");
return noSpaceStr;
}
function countLetters(noSpaceStr) {
  for (var i = 0; i < noSpaceStr.length, i++) {
    console.log(createGlobalButton(Keyv));
    var splitStr = str.replace(/[a]/g, ""); //looking for "a" and replacing with ""
    console.log("number of remaining letters; " + splitStr.length);
  }
}
//countLetters(str);


function createGlobalButton(Keyv) {
  return "/[^" + Keyv + "]/g"

}
