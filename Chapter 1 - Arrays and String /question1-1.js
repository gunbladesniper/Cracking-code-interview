function allUnique(str){
  var result = true;
  str.split('').forEach((elem)=>{
    if(str.indexOf(elem) !== str.lastIndexOf(elem)){
      result = false;
    }
  });

  return result;
}