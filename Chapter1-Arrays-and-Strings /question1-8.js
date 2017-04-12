function isRotation(str1, str2){
	if (str1.length === str2.length && str1.length !== 0){
		var str3 = str1 + str1;
		return str3.includes(str2);
	}
	return false;
}
