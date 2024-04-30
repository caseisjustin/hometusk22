function objtoarr(obj) {
	try{
		if(typeof JSON.parse(obj) == "object"){
			obj = JSON.parse(obj)
		}
	}
	catch(err){
		console.log(err)
		console.log("Not an Object")
	}
	let res = []
	for(const k in obj){
		if(typeof obj[k] == "object"){
			res.push([k, objtoarr(obj[k])])
		}
		else
			res.push([k, obj[k]])
	}
	return res
	
}
export {objtoarr}