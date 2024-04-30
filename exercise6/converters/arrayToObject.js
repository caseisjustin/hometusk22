function arrtoobj(arr){
    try{
		if(typeof JSON.parse(arr) == "object"){
            arr = JSON.parse(arr)
		}
	}
	catch(err){
		return "Not an Object"
	}
    let res = {}
    for(let i in arr){
        for(let j in i){
            res[arr[i][0]] = arr[i][1]
        }
    }
    return res

}
export {arrtoobj}
