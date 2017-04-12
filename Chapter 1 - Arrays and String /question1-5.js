function stringCompression(str) {
  var result = '';
	var storage = str.split('').reduce((acc, val)=>{
		acc[val] ? acc[val]++ : acc[val] = 1;
		return acc
	}, {})
	for(var key in storage){
	  result += key + storage[key];
	}
	if(result.length >= str.length){
	  return str;
	}
	return result;
}