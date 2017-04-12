function isPermutation(str1, str2){
	var str1Arr = str1.split('').sort((a,b)=>{
		return a > b;
	})
	var str2Arr = str2.split('').sort((a,b)=>{
		return a > b;
	})
	return JSON.stringify(str2Arr) === JSON.stringify(str1Arr);
}