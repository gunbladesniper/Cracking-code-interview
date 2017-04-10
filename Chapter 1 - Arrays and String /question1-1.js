function allUnique(str){
  var results = true;
  str.split('').forEach((elem)=>{
    if(str.indexOf(elem) !== str.lastIndexOf(elem)){
      result = false;
    }
  });
  return results;
}